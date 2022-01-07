const { deleteCurrentAccessToken } = require('../subscribers/plaidAuth/accessToken')

const deleteAccessToken = async (accessToken) => {
    const newAccessToken = await deleteCurrentAccessToken(accessToken)

    const { new_access_token, ...response } = newAccessToken

    return response
}

module.exports = deleteAccessToken