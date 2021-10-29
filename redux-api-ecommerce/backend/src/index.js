const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkot', stripeRoute)

app.listen(process.env.PORT || 5000, () => console.log('Server started on port 5000'));