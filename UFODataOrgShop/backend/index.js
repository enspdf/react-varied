import app from './src/app.js'
import dotenv from 'dotenv'
import connectToDatabase from './src/config/db.js'

dotenv.config({ path: './config.env' })

const PORT = process.env.PORT

connectToDatabase()
app.listen(PORT, () => console.log(`Server is running on port ${PORT} at ${process.env.NODE_ENV} mode`))