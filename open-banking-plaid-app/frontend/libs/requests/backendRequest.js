import fetchRequest from './fetchRequest'
import fetchRequestWithAuth from './fetchRequestWithAuth'
import fetchRequestWithSettingHttpOnlyCookie from './fetchRequestWithSettingHttpOnlyCookie'
import fetchRequestWithDeleteToken from './fetchRequestWithDeleteToken'

import generateErrorObject from '../generateErrorObject'
import nestedObjectCheck from '../nestedObjectCheck'

const backendRequest = async (req, res, address, method = 'GET') => {
    let response

    const wrongMethodError = () => generateErrorObject(405, 'Method not allowed')

    if (address === 'http://localhost:8002') {
        if (method === 'GET') {
            response = await fetchRequest(address, {
                method: method
            })
        } else {
            throw wrongMethodError()
        }
    } else if (address === 'http://localhost:8002/access-token') {
        if (method === 'GET') {
            if (nestedObjectCheck(req, 'body.publicToken')) {
                response = await fetchRequestWithSettingHttpOnlyCookie(res, address, req.body.publicToken)
            } else {
                throw generateErrorObject(400, 'No public token included')
            }
        } else if (method === 'DELETE') {
            response = await fetchRequestWithDeleteToken(res, address, method, res.locals.bearerToken)
        } else {
            throw wrongMethodError()
        }
    } else if (address === 'http://localhost:8002/auth'
        || address === 'http://localhost:8002/institution'
        || address === 'http://localhost:8002/accounts'
        || address.startsWith('http://localhost:8002/balance')
        || address.startsWith('http://localhost:8002/transactions')) {
        if (method === 'GET') {
            response = await fetchRequestWithAuth(address, method, res.locals.bearerToken)
        } else {
            throw wrongMethodError()
        }
    } else {
        throw generateErrorObject(404, 'No backend endpoint available')
    }

    if (!response.status_code || response.status_code >= 400) throw response

    res.status(response.status_code).json(response)
}

export default backendRequest