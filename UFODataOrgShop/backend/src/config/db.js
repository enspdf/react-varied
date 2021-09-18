import mongoose from 'mongoose'

const connectToDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(connection => console.log(`MongoDB connected with HOST: ${connection.connection.host}`))
}

export default connectToDatabase