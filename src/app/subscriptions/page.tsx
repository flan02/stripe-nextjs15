import WrapperClient from '@/components/reutilizable/WrapperClient'
import Main from '@/components/subscriptions/Main'
import React from 'react'

type Props = {}

const SubscriptionsPage = (props: Props) => {
  return (
    <WrapperClient>
      <Main />
    </WrapperClient>
  )
}

export default SubscriptionsPage