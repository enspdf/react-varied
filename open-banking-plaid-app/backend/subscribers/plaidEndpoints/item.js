const plaidClient = require('../../libs/PlaidClient')
const { getAccessToken } = require('../plaidAuth/accessToken')

const getAccessItem = async (accessToken) => {
    const item = await plaidClient.getItem(accessToken)

    return item
}

module.exports = getAccessToken