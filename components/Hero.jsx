import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full h-[861px] bg-gray-300 m-5 mb-28 rounded-[25px] flex justify-center items-center relative'>
      <div className='w-full h-[861px] p-[100px] mt-[20%]'>
        <h4 className='text-5xl pb-8'>Beats Solo</h4>
        <h2 className='text-8xl font-bold'>Wireless</h2>
        <h1 className='text-[200px] font-bold text-white'>HEADPHONE</h1>
        <Link className='bg-red-500 border-2 border-red-500 hover:bg-gray-300 hover:text-red-500 py-3 px-7 rounded-3xl text-white text-sm font-medium' 
        href='/shop'>Shop By Category</Link>
        <Image
          className=' top-6 right-44 absolute'
          alt='Hero Image'
          src={'/assets/images/img1.webp'}
          width={814}
          height={814}
        />
      </div>  
    </div>
  )
}

export default Hero