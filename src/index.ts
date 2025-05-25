import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { weatherRouter }   from './routes/weather.js'

import dotenv from 'dotenv'

dotenv.config()

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

// app.get('/salve', (c) => {
//   return c.text('Salve isead Hello')
// })

// weatherRoutes(app)


app.route('/api/weather', weatherRouter)


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
