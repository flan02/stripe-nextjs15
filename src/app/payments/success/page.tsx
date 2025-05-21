"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import React from 'react'
import { Loader2 } from "lucide-react"

type Props = {}

const SuccessPage = (props: Props) => {
  const [timer, setTimer] = React.useState(10)
  const router = useRouter()
  const searchParams = useSearchParams() as ReturnType<typeof useSearchParams>
  const sessionId = searchParams.get('sessionId');
  const [data, setData] = useState(null);

  useEffect(() => {
    //console.log("sessionId useEffect:", sessionId);

    const userStr = localStorage.getItem("user")
    const user = JSON.parse(userStr!)
    user.sessionStripeId = sessionId
    localStorage.setItem("user", JSON.stringify(user))

    if (sessionId) {
      fetch(`/api/checkout-session?sessionId=${sessionId}`)
        .then(res => res.json())
        .then(setData);
    }
  }, [sessionId]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    for (const [key, value] of searchParams.entries()) {
      console.log(`${key}: ${value}`);
    }
    const customerId = searchParams.get("customerId")
    const userStr = localStorage.getItem("user")
    //console.log("customerId", customerId);
    if (userStr && customerId) {
      const user = JSON.parse(userStr)
      user.isSubscribed = true
      user.customerId = customerId
      localStorage.setItem("user", JSON.stringify(user))
      //console.log("User updated in localStorage", user);
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    const timeout = setTimeout(() => {
      router.push("/subscriptions")
    }, 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [router, searchParams])




  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      {
        data
          ?
          <div>
            <h1 className='text-2xl text-center text-green-700'>
              Payment Successful. Thank you for your purchase!
            </h1>
            <br />
            <div className="overflow-y-scroll border border-black h-[500px]">
              <h2 className="text-center font-bold">SESSION OBJECT RETURNED VIA WEBHOOK</h2>
              <pre className="text-xs p-6 text-green-700 rounded-md bg-gray-200/60">{JSON.stringify(data, null, 2)}</pre>
            </div>
            <p className="text-sm mt-2 text-center">You will be redirected in {timer} seconds to your sandbox dashboard</p>
          </div>
          : <Loader2 className="animate-spin" size={24} />
      }

    </main>
  )
}

export default SuccessPage