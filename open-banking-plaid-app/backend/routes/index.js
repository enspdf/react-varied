const express = require('express')
const router = express.Router()

const bearerTokenHandler = require('../middleware/bearerTokenHandler')

const createLinkToken = require('../subscribers/plaidAuth/linkToken')
const { getAccessToken } = require('../subscribers/plaidAuth/accessToken')
const deleteAccessToken = require('../services/deleteAccesstoken')
const getAccounts = require('../services/getAccounts')
const getInstitution = require('../services/getInstitution')
const getAuth = require('../services/getAuth')
const getTransactions = require('../services/getTransactions')
const getBalance = require('../services/getBalance')

router.get('/', async (req, res) => {
    try {
        const plainLinkData = await createLinkToken()

        res.send(plainLinkData)
    } catch (error) {
        next(error)
    }
})

router.post('/access-token', async (req, res, next) => {
    try {
        const accessToken = await getAccessToken(req.body.publicToken)

        res.send(accessToken)
    } catch (error) {
        next(error)
    }
})

router.delete('/access-token', bearerTokenHandler, async (req, res, next) => {
    try {
        const response = await deleteAccessToken(res.locals.accessToken)

        res.send(response)
    } catch (error) {
        next(error)
    }
})

router.get('/auth', bearerTokenHandler, async (req, res, next) => {
    try {
        const auth = await getAuth(res.lodals.accessToken)

        res.send(auth)
    } catch (error) {
        next(error)
    }
})

router.get('/accounts', bearerTokenHandler, async (req, res, next) => {
    try {
        const accounts = await getAccounts(res.locals.accessToken)

        res.send(accounts)
    } catch (error) {
        next(error)
    }
})

router.get('/institution', bearerTokenHandler, async (req, res, next) => {
    try {
        const institution = await getInstitution(res.locals.accessToken)

        res.send(institution)
    } catch (error) {
        next(error)
    }
})

router.get('/balance/:accountId', bearerTokenHandler, async (req, res, next) => {
    try {
        const accountTransactions = await getBalance(res.locals.accessToken, req.params.accountId)

        res.send(accountTransactions)
    } catch (error) {
        next(error)
    }
})

module.exports = router