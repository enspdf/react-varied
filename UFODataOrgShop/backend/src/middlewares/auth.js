import User from "../models/user.js"
import jwt from "jsonwebtoken"

const isAuthenticatedUser = async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({
            message: "You are not logged in"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id)

    next()
}

export {
    isAuthenticatedUser
}