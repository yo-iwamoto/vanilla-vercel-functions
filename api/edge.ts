import { geolocation } from '@vercel/edge';

export const config = {
  runtime: 'edge',
};

export default function handler(req: Request) {
  const { city } = geolocation(req);

  return new Response(`Hello, from ${city} I'm now an Edge Function!`);
}
