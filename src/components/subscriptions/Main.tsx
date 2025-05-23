import SandboxStripe from "./SandboxStripe"





type Props = {}

const Main = (props: Props) => {



  return (
    <main className="w-[100ch] min-h-screen p-4 border mx-auto flex flex-col text-center items-center justify-start space-y-12">
      <div className="flex items-end justify-between self-end w-[66%]">
        <h1 className="text-3xl font-bold"> SANDBOX STRIPE</h1>
        <a className="text-xs mb-0.5 text-rose-300" href="https://www.danchanivet.tech" rel="noopener" target="_blank">https://www.danchanivet.tech</a>
      </div>

      <SandboxStripe /> {/* Client side interface */}
    </main>
  )
}


export default Main