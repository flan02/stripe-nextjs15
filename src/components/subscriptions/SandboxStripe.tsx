'use client'
import React, { useEffect, useState } from 'react'
import { createFakeUser, getUser, logout, login, removeSubscription, removeUser, endMembership, reactivateMembership, User } from "@/lib/localstorage"
import { Button } from '../ui/button'
import { ButtonEditPayments, ButtonSubscribe } from './SubscriptionActions'

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
      setData(result)
    }
    fetchData()
  }, [user])

  return (
    <section className='space-y-12 overflow-y-scroll'>
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
            <pre className='text-left text-xs border p-4 rounded-md'>
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
              <h2 className='text-lg text-green-800 font-bold'>You are subscribed to the plan</h2>
              {/* <p>add date from Stripe until membership might be outdated</p> */}
              <div className='space-x-4 space-y-2'>
                <p>Simulated actions</p>
                <Button onClick={() => setUser(removeSubscription())} disabled={!user.isSubscribed ? true : false}>Desubscribe</Button>
                {
                  user?.isSubscribed
                    ? <Button onClick={() => setUser(endMembership())} className='bg-gray-400/90 hover:bg-gray-400'>End Membership</Button>
                    : <Button onClick={() => setUser(reactivateMembership())} className='bg-gray-400/90 hover:bg-gray-400'>Reactivate</Button>
                }
                <Button onClick={() => setUser(logout())} className='bg-red-400/90 hover:bg-red-400'>Logout</Button>
              </div>
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
          {!user?.isSubscribed && user?.customerId && user?.isLogged
            ?
            <div className='space-y-2 mt-4 text-sm w-full text-center'>
              <h2>You have to update your subscription details</h2>
              <ButtonEditPayments />
            </div>
            : null
          }
        </div>
      }
      {
        data && user?.isLogged && !data?.error
          ? <div><pre className='h-[350px] bg-slate-800 text-white px-4 py-6 overflow-y-scroll text-xs text-left'>{JSON.stringify(data, null, 2)}</pre></div>
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

