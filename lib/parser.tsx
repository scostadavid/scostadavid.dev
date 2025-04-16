import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function parseFields(fields: any) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const entry = node.data.target.fields;
  
        if (node.data.target.sys.contentType.sys.id === 'codeblock') {
          const language = entry.language || 'javascript';
          const code = entry.code;
  
          return (
            <SyntaxHighlighter language={language} style={obsidian} showLineNumbers>
              {code}
            </SyntaxHighlighter>
          );
        }
  
        return null;
      },
    },
  };

  return {
    title: fields.title,
    excerpt: fields.excerpt || '',
    slug: fields.slug,
    coverImage: fields.cover?.fields?.file?.url ? `https:${fields.cover.fields.file.url}` : null,
    date: fields.date || new Date().toISOString(),
    tags: fields.tags || [],
    contentHtml: fields.content ? documentToReactComponents(fields.content, options) : '',
  };
}