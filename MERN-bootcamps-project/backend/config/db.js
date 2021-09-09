import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

const connectionString = process.env.DATABASE_CONNECTION

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.log('MongoDB connection FAIL');
        console.log(error)

        process.exit(1)
    }
}

export default connectDB