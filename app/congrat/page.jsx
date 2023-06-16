import React from 'react'

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Congrate = () => {
  return (
    <div className='flex justify-center item-center w-full'>
        <div className='w-9/12 h-96 text-center bg-neutral-200 rounded-2xl flex flex-col justify-center item-center my-12'>
            <FontAwesomeIcon style={{color: "#1D944E"}} size='2xl' icon={faBagShopping} />
            <h1 className='text-3xl font-bold text-blue-950 my-10'>Thank You For Your Purchase</h1>
            <p className='text-sm'>if you have any question, please email <span className='text-red-800'>shop@shop.com</span></p>
            <Link href="/shop" className='w-80 rounded-2xl py-3 mr-auto ml-auto mt-10 bg-red-700 text-white'>CONTINUE SHOPPING</Link>
            
        </div>
    </div>
  )
}

export default Congrate