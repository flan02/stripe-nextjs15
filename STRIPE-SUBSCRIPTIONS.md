# ✅ Important data returned by Stripe

## 1. `sessionId`

`cs_test_a1Kqc2AyBjfIv2iGKPUZac3aKrdp8U9Xo6uxnpVVmaMGxqxTJBVgIjEJNf`
This allows you to validate the checkout session status from your backend.

---

## 2. `customer`

`cus_SLwmgOFNcmfCOB`
Useful for associating future purchases, updating user data, or retrieving customer information in Stripe.

---

## 3. `subscription`

`sub_1RRKZkPOIhH20hF8DxXA4Z98`
🔑 This is the subscription ID. You can use it to verify subscription status, renewals, or cancellations. Don't forget to save this value in db because you will need to validate the suscription status later.

---

## 4. `metadata.userId`

`64fcb8e5a2c5d3b7f3e7a9c1`
This corresponds to your user in the database. You can use it to update their subscription status.

---

## 5. `payment_status`

`"paid"`
Indicates that the payment was successful.

---

## 6. `status`

`"complete"`
Means the checkout session was completed successfully.

---

## 7. `customer_details`

Contains personal details like:

* `name`: `"Dan Chanivet"`
* `email`: `"chanivetdan1988@hotmail.com"`
* `address`: includes city, country, postal code, and more.

You can store this information or display it as confirmation to the user.

---

``` json
{
  "id": "cs_test_a1sP5chDwXiakD5vFHjumGjHEVEaJQaGRUAoRNPdKsjGeUXMuiZyjXEI2H",
  "object": "checkout.session",
  "adaptive_pricing": null,
  "after_expiration": null,
  "allow_promotion_codes": null,
  "amount_subtotal": 999,
  "amount_total": 999,
  "automatic_tax": {
    "enabled": false,
    "liability": null,
    "provider": null,
    "status": null
  },
  "billing_address_collection": "required",
  "cancel_url": "http://localhost:3000/payments/cancel",
  "client_reference_id": null,
  "client_secret": null,
  "collected_information": {
    "shipping_details": null
  },
  "consent": null,
  "consent_collection": null,
  "created": 1747868732,
  "currency": "usd",
  "currency_conversion": null,
  "custom_fields": [],
  "custom_text": {
    "after_submit": null,
    "shipping_address": null,
    "submit": null,
    "terms_of_service_acceptance": null
  },
  "customer": "cus_SLwmgOFNcmfCOB",
  "customer_creation": null,
  "customer_details": {
    "address": {
      "city": "Villa Luzuriaga",
      "country": "AR",
      "line1": "ararat 633",
      "line2": null,
      "postal_code": "1754",
      "state": "Buenos Aires"
    },
    "email": "chanivetdan1988@hotmail.com",
    "name": "Dan Chanivet",
    "phone": null,
    "tax_exempt": "none",
    "tax_ids": []
  },
  "customer_email": null,
  "discounts": [],
  "expires_at": 1747955132,
  "invoice": "in_1RRLhhPOIhH20hF8DMG4HRpm",
  "invoice_creation": null,
  "livemode": false,
  "locale": null,
  "metadata": {
    "userId": "64fcb8e5a2c5d3b7f3e7a9c1"
  },
  "mode": "subscription",
  "payment_intent": null,
  "payment_link": null,
  "payment_method_collection": "always",
  "payment_method_configuration_details": null,
  "payment_method_options": {
    "card": {
      "request_three_d_secure": "automatic"
    }
  },
  "payment_method_types": [
    "card",
    "amazon_pay",
    "link",
    "paypal"
  ],
  "payment_status": "paid",
  "permissions": null,
  "phone_number_collection": {
    "enabled": false
  },
  "recovered_from": null,
  "saved_payment_method_options": {
    "allow_redisplay_filters": [
      "always"
    ],
    "payment_method_remove": "disabled",
    "payment_method_save": null
  },
  "setup_intent": null,
  "shipping_address_collection": null,
  "shipping_cost": null,
  "shipping_options": [],
  "status": "complete",
  "submit_type": null,
  "subscription": "sub_1RRLhhPOIhH20hF8jjGYkOsY",
  "success_url": "http://localhost:3000/payments/success?customerId=cus_SLwmgOFNcmfCOB&sessionId={CHECKOUT_SESSION_ID}",
  "total_details": {
    "amount_discount": 0,
    "amount_shipping": 0,
    "amount_tax": 0
  },
  "ui_mode": "hosted",
  "url": null,
  "wallet_options": null
}
```
