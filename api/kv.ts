import { RequestContext } from '@vercel/edge';
import kv from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

export default async function handler(_: Request, ctx: RequestContext) {
  const currentCount = (await kv.get<number>('visitor-count')) ?? 0;
  const incremented = currentCount + 1;

  // It doesn't seem to work properly on the dev server.
  ctx.waitUntil(kv.set('visitor-count', incremented));

  return new Response(`You're No. ${incremented} visitor!`);
}
