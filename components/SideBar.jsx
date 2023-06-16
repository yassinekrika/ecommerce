"use client"

import CartItem from './CartItem';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SideBar = ({toggleSideBar, setTggleSideBar}) => {

  const [cartProduct, setCartProduct] = useState([])

  const fetchProduct = async () => {
    return await fetch(`/api/cartProduct`)
          .then(res => res.json())
          .then(data => setCartProduct(data))
  }
  
  useEffect(() => {
    fetchProduct()
  }, [toggleSideBar])

  return (
    <div className={'cart-overlay '+ (toggleSideBar ? 'show' : '')}>
      <aside className="cart">
        <button 
            className="cart-close"
            onClick={() => setTggleSideBar(prev => !prev)}
        >
            <FontAwesomeIcon icon={faXmark} />
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>
        <div className="cart-items">
            {cartProduct.map((product) => (
              <CartItem 
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
          <h3 className="cart-total text-slanted">
            Total : 
            <span className='total-price'>
              DA
              {' '+
                cartProduct.reduce((total, item) => {
                  // Multiply the price and quantity of each item and add it to the total
                  return total + (item.Product.price * item.quantity);
                }, 0)
              }
            </span>
          </h3>
          <button className="cart-checkout btn">
            <Link href='/payment'>Pay</Link>
          </button>
        </footer>
      </aside>
    </div>
  )
}

export default SideBar