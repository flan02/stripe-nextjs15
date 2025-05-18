'use client'


type WrapperClientProps = {
  children: React.ReactNode
}

const WrapperClient = ({ children }: WrapperClientProps) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default WrapperClient