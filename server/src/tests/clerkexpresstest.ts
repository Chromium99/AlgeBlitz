import 'dotenv/config'
import express from 'express'
import { clerkMiddleware } from '@clerk/express'

const app = express()

app.use(clerkMiddleware())

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})