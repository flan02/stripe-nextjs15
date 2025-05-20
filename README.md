# Stripe Next

Mastering payments using Stripe in our nextjs project

## Getting Started

```bash
$npm install --save stripe @stripe/react-stripe-js @stripe/stripe-js
```

## Documentation

[Stripe Docs](https://docs.stripe.com/)

## Fake https

To test stripe locally, you need to use a fake https server.

## Ngrox

- [website]( https://dashboard.ngrok.com/signup)
- [get your token](https://dashboard.ngrok.com/get-started/your-authtoken)

Run in your terminal

``` bash
ngrok http 3000
```

### Testing fake data

credit card number: `4242 4242 4242 4242`
expiry date: `09/28`
cvc: `123`

- Select from diffent payment methods

[choose payments](https://dashboard.stripe.com/test/settings/payment_methods/pmc_1RPoAhPOIhH20hF8eNgkKh7b)

[handle user rights](https://dashboard.stripe.com/test/settings/billing/portal)
