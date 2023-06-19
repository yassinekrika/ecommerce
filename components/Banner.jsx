import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Banner = () => {
  return (
    <div className='w-full h-[400px] bg-red-500 m-5 rounded-[25px] mb-28 flex justify-center items-center'>
      <div className='w-[90%] h-[80%] p-6 flex items-center justify-between relative'>
        <h2 className='font-bold text-8xl text-white'>FINE <br /> SMILE</h2>
        <Image
          className='absolute bottom-2 right-[40%]'
          alt='Banner Image'
          src={'/assets/images/headphones_b_4.webp'}
          width={580}
          height={580}
        />
        <div className='w-[350px] h-[80%] flex flex-col justify-around'>
          <p className='text-white text-sm'>Beats Solo Air</p>
          <h4 className='text-white font-bold text-4xl'>Summer Sale</h4>
          <p className='text-white text-sm'>Company that’s grwo from 20 to 400 employeees in the last 12 months</p>
          <div>
            <Link className='bg-white hover:bg-red-500 hover:text-white border-2 border-white py-2 px-7 rounded-3xl text-red-500 text-sm font-medium' 
            href='/shop'>Shop</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner