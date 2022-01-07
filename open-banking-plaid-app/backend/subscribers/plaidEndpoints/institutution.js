const plaidClient = require('../../libs/PlaidClient')

const getInstitutionById = async (institutionId) => {
    const institution = await plaidClient.getInstitutionById(institutionId)

    return institution
}

module.exports = getInstitutionById