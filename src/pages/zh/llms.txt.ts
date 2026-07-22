import type { APIRoute } from 'astro';
import { buildLlmsIndex } from '@/lib/llms';

// Chinese machine index (llmstxt.org convention).
export const GET: APIRoute = async () =>
  new Response(await buildLlmsIndex('zh'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
