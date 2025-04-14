'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShareButtons } from '@/components/share-buttons';
import { LanguageSwitcher } from '@/components/language-switcher';

export type BlogPost = {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string | null;
  date: string;
  tags: string[];
  contentHtml: string;
};

export default function BlogPostClient({ post, locale, t }: { post: BlogPost; locale: string; t: any }) {
  const [url, setUrl] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scostadavid.dev';
    setUrl(`${baseUrl}${pathname}`);
  }, [pathname]);

  if (!post) {
    return (
      <main className='min-h-screen bg-black'>
        <div className='container py-24'>
          <div className='max-w-3xl mx-auto text-white'>Post not found</div>
        </div>
      </main>
    );
  }

  const fullImageUrl = post.coverImage
    ? `${post.coverImage}`
    : undefined;

  return (
    <main className='min-h-screen bg-black'>
      <Head>
        <title>{post.title} | David Costa Blog</title>
        <meta name='description' content={post.excerpt} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.excerpt} />
        {fullImageUrl && <meta property='og:image' content={fullImageUrl} />}
        <meta property='og:url' content={url} />
        <meta property='og:type' content='article' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={post.title} />
        <meta name='twitter:description' content={post.excerpt} />
        {fullImageUrl && <meta name='twitter:image' content={fullImageUrl} />}

        <link rel='alternate' hrefLang='pt' href={`https://scostadavid.dev/pt/blog/${post.slug}`} />
        <link rel='alternate' hrefLang='en' href={`https://scostadavid.dev/en/blog/${post.slug}`} />
        <link rel='alternate' hrefLang='x-default' href={`https://scostadavid.dev/${locale}/blog/${post.slug}`} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              image: fullImageUrl,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: 'David Costa',
              },
            }),
          }}
        />
      </Head>

      <div>
        <div className='flex justify-between items-center mb-6'>
          <Link href={`/${locale}/blog`}>
            <Button variant='ghost' className='text-white/70 hover:text-white'>
              <ArrowLeft className='mr-2 h-4 w-4' /> {t.blog.backToBlog}
            </Button>
          </Link>
          <LanguageSwitcher />
        </div>

        <article className='max-w-3xl mx-auto'>
          {post.coverImage && (
            <div className='relative aspect-video mb-8 overflow-hidden rounded-style border border-white/10'>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          )}

          <div className='mb-8'>
            <div className='flex items-center gap-2 mb-4 text-white/50 text-sm'>
              <Calendar className='h-4 w-4' />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h1 className='text-4xl md:text-5xl font-black tracking-tighter text-white mb-6'>
              {post.title}
            </h1>

            {post.tags && post.tags.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-6'>
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant='outline' className='border-white/20 text-white/70 rounded-style'>
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className='border-t border-white/10 my-8' />

          <div className='prose prose-invert prose-lg max-w-none text-white/90'>
            {post.contentHtml}
          </div>

          <div className='mt-12 pt-8 border-t border-white/10 flex justify-between items-center'>
            <ShareButtons title={post.title} t={t} url={url} />
          </div>
        </article>
      </div>
    </main>
  );
}
