const getItemAccounts = require('../subscribers/plaidEndpoints/accounts')

const getAccounts = async (accessToken) => {
    const accounts = await getItemAccounts(accessToken)

    return accounts
}

module.exports = getAccounts