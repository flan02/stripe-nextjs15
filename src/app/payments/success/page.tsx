"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import React from 'react'

type Props = {}

const SuccessPage = (props: Props) => {
  const [timer, setTimer] = React.useState(5)
  const router = useRouter()
  const searchParams = useSearchParams() as ReturnType<typeof useSearchParams>

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const customerId = searchParams.get("customerId")
    const userStr = localStorage.getItem("user")
    console.log("customerId", customerId);
    if (userStr && customerId) {
      const user = JSON.parse(userStr)
      user.isSubscribed = true
      user.customerId = customerId
      localStorage.setItem("user", JSON.stringify(user))
      console.log("User updated in localStorage", user);
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    const timeout = setTimeout(() => {
      router.push("/subscriptions")
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [router, searchParams])




  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl text-green-700'>
        Payment Successful. Thank you for your purchase!
      </h1>
      <br />
      <p className="text-sm">You will be redirected in {timer} seconds to your sandbox dashboard</p>

    </main>

  )
}

export default SuccessPage