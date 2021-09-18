import { Router } from 'express'
import { createProduct, getProducts, getSingleProduct } from '../controllers/productController.js'
import { isAuthenticatedUser } from '../middlewares/auth.js'

const router = Router()

router.route('/products').get(isAuthenticatedUser, getProducts)
router.route('/products/new').post(createProduct)
router.route('/products/:id').get(getSingleProduct)

export default router