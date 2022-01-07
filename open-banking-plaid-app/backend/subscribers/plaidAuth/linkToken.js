const plaidClient = require('../../libs/PlaidClient')

const createLinkToken = async () => {
    const tokenResponse = await plaidClient.createLinkToken({
        user: {
            client_user_id: '1',
        },
        client_name: 'Plaid Test App',
        products: ['auth'],
        country_codes: ['US'],
        language: 'en',
        webhook: 'https://example.com/webhook',
    })

    return tokenResponse
}

module.exports = createLinkToken