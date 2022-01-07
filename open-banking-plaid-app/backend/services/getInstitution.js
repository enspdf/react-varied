const OperationalCustomError = require('../libs/errors/OperationalCustomError')

const getInstitutionById = require('../subscribers/plaidEndpoints/institutution')
const getItem = require('./getItem')

const getInstitution = async (accessToken) => {
    const item = await getItem(accessToken)

    if (!item || !item.item || !item.item.institution_id) {
        throw new OperationalCustomError(404, 'InstitutionNotFound', 'ERR_NOT_FOUND', 'NOT_FOUND', 'Institution not found in the Plaid Item')
    }

    const institution = await getInstitutionById(item.item.institution_id)

    return institution
}

module.exports = getInstitution