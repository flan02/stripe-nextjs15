"use client"

import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const CancelPage = (props: Props) => {
  const [timer, setTimer] = React.useState(10)
  const router = useRouter()
  const searchParams = useSearchParams() as ReturnType<typeof useSearchParams>
  const sessionId = searchParams.get('sessionId');
  const [data, setData] = useState(null);

  useEffect(() => {
    //console.log("sessionId useEffect:", sessionId);
    if (!sessionId) return
    fetch(`/api/checkout-session?sessionId=${sessionId}`)
      .then(res => res.json())
      .then(session => {
        if (session?.subscription) {
          fetch(`/api/subscription-status?subscriptionId=${session.subscription}`)
            .then(res => res.json())
            .then(setData);
        }
      });
  }, [sessionId]);


  useEffect(() => {

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
              Your subscription will end at the end of the current billing period
            </h1>
            <br />
            <p className='font-black text-lg'>&quot;cancel_at_period_end&quot;: true</p>
            <p className=''>This means that your current membership won&#39;t be updated anymore.</p>
            <p className='font-black text-lg'>&quot;status&quot;: active | canceled </p>
            <p className=''>This shows you if the current membership is still active or it was cancelled.</p>
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

export default CancelPage