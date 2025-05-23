'use client'
import React, { useEffect, useState } from 'react'
import { createFakeUser, getUser, logout, login, removeSubscription, removeUser, endMembership, reactivateMembership, User } from "@/lib/localstorage"
import { Button } from '../ui/button'
import { ButtonCancelSubscription, ButtonDeleteSubscription, ButtonEditPayments, ButtonSubscribe } from './SubscriptionActions'
import Image from 'next/image'

// user = {
//   name: 'Dan Chanivet',
//   userId: '64fcb8e5a2c5d3b7f3e7a9c1',
//   email: 'chanivetdan@hotmail.com',
//   isLogged: true,
//   isSubscribed: false,
//   customerId: ''
// }



const SandboxStripe = () => {
  const [user, setUser] = useState<User | null>(null)
  type StripeSessionData = {
    [key: string]: any;
    error?: string;
  };




  const [data, setData] = useState<StripeSessionData | null>(null)
  const handleCreateUser = () => {
    createFakeUser()
    const newUser = getUser()
    setUser(newUser)
  }

  useEffect(() => {
    const localUser = getUser()
    if (localUser) setUser(localUser)
  }, [])


  // Listen for changes in localStorage
  // This is useful for when you have multiple tabs open
  useEffect(() => {
    const checkUser = () => {
      const localUser = getUser()
      setUser(localUser)
    }

    window.addEventListener("storage", checkUser)
    return () => window.removeEventListener("storage", checkUser)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.sessionStripeId) {
        setData(null)
        return
      }
      const response = await fetch(`/api/checkout-session?sessionId=${user.sessionStripeId}`)
      const result = await response.json()
      //console.log('result obtained:', result);
      //console.log('subscriptionID', result?.subscription);

      if (user && result?.subscription && user.subscriptionStripeId !== result.subscription) {
        const updatedUser = { ...user, subscriptionStripeId: result.subscription }
        localStorage.setItem('user', JSON.stringify(updatedUser))
        setUser(updatedUser)
      }

      setData(result)
    }
    fetchData()
  }, [user])

  return (
    <section className='space-y-12'>
      <div className='flex flex-col items-center space-y-2 p-6 rounded-md text-left bg-black text-white'>
        <h2>To start you need to create a fake user to simulate a session in our system</h2>
        <div className='space-x-2'>
          <Button disabled={user ? true : false} onClick={handleCreateUser} className='bg-white text-black hover:bg-gray-200'>create User</Button>
          {
            user
              ? <Button onClick={() => setUser(removeUser())} className='bg-red-400/90 hover:bg-red-400'>Remove User</Button>
              : null
          }
        </div>
      </div>
      {
        user
          ? <div className="space-y-4">
            <h1 className='text-2xl font-bold'>Welcome {user.name}</h1>
            {/* show json user fake data */}
            <pre className='text-left text-xs border p-4 rounded-md font-bold'>
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
          : null
      }
      {
        user && !user?.isLogged
          ? <Button onClick={() => setUser(login())} className='bg-gray-300 text-black hover:bg-gray-300/80'>Login</Button>
          : null
      }
      {
        <div className='text-left'>
          {(user && user.isSubscribed) && user?.isLogged || (user?.customerId && user?.isLogged && !user?.isSubscribed)
            ? <div className='text-center space-y-12'>
              <div className='flex space-x-4 place-content-center'>
                <Image src="/thumbnail-membership.png" alt='membership' width={100} height={100} />
                <h2 className='text-xl text-green-800 font-bold'>You are already subscribed to the plan</h2>
              </div>

              {
                !user.subscriptionStripeId
                  ? <div className='space-x-4 space-y-2'>
                    <p>Simulated actions by manipulating the <span className='font-bold'>localstorage</span> (it doesn&#39;t impact in Stripe)</p>
                    <Button onClick={() => setUser(removeSubscription())} disabled={!user.isSubscribed ? true : false}>Desubscribe</Button>
                    {
                      user?.isSubscribed
                        ? <Button onClick={() => setUser(endMembership())} className='bg-gray-400/90 hover:bg-gray-400'>End Membership</Button>
                        : <Button onClick={() => setUser(reactivateMembership())} className='bg-gray-400/90 hover:bg-gray-400'>Reactivate</Button>
                    }
                    <Button onClick={() => setUser(logout())} className='bg-red-400/90 hover:bg-red-400'>Logout</Button>
                  </div>
                  : null
              }
            </div>
            : <div>
              {
                user?.isLogged && !user?.customerId
                  ? <div className='space-y-6 text-center'>
                    <h2 className='text-base'>You need to buy a membership before you can join to our community</h2>
                    <div className='space-x-4'>
                      <ButtonSubscribe />
                      <Button onClick={() => setUser(logout())} className='bg-red-400/90 hover:bg-red-400'>Logout</Button>
                    </div>
                  </div>
                  : null
              }
            </div>
          }
          <br />
          {user?.isSubscribed && user?.customerId && user?.isLogged
            ?
            <div className='space-y-4'>
              <div className='space-x-4 flex items-end'>
                <h2 className='text-lg font-bold'>Stripe real options: </h2>
                <ButtonEditPayments />
                <ButtonCancelSubscription />
                <ButtonDeleteSubscription />
              </div>
              <p className='text-sm'>✨ Edit payments redirects users to the customer portal (simplified) and it only works if your account is activated and approved.</p>
              <p className='text-sm'>✨ Cancel membership still works and you may desuscribed from Stripe and you don&#39;t need to validate your Stripe account</p>
            </div>
            : null
          }
        </div>
      }
      {
        data && user?.isLogged && !data?.error
          ? <div className='space-y-4'>
            <p className='font-bold text-lg'>STRIPE SESSION OBJECT</p>
            <p className='text-left font-bold'>&quot;subscription&quot;: &quot;sub_1RRg37POIhH20hF8AXApDTz5&quot;</p>
            <p className='text-left'>This property from Session stripe object is the most important when we are working with user&#39;s subscriptions. This value allows us to search for [Subscription object]</p>
            <pre className='bg-slate-800 text-white px-4 py-6 overflow-y-scroll text-xs text-left'>{JSON.stringify(data, null, 2)}</pre>
          </div>
          : null
      }
      {
        !data && user?.isLogged
          ? <p>no session subscription founded.</p>
          : null
      }
    </section>
  )
}

export default SandboxStripe

