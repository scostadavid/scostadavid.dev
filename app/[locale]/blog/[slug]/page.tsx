// app/[locale]/blog/[slug]/page.tsx

import BlogPostClient from '@/components/blog-post-client';
import { i18n } from '@/lib/i18n';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

type Props = {
  params: {
    locale: string
    slug: string
  };
};

export async function generateStaticParams() {
  const locales = ['en-US', 'pt-BR'];
  const paths = [];

  for (const locale of locales) {
    const posts = await getAllPosts(locale)
    const localeShort = locale.split('-')[0]

    for (const post of posts) {
      paths.push({
        locale: localeShort,
        slug: post.slug,
      });
    }
  }
  return paths;
}

export default async function BlogPostPage({ params }: Props) {
  const {locale, slug} = params;
  const fullLocale = locale === 'pt' ? 'pt-BR' : 'en-US';
  const t = i18n(locale);

  const post = await getPostBySlug(slug, fullLocale)

  if (!post) return <div className="text-white">Post not found</div>

  return (
    <div className="container py-24">
      <BlogPostClient post={post} locale={locale} t={t} />
    </div>
  )
}