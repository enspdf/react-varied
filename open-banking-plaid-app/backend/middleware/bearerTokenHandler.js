const bearerTokenExtractor = require('../libs/bearerTokenExtractor')
const OperationalCustomError = require('../libs/errors/OperationalCustomError')

const bearerTokenHandler = (req, res, next) => {
    if (req.headers.authorization) {
        res.locals.accessToken = bearerTokenExtractor(req.headers.authorization)

        next()
    } else {
        throw new OperationalCustomError(401, 'TokenError', 'ERR_NO_TOKEN', 'INVALID_REQUEST', 'No token received')
    }
}

module.exports = bearerTokenHandler