"use client"

import React, {useEffect, useState} from 'react'
import CartPayment from './CartPayment'

const Bill = () => {
    const [cartProduct, setCartProduct] = useState([])

    const fetchProduct = async () => {
      return await fetch(`/api/cartProduct`)
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }
    
    useEffect(() => {
      fetchProduct()
    }, [])
  return (
    <div className='cart-item-payment'>
        <div className="cart-items">
            {cartProduct.map((product) => (
              <CartPayment
                key={product.id}
                cartId={product.id}
                productImg={product.Product.img}
                productName={product.Product.name}
                productPrice={product.Product.price}
                productQuantity={product.quantity}
              />
            ))}
        </div>
        
        <footer>
            <hr />
          <h3 className="cart-total text-slanted flex justify-between">
            <span>Total :</span>
            <span className='total-price'>
              DA {
                cartProduct.reduce((total, item) => {
                  return total + (item.Product.price * item.quantity);
                }, 0)
              }
            </span>
          </h3>
        </footer>
    </div>
  )
}

export default Bill