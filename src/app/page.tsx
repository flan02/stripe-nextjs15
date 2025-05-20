

export default function HomePage() {
  return (
    <main className="w-[100ch] border mx-auto flex flex-col text-center items-center justify-center space-y-12">
      <h1 className="text-3xl font-bold">STRIPE</h1>
      <div className="flex flex-col text-center space-y-2">
        <a className="text-sm hover:underline" href="/basic" rel="noopener noreferrer">BASIC</a>
        <a className="text-sm hover:underline" href="/subscriptions" rel="noopener noreferrer">SUBSCRIPTIONS</a>
        <a className="text-sm hover:underline" href="/webhook" rel="noopener noreferrer">WEBHOOKS</a>
      </div>
    </main>
  )
}