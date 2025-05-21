import SandboxStripe from "./SandboxStripe"





type Props = {}

const Main = (props: Props) => {



  return (
    <main className="w-[100ch] min-h-screen p-4 border mx-auto flex flex-col text-center items-center justify-start space-y-12">
      <div className="flex items-end justify-between self-end w-[66%]">
        <h1 className="text-3xl font-bold"> SANDBOX STRIPE</h1>
        <a className="text-xs mb-0.5 text-rose-300" href="https://www.danchanivet.tech" rel="noopener" target="_blank">https://www.danchanivet.tech</a>
      </div>
      <div className='h-full flex flex-col px-4 items-center justify-center text-lg text-left'>
        <p>Hello, enjoy this sandbox where you can master fintech payments by using stripe.
          This system is a simulation of a subscription system where you can create fake users and subscribe them to a plan.
        </p>
      </div>
      <SandboxStripe /> {/* Client side interface */}
    </main>
  )
}


export default Main