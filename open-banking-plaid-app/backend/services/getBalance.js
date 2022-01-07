const getAccountBalance = require('../subscribers/plaidEndpoints/balance')

const getBalance = async (accessToken, accountId) => {
    const auth = await getAccountBalance(accessToken, [accountId])

    return auth
}

module.exports = getBalance