"use client"

import React from 'react'
import Bill from '@components/Bill'
import PaymentForm from '@components/PaymentForm'
import { useSession } from 'next-auth/react'

const Payment = () => {
  const {data: session } = useSession()
  return (
    <div className='payment'>
      {session?.user.id && 
        <>
          <Bill />
          <PaymentForm />
        </>
      }
    </div>
  )
}

export default Payment