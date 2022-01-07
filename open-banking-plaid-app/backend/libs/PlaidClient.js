const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid')

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
            'PLAID_SECRET': process.env.PLAID_CLIENT_SECRET
        }
    }
})

const client = new PlaidApi(configuration)

module.exports = client

// const plaid = require('plaid')

// const plaidClient = new plaid.Client({
//     clientID: process.env.PLAID_CLIENT_ID,
//     secret: process.env.PLAID_CLIENT_SECRET,
//     env: plaid.environments.sandbox,
// })

// module.exports = plaidClient