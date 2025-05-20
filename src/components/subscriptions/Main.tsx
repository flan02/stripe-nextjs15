import { ButtonEditPayments, ButtonSubscribe } from "./SubscriptionActions"




type Props = {}

const Main = (props: Props) => {
  const isLogged = true
  const user = {
    name: 'Dan Chanivet',
    email: 'chanivetdan1988@hotmail.com',
    isSubscribed: false,
    customerId: ''
  }



  return (
    <main className="w-[100ch] min-h-screen p-4 border mx-auto flex flex-col text-center items-center justify-start space-y-12">
      <div className="flex items-end justify-between self-end w-[66%]">
        <h1 className="text-3xl font-bold"> STRIPE SUBSCRIPTIONS</h1>
        <p className="text-xs mb-0.5">{user.email}</p>
      </div>
      <div className='h-full flex flex-col items-center justify-center text-xl'>
        {
          isLogged && user
            ? (<p>Hello, {user.name} welcome to our store</p>)
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
      {
        user.isSubscribed || user.customerId
          ? <div className="space-y-2">
            <div>
              {user && user.isSubscribed
                ? <h2>You are subscribed to the plan</h2>
                : null
              }
              {!user.isSubscribed && user.customerId
                ?
                <>
                  <h2>You have to update your subscription details</h2>
                </>
                : null
              }
            </div>
            <ButtonEditPayments />
          </div>
          : <div className="space-y-2">
            <h2>You are not subscribed to the plan</h2>
            <ButtonSubscribe />

          </div>
      }
    </main>
  )
}


export default Main