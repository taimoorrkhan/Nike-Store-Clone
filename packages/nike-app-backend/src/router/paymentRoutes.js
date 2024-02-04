const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51Og7P5BAkn8ouOIqQbPtq5EYkuTIbEV92zNimb3wTj7En2IPjmgYcjjpv9FuVPMCtVoVoe7Oe5otqyDgRZrpy1Tq00lJyGHzIm');

router.post('/intent', async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({
      paymentIntent: paymentIntent.client_secret
    })
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ status: 'FAILED', error: error.message });
    
  }
});



module.exports = router;