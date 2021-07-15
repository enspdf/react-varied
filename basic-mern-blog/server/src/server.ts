import http from 'http'
import express, { Request, Response, NextFunction } from 'express'
import logging from './config/logging'
import config from './config/config'
import mongoose from 'mongoose'
import firebaseAdmin from 'firebase-admin'

import userRoutes from './routes/user'
import blogRoutes from './routes/blog'

const router = express()

const httpServer = http.createServer(router)

let serviceAccountKey = require('./config/serviceAccountKey.json')

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccountKey)
})

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => logging.info('Mongo Connected'))
    .catch((error) => logging.error(error))

router.use((req: Request, res: Response, next: NextFunction) => {
    logging.info(`METHOD: '${req.method}' - URL: '${req.url}' - IP: '${req.socket.remoteAddress}'`)

    res.on('finish', () => `METHOD: '${req.method}' - URL: '${req.url}' - IP: '${req.socket.remoteAddress}' - '${res.statusCode}'`)

    next()
})

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')

        return res.status(200).json({})
    }

    next()
})

router.use('/users', userRoutes)
router.use('/blogs', blogRoutes)

router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found')

    return res.status(404).json({ message: error.message })
})

httpServer.listen(config.server.port, () => logging.info(`Server is running at ${config.server.host}:${config.server.port} ...`))
