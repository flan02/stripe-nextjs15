import React from 'react'

type Props = {}

const Main = (props: Props) => {
  const isLogged = true
  const user = 'Dan Chanivet'
  return (
    <main className="w-[100ch] min-h-screen border mx-auto flex flex-col text-center items-center justify-start space-y-12">
      <h1 className="text-3xl font-bold"> STRIPE SUBSCRIPTIONS</h1>




      <div className='h-full flex flex-col items-center justify-center text-xl'>
        {
          isLogged && user
            ? (<p>Hello, {user} welcome to your store</p>)
            : null
        }
        {
          !isLogged
            ? (<p>Sorry, we could not find your account</p>)
            : null
        }
        {
          isLogged && !user
            ? (<p>Sorry, we could not find your account</p>)
            : null
        }

      </div>
    </main>
  )
}


export default Main