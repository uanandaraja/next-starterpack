import { Hono } from 'hono'

export const auth = new Hono()

auth.post('/login', async (c) => {
  return c.json({ message: 'login endpoint' })
})

auth.post('/register', async (c) => {
  return c.json({ message: 'register endpoint' })
})