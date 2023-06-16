"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({cartId, productImg, productName, productPrice, productQuantity}) => {

  const [quantity, setQuantity] = useState(productQuantity)

  const increaseQty = async () => {
    setQuantity(quantity + 1)
    await fetch(`api/cartProduct/${cartId}`, {
      method: 'PATCH', 
      body: JSON.stringify({
        quantity: quantity + 1
      })
    })
  }

  const decreaseQty = async () => {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1)
    await fetch(`api/cartProduct/${cartId}`, {
      method: 'PATCH', 
      body: JSON.stringify({
        quantity: quantity - 1
      })
    })
  }

  const deleteProduct = async (e) => {
    await fetch(`api/cartProduct/${cartId}`, {
      method: 'DELETE'
    }).catch(err => console.log(err))
    const element = e.target.parentElement.parentElement
    element.remove()
  }
  
  return (
    <article className="cart-item" data-id="rec43w3ipXvP28vog">
        <Image alt='profile'
            src={'data:image/webp;base64,'+productImg}
            width={80}
            height={80}
            className='avatar-img'
        />  
            <div>
              <h4 className="cart-item-name">{productName}</h4>
              <p className="cart-item-price">DA {productPrice}</p>
              <button className="cart-item-remove-btn" data-id="" onClick={deleteProduct}>remove</button>
            </div>
          
            <div>
              <button className="cart-item-increase-btn" data-id="" onClick={increaseQty}>
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <p className="cart-item-amount" data-id="">{quantity}</p>
              <button className="cart-item-decrease-btn" data-id="" onClick={decreaseQty}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
  </article>
  )
}

export default CartItem