'use client'
import { convertToSubcurrency } from '@/lib/utils'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'



type Props = {
  amount: number
}

const CheckoutPage = ({ amount }: Props) => {
  const stripe = useStripe()
  const elements = useElements()
  const [errMessage, setErrorMessage] = useState<string | null>(null)
  const [clientSecret, setClientSecret] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: convertToSubcurrency(amount), // convert to cents
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [amount])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    //console.log("clientSecret", clientSecret);
    if (!stripe || !elements) {
      setIsLoading(false)
      return
    }

    // Step 1: submit the payment element
    const { error: submitError } = await elements.submit()

    if (submitError) {
      setErrorMessage(submitError.message || "An error occurred")
      setIsLoading(false)
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`
      }
    })

    if (error) {
      // This point is only reached if there's an immediate error when confirming the payment.
      // Show the error to your customer (e.g., insufficient funds, payment method not supported, payment details incomplete, etc).
      setErrorMessage(error.message || "An error occurred")
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url
    }
    setIsLoading(false)
  }

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className='flex items-center justify-center'>
        <div role='status' className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-t-transparent text-blue-600 motion-reduce:animate-[spin_1.5s_linear_infinite] dar:text-white'>
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
      {
        clientSecret
          ? <PaymentElement />
          : null
      }
      {
        errMessage
          ? <div>{errMessage}</div>
          : null
      }
      <Button disabled={!stripe || isLoading}>
        {!isLoading ? `Pay ${amount}` : "Processing..."}
      </Button>
    </form>
  )
}

export default CheckoutPage