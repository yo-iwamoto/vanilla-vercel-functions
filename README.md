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

## 🚀 Serverless Functions

[/api/hello.ts](/api/hello.ts)

Try: http://localhost:3000/api/hello

Docs: https://vercel.com/docs/concepts/functions/serverless-functions

## ⚡️ Edge Functions

[/api/edge.ts](/api/edge.ts)

Try: http://localhost:3000/api/edge

Docs: https://vercel.com/docs/concepts/functions/edge-functions

## Environment Variables

You can use `.env` file locally.

```
cp .env.example .env
```

In production, you should set environment variables via `vercel env` command.
