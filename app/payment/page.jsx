import React from 'react'
import Bill from '@components/Bill'
import PaymentForm from '@components/PaymentForm'

const Payment = () => {
  return (
    <div className='payment'>
      <Bill />
      <PaymentForm />
    </div>
  )
}

export default Payment