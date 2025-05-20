'use client'

import { clickSubscribe, editPaymentDetails } from "@/services/api/handle"
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
  return (
    <Button onClick={editPaymentDetails}>Edit Payments</Button>
  )
}

