'use client'
import CheckoutPage from "@/components/stripe/CheckoutPage"
import { convertToSubcurrency } from "@/lib/utils"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Image from "next/image"

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined")
}

type Props = {}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const Main = (props: Props) => {
  const amount: number = 9.99
  return (

    <div className="max-w-6xl space-y-6 min-h-screen mx-auto text-white text-center border rounded-md bg-gradient-to-tr from-gray-950 to-blue-400">
      <br /><br />
      <div className="space-y-6 mx-auto">
        <h1 className="text-4xl font-extrabold mb-2">Fake Product don&#39;t buy it</h1>
        <h2 className="text-xl">has requested</h2>
        <Image className="mx-auto" src="/pirate-parrot.jpg" alt="pirate-parrot" width={300} height={300} />
        <span className="font-bold text-3xl">${amount}</span>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount), // cents
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>

  )
}

export default Main