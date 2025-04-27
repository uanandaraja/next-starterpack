import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { api } from '@/app/server/api'

const app = new Hono().basePath('/api')
app.route('/v1', api)

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)