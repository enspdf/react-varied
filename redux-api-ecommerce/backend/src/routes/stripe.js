const stripe = require('stripe')(process.env.STRIPE_KEY);
const router = require('express').Router();

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeError, stripeResponse) => {
        if (stripeError) {
            res.status(500).send(stripeError);
        } else {
            res.status(200).send(stripeResponse);
        }
    })
})

module.exports = router