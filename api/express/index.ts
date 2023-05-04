import express, { Router } from 'express';

const app = express();

const router = Router();

router.get('/', (_, res) => {
  res.json({
    message: 'Hello from express!',
  });
});

router.get('/posts/:slug', (req, res) => {
  res.json({
    post: {
      title: 'Test Post',
      slug: req.params['slug'],
    },
  });
});

app.use('/api/express', router);

export default app;
