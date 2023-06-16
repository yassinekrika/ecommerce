import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ productId, productName, productDesc, productPrice, productImg }) => {
  return (
    <div className='card'>   
      <Link href={'/shop/'+productId}>
        <div className='bg-img'>
          <Image 
            alt='product img'
            src={'data:image/webp;base64,'+productImg}
            width={214}
            height={214}
          />
        </div>
      </Link>
      <p className='product-name'>{productName}</p>
      <p className='product-price'>{productPrice} DA</p>
    </div>
  )
}

export default Card