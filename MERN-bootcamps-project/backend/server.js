import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

import connectDB from './config/db.js'
import errorHandler from './middlewares/errorHandler.js'
import bootcampRoutes from './routes/bootcampRoutes.js'

connectDB()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use('/api/v1/bootcamps', bootcampRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))