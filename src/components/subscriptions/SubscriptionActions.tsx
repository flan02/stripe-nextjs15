'use client'

import { clickSubscribe, editPaymentDetails, desubscription, removeSubscription } from "@/services/api/handle"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

type Props = {}



export const ButtonSubscribe = (props: Props) => {
  const router: AppRouterInstance = useRouter()
  return (
    <Button onClick={() => clickSubscribe(router)}>Subscribe</Button>
  )
}





export const ButtonEditPayments = (props: Props) => {
  const router: AppRouterInstance = useRouter()
  return (
    <Button onClick={() => editPaymentDetails(router)}>Edit Payments</Button>
  )
}


export const ButtonCancelSubscription = (props: Props) => {

  const router: AppRouterInstance = useRouter()
  return (<Button onClick={() => desubscription(router)}>desubscribe</Button>)
}

export const ButtonDeleteSubscription = (props: Props) => {
  const router: AppRouterInstance = useRouter()
  return (<Button onClick={() => removeSubscription(router)}>cancel subscription</Button>)
}