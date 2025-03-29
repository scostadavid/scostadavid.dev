// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compile } from '@mdx-js/mdx'

const postsDirectory = path.join(process.cwd(), 'public/blog/')

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  folder: string,
  coverImage?: string
  content?: string
  contentHtml?: string
  author?: string
}

let cachedPosts: BlogPost[] | null = null

export async function getSortedPostsData(): Promise<BlogPost[]> {
  if (cachedPosts) return cachedPosts

  try {
    // Verifica se o diretório existe
    if (!fs.existsSync(postsDirectory)) {
      console.error('Posts directory not found:', postsDirectory)
      return []
    }

    const postDirs = fs.readdirSync(postsDirectory)
      .filter(dir => {
        const dirPath = path.join(postsDirectory, dir)
        const isDirectory = fs.statSync(dirPath).isDirectory()
        const hasMarkdown = fs.existsSync(path.join(dirPath, 'index.md'))
        
        return isDirectory && hasMarkdown
      })

    const allPostsData = await Promise.all(
      postDirs.map(async (postDir) => {
        try {
          const fullPath = path.join(postsDirectory, postDir, 'index.md')
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const matterResult = matter(fileContents)

          let contentHtml = ''
          if (matterResult.content) {
            const processedContent = await compile(matterResult.content)
            contentHtml = String(processedContent)
          }

          let coverImage = matterResult.data.cover || null
          if (coverImage && !coverImage.startsWith('/') && !coverImage.startsWith('http')) {
            coverImage = `/blog/${postDir}/${coverImage}`
          }

          return {
            ...matterResult.data,
            slug: matterResult.data.slug || generateSlug(matterResult.data.title),
            content: matterResult.content,
            contentHtml,
            coverImage,
            folder: postDir,
            date: new Date(matterResult.data.date).toISOString(),
            excerpt: matterResult.data.excerpt || '',
            tags: matterResult.data.tags || [],
          } as BlogPost
        } catch (error) {
          console.error(`Error processing post ${postDir}:`, error)
          return null
        }
      })
    )

    const nonNullPosts = allPostsData.filter((post): post is BlogPost => post !== null)
    cachedPosts = nonNullPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return cachedPosts

  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const posts = await getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}


import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export async function getPostData(slug: string): Promise<BlogPost | null> {
  const posts = await getSortedPostsData()
  const post = posts.find((post) => post.slug === slug) || null
  
  if (post && post.content) {
    const html = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(post.content)
    
    return {
      ...post,
      contentHtml: String(html)
    }
  }
  
  return post
}
