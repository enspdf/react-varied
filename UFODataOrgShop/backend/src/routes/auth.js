import { Router } from 'express'
import { registerUser, loginUser, logoutUser } from '../controllers/userController.js'

const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)

export default router