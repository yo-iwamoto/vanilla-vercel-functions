import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { handle } from 'hono/nextjs'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api/hono')

app.get('/', (c) => {
  return c.json({
    message: 'Hello from Hono',
  })
})

app.get('/posts/:slug', (c) => {
  return c.json({
    post: {
      title: 'Test Post',
      slug: c.req.param('slug'),
    },
  })
})

app.get(
  '/auth',
  basicAuth({
    username: 'vercel',
    password: 'hono',
  }),
  (c) => {
    return c.text('Authorized!')
  }
)

export default handle(app)
