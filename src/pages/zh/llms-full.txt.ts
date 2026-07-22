import type { APIRoute } from 'astro';
import { buildLlmsFull } from '@/lib/llms';

// The entire Chinese corpus concatenated, for LLM ingestion.
export const GET: APIRoute = async () =>
  new Response(await buildLlmsFull('zh'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
