import WrapperClient from "@/components/reutilizable/WrapperClient"
import Link from "next/link"


type Props = {
  searchParams: {
    amount: string
  }
}

const PaymentSuccess = async ({ searchParams }: Props) => {
  const { amount } = await searchParams;
  return (
    <WrapperClient>
      <div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully sent</h2>
          <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">${amount}</div>
        </div>
        <div className="mt-4">
          <Link href="/" className="bg-white text-purple-500 px-4 py-2 rounded-md font-bold">
            Go back to home
          </Link>
        </div>
      </div>
    </WrapperClient>
  )
}

export default PaymentSuccess