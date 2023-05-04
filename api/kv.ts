import { RequestContext } from '@vercel/edge';
import kv from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

export default async function handler(_: Request, _ctx: RequestContext) {
  const currentCount = (await kv.get<number>('visitor-count')) ?? 0;
  const incremented = currentCount + 1;

  await kv.set('visitor-count', incremented);
  // You should use `ctx.waitUntil` in production for performance reasons.
  // It doesn't work locally, though.
  // ctx.waitUntil(kv.set('visitor-count', incremented));

  return new Response(`You're No. ${incremented} visitor!`);
}
