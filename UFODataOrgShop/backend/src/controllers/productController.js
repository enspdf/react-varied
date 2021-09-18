import Product from '../models/product.js'

const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)

        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()

        res.status(200).json({
            success: true,
            products
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getSingleProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Product ID not found"
        })
    }
}

export {
    createProduct,
    getProducts,
    getSingleProduct
}