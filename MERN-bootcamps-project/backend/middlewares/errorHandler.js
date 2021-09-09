import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
    console.log(err);

    let error = { ...err }

    error.message = err.message

    if (err.message === "CastError") {
        const message = "Resource not found"
        error = new ErrorResponse(message, 404)
    }

    if (err.code === 11000) {
        const message = "Duplicate field value entered"
        error = new ErrorResponse(message, 400)
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(error => error.message).join(', ')
        error = new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })
}

export default errorHandler