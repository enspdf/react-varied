const plaidClient = require('../../libs/PlaidClient')

const getAccountBalance = async (accessToken, account_ids) => {
    const auth = await plaidClient.getBalance(accessToken, { account_ids: account_ids })

    return auth
}

module.exports = getAccountBalance