import Main from "@/components/basic/Main";
import WrapperClient from "@/components/reutilizable/WrapperClient"




type Props = {};
const BasicPage = (props: Props) => {

  return (
    <WrapperClient> {/* Turns entire childrens into client-side component */}
      <Main />
    </WrapperClient>
  )
}

export default BasicPage