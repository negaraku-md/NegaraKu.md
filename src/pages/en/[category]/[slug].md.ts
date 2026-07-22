import type { APIRoute } from 'astro';
import { articlePaths } from '@/lib/paths';
import { articleToMarkdown } from '@/lib/raw';
import type { Article } from '@/lib/content';

export async function getStaticPaths() {
  return articlePaths('en');
}

export const GET: APIRoute = ({ props }) => {
  const { article } = props as { article: Article };
  return new Response(articleToMarkdown(article, 'en'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
