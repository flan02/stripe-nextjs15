import WrapperClient from "@/components/reutilizable/WrapperClient"
import Image from "next/image"
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
      <div className="max-w-6xl mx-auto min-h-screen text-white text-center border rounded-md bg-gradient-to-tr from-blue-400 to-gray-900">
        <div className="mb-10 space-y-4">
          <br /><br />
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully bought this product.</h2>
          <Image className="mx-auto" src="/pirate-parrot.jpg" alt="pirate-parrot" width={300} height={300} />
          <div className="bg-white w-[80%] mx-auto text-black p-2 rounded-md mt-5 text-4xl font-bold">${amount}</div>
        </div>
        <div className="mt-4">
          <Link href="/" className="bg-white text-black px-4 py-2 rounded-md font-bold">
            Go back
          </Link>
        </div>
      </div>
    </WrapperClient>
  )
}

export default PaymentSuccess