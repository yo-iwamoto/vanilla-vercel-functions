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

### 🚀 Serverless Functions ([implementation](/api/hello.ts))

Demo: https://vanilla-vercel-functions.vercel.app/api/hello

Document: https://vercel.com/docs/concepts/functions/serverless-functions

### ⚡️ Edge Functions ([implementation](/api/edge.ts))

Demo: https://vanilla-vercel-functions.vercel.app/api/edge

Document: https://vercel.com/docs/concepts/functions/edge-functions

### 🚂 express ([implementation](/api/express/index.ts))

You can also use [express](https://github.com/expressjs/express) for more complex routing, or for using various middlewares.

Demo: https://vanilla-vercel-functions.vercel.app/api/express/posts/dynamic-slug

Document: https://vercel.com/guides/using-express-with-vercel

A setting for rewrites in `vercel.json` is required, and it already exists.

### 🔑 KV ([implementation](/api/kv.ts))

Activate Vercel KV on your dashboard, pull env and set it to .env, then you can access KV!

Demo: https://vanilla-vercel-functions.vercel.app/api/kv

Document: https://vercel.com/docs/storage/vercel-kv

**⚠️ Sample visitor-count features is based on `ctx.waitUntil`, but it doesn't seem to work properly on dev server. It would work on production.**

## Environment Variables

You can use `.env` file locally.

```
cp .env.example .env
```

In production, you should set environment variables via `vercel env` command, or on dashboard.

## Static Files

Vercel support static file serving in `public` directory (by default).

Demo: https://vanilla-vercel-functions.vercel.app/author.jpg
