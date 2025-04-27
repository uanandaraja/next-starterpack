import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { auth } from '@/lib/auth'

const app = new Hono()
app.on(["POST", "GET"], "api/auth/**", (c) => auth.handler(c.req.raw));

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)