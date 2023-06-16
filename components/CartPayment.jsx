import React from 'react'
import Image from 'next/image'

const CartPayment = ({cartId, productImg, productName, productPrice, productQuantity}) => {
  return (
    <article className="cart-item">
        <Image alt='profile'
            src={'data:image/webp;base64,'+productImg}
            width={80}
            height={80}
            className='avatar-img'
        />  
        <div className='w-full flex justify-between'>
            <div>
            <h4 className="cart-item-name">{productName}</h4>
            <p className="cart-item-price">Qty : {productQuantity}</p>
            </div>
            <h1 className='text-2xl'>DA {productPrice}</h1>
        </div>
  </article>
  )
}

export default CartPayment