// lib/posts.ts
import {createClient} from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

export async function getAllPosts(locale = 'en-US') {
  const entries = await client.getEntries({
    content_type: 'post',
    locale: locale,
    order: [`-fields.${'published'}`],
  });

  return entries.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    coverImage: item.fields?.cover.fields.file ?? null,
    date: item.fields.published,
    tags: item.fields.tags || [],
    folder: item.sys.id, // ou outro identificador único, se necessário
  }));
}

import { parseFields } from './parser';

export async function getPostBySlug(slug: string, locale = 'en-US') {
  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    locale: locale,
    limit: 1,
  });

  const fields = entries.items[0]?.fields;

  if (!fields) return null;

  return parseFields(fields);
}
