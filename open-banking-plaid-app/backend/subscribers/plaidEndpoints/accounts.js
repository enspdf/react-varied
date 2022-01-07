const plaidClient = require('../../libs/PlaidClient')

const getItemAccounts = async (accessToken) => {
    const accounts = await plaidClient.getAccounts(accessToken)

    return accounts
}

module.exports = getItemAccounts