import { requireAuth } from '@clerk/express'
import express from 'express'

const app = express()

app.use(requireAuth())

// Apply middleware to a specific route - requires `process.env.CLERK_SIGN_IN_URL` to be present
app.get('/protected', requireAuth(), (req, res) => {
  res.send('This is a protected route')
})

app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), (req, res) => {
  res.send('This is a protected route')
})

