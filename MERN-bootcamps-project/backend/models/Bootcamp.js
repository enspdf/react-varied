import mongoose from 'mongoose'

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name to the bootcamp'],
        unique: true
    },
    rating: {
        type: Number,
        required: [true, 'Please provide a rate to the bootcamp']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description to the bootcamp']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price to the bootcamp']
    }
})

const Bootcamp = mongoose.model('Bootcamp', bootcampSchema)

export default Bootcamp