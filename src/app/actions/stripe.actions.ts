"use server"

import { stripe } from "@/lib/stripe"

type Props = {
  userId: string,
  email: string,
  priceId: string
}

export const subscribe = async ({ userId, email, priceId }: Props) => {
  console.log({
    userId: userId || '',
    email: email || '',
    priceId: process.env.NEXT_PUBLIC_STRIPE_MEMBERSHIP_PRICE_ID! || ''
  });
  if (!userId || !email || !priceId) {
    throw new Error('Missing required parameters')
  }

  try {
    const isCustomer = await stripe.customers.list({
      email,
      limit: 1
    })

    let customerId = isCustomer.data.length > 0 ? isCustomer.data[0]?.id : null
    if (!customerId) {
      const customer = await stripe.customers.create({
        email
      })
      customerId = customer.id
    }

    const { url } = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card', "amazon_pay", 'link', 'paypal'],
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      metadata: {
        userId
      },
      mode: 'subscription',
      billing_address_collection: 'required',
      customer_update: {
        name: 'auto',
        address: 'auto'
      },
      success_url: `${process.env.NEXT_PUBLIC_URL}/payments/success?customerId=${customerId}&sessionId={CHECKOUT_SESSION_ID}`, // ! Stripe provides a sessionId in the URL
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/payments/cancel?session_id={CHECKOUT_SESSION_ID}`
    })

    return url
  } catch (error) {
    console.error(error)
  }
}


export const cancelSubscription = async (subscriptionId: string) => {
  if (!subscriptionId) throw new Error("Missing subscription ID")

  try {
    const deSubscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    })
    console.log("Subscription cancelled:", deSubscription);

    return { message: "Subscription cancelled successfully", status: 200 }
  } catch (error) {
    console.error("Failed to cancel subscription:", error)
    throw new Error("Failed to desubscribe...")
  }
}


export const deletedSubscription = async (subscriptionId: string) => {
  if (!subscriptionId) throw new Error("Missing subscription ID")
  try {

    const cancelSubscription = await stripe.subscriptions.cancel(subscriptionId);
    console.log("Subscription cancelled:", cancelSubscription);
    return { message: "Subscription cancelled successfully", status: 200 }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to cancel subscription...")
  }
}