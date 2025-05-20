// We can use inside a client environment

import { Button } from "../ui/button"

type ButtonFcProps = {
  title: string
  handleFunction: () => void
}

const ButtonFunctions = ({ title, handleFunction }: ButtonFcProps) => {
  return (
    <Button onClick={handleFunction}>
      {title}
    </Button>
  )
}

export default ButtonFunctions