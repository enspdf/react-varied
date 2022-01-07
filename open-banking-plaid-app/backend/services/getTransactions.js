const OperationalCustomError = require('../libs/errors/OperationalCustomError')
const verfyStartEndDateFormat = require('../libs/verifyStartEndDateFormat')

const getAccountTransactions = require('../subscribers/plaidEndpoints/transactions')

const getTransactions = async (accessToken, dates, accountId) => {
    const { startDate, endDate } = dates

    if (!startDate || !endDate) {
        throw new OperationalCustomError(400, 'MissingFieldError', 'ERR_MISSING_ARGS', 'INVALID_REQUEST', 'No transactions start or end date passed')
    }

    if (verifyStartEndDateFormat(startDate, endDate, 'YYYY-MM-DD')) {
        throw new OperationalCustomError(400, 'InvalidFormatError', 'ERR_INVALID_ARG_VALUE', 'INVALID_REQUEST', 'Wrong date format passed')
    }

    const transactions = await getAccountTransactions(accessToken, startDate, endDate, accountId)

    return transactions
}

module.exports = getTransactions