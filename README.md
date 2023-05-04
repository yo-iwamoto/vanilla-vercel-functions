# 🍦 vanilla-vercel-functions examples

An example project for using Vercel Serverless Functions and Edge Functions with vanilla Node.js (without Next.js).

## Getting Started

You should install `vercel` CLI, if you haven't installed yet.

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

**By default, project region is set to `hnd1` (Tokyo). You can choose other regions in `vercel.json`**

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

A setting for rewrites in `vercel.json` is required, and it already exists.

### 🔑 KV

Activate Vercel KV on your dashboard, pull env and set it to .env, then you can access KV!

Local URL: http://localhost:3000/api/kv

Document: https://vercel.com/docs/storage/vercel-kv

## Environment Variables

You can use `.env` file locally.

```
cp .env.example .env
```

In production, you should set environment variables via `vercel env` command.
