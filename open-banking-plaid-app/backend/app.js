const express = require('express')
const cors = require('cors')

require('dotenv').config()

const router = require('./routes/index')

const errorHandler = require('./middleware/errorHandler')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)
app.use(errorHandler)

app.listen(port, console.log(`Server is running at http://localhost:${port}`))