'use client'
import { cancelSubscription, deletedSubscription, subscribe } from "@/app/actions/stripe.actions"
import { getUser } from "@/lib/localstorage";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";



export const editPaymentDetails = async (router: AppRouterInstance) => {
  const user = getUser()
  const url = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL!
  if (url) {
    router.push(url + "?prefilled_email=" + user?.email)
  } else {
    throw new Error('Failed to edit payment details')
  }
}





export const clickSubscribe = async (router: AppRouterInstance) => {
  const user = getUser()
  if (!user?.isLogged) {
    throw new Error('User is not signed in')
  }

  const url = await subscribe({
    userId: user.userId || '',
    email: user.email || '',
    priceId: process.env.NEXT_PUBLIC_STRIPE_MEMBERSHIP_PRICE_ID!
  })


  if (url) {
    router.push(url)
  } else {
    throw new Error('Error creating subscription')
  }


}


export const desubscription = async (router: AppRouterInstance) => {
  const user = getUser()
  if (!user?.isLogged || !user.subscriptionStripeId) {
    throw new Error('Subscription not found...')
  }

  try {
    const result = await cancelSubscription(user.subscriptionStripeId)
    router.push(`${process.env.NEXT_PUBLIC_URL}/payments/cancel?sessionId=${user.sessionStripeId}`)

  } catch (error) {
    console.log(error);
    throw new Error('Failed to cancel subscription')
  }

}



export const removeSubscription = async (router: AppRouterInstance) => {
  const user = getUser()
  if (!user?.isLogged || !user.subscriptionStripeId) {
    throw new Error('Subscription not found...')
  }

  try {
    const result = await deletedSubscription(user.subscriptionStripeId)
    router.push(`${process.env.NEXT_PUBLIC_URL}/payments/cancel?sessionId=${user.sessionStripeId}`)

  } catch (error) {
    console.log(error);
    throw new Error('Failed to cancel subscription')
  }
}
