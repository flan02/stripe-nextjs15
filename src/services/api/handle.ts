'use client'
import { subscribe } from "@/app/actions/stripe.actions"
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";




const user = {
  name: 'Dan Chanivet',
  userId: '64fcb8e5a2c5d3b7f3e7a9c1',
  email: 'chanivetdan1988@hotmail.com',
  isLogged: true,
  isSubscribed: false,
  customerId: ''
}


export const editPaymentDetails = async () => {

}

export const clickSubscribe = async (router: AppRouterInstance) => {
  if (!user.isLogged) {
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


