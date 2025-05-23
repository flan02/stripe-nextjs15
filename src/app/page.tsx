import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <main className="w-[100ch] min-h-screen border mx-auto flex flex-col text-center items-center justify-center space-y-12">
      <h1 className="text-5xl font-bold underline">STRIPE SANDBOX</h1>
      {/* stripe logo */}
      <Image src="/stripe-banner.jpg" alt="stripe-logo" width={600} height={600} />
      <div className='h-full font-bold flex flex-col px-8 items-center justify-center text-lg text-left'>
        <p>Hello dev, enjoy this sandbox where you can master fintech payments by using stripe.
          This system is a simulation of a subscription system where you can create fake users and subscribe them to a plan.
        </p>
      </div>
      <div className="flex flex-col text-center space-y-2">

        <Button asChild>
          <Link className="text-sm" href="/basic" rel="noopener noreferrer">
            Basic
          </Link>
        </Button>
        <Button asChild>
          <Link className="text-sm" href="/subscriptions" rel="noopener noreferrer">Subscriptions</Link>
        </Button>
        <Button asChild>
          <Link className="text-sm" href="/webhook" rel="noopener noreferrer">Webhooks</Link>
        </Button>
      </div>
    </main>
  )
}