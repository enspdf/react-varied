import express from 'express'
import cookieParser from 'cookie-parser'

import productRoutes from './routes/product.js'
import authRoutes from './routes/auth.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/v1', productRoutes)
app.use('/api/v1', authRoutes)

export default app