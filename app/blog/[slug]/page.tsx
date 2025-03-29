// app/blog/[slug]/page.tsx
"use server";
import { getPostData, getAllPostSlugs } from "@/lib/posts"
import BlogPostClient from "@/components/blog-post-client";

export async function generateStaticParams() {
  const posts = await getAllPostSlugs()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    return <div>Post not found</div>
  }

  return <BlogPostClient post={post} />
}