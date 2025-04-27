import { Hono } from 'hono'
import { auth } from './v1/auth'

export const api = new Hono()
  .route('/auth', auth)