const moment = require('moment')

const verifyStartEndDateFormat = (startDate, endDate, format) => {
    const isStartDateFormat = moment(startDate, format, true).isValid()
    const isEndDateFormat = moment(endDate, format, true).isValid()

    return (isStartDateFormat !== true || isEndDateFormat !== true)
}

module.exports = verifyStartEndDateFormat