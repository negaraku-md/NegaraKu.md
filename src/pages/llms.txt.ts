import type { APIRoute } from 'astro';
import { buildLlmsIndex } from '@/lib/llms';

// Machine index (Bahasa Malaysia, default) following the llmstxt.org convention.
export const GET: APIRoute = async () =>
  new Response(await buildLlmsIndex('ms'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
