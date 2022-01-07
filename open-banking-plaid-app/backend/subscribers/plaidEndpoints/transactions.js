const plaidClient = require('../../libs/PlaidClient')

const getAccountTransactions = async (accessToken, startDate, endDate, accountId) => {
    const optionsTransaction = {
        account_ids: [accountId],
    }

    const transactions = await plaidClient.getTransactions(accessToken, startDate, endDate, optionsTransaction)

    return transactions
}

module.exports = getAccountTransactions