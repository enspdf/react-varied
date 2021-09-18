import User from "../models/user.js"
import storeToken from "../utils/jwt.js"

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        const user = await User.create({ name, email, password })
        const token = user.getJwtToken()

        res.status(201).json({
            success: true,
            user,
            token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide email and password"
        })
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    const validPassword = await user.comparePassword(password)

    if (!validPassword) {
        return res.status(401).json({
            message: 'Invalid credentials'
        })
    }

    storeToken(user, 200, res)
}

const logoutUser = (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "User logged out successfully"
    })
}

export {
    registerUser,
    loginUser,
    logoutUser
}