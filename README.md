# vanilla-vercel-functions

An example project for using Vercel Serverless Functions and Edge Functions with vanilla Node.js (without Next.js).

## Getting Started

### Setup

```bash
pnpm i
pnpm start # script can't be `dev` because of a `vercel` CLI constraint
```

When you run `pnpm start` for the first time, a prompt for vercel project settings should appear, so please configure it.

Then, you can see your API is running at http://localhost:3000/api/hello.

### Deploy

```bash
vercel deploy
```

## Guides

### 🚀 Serverless Functions

[/api/hello.ts](/api/hello.ts)

Local URL: http://localhost:3000/api/hello

Document: https://vercel.com/docs/concepts/functions/serverless-functions

### ⚡️ Edge Functions

[/api/edge.ts](/api/edge.ts)

Local URL: http://localhost:3000/api/edge

Document: https://vercel.com/docs/concepts/functions/edge-functions

### 🚂 express

You can also use [express](https://github.com/expressjs/express) for more complex routing, or for using various middlewares.

[/api/express/index.ts](/api/express/index.ts)

Local URL: http://localhost:3000/api/express/posts/dynamic-slug

Document: https://vercel.com/guides/using-express-with-vercel

## Environment Variables

You can use `.env` file locally.

```
cp .env.example .env
```

In production, you should set environment variables via `vercel env` command.
