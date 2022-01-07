const plaidClient = require('../../libs/PlaidClient')

const getAccessToken = async (publicToken) => {
    const response = await plaidClient.exchangePublicToken(publicToken)

    return response
}

const deleteCurrentAccessToken = async (accessToken) => {
    const response = await plaidClient.invalidateAccessToken(accessToken)

    return response
}

module.exports = { getAccessToken, deleteCurrentAccessToken }