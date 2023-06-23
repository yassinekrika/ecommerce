"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { useSession } from 'next-auth/react';


const ProductDetail = ({ params }) => {
  const { data: session } = useSession()
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    return await fetch(`/api/product/${params.id}`)
          .then(res => res.json())
          .then(data => setProduct(data))
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const handleAddCart = async () => {
    await fetch(`http://localhost:3000/api/cartProduct`,  {
      method: 'POST', 
      body: JSON.stringify({
        userId : session?.user.id, 
        productId: params.id, 
        quantity: quantity
      }),
    })
      .catch(err => console.log(err))
    
      window.location.reload()
  }
  const handleQuantity = (e) => {
      const value = e.target.value
      setQuantity(value)
  }
  
  return (
    <div className="product-detail">
        <div className="bg-img-detail bg-gray-300">
            <Image
                alt='product-detail-img'
                src={'data:image/webp;base64,'+product.img}
                width={387}
                height={387}
            />
        </div>
        <div className="detail-img">
            <h1>{product.name}</h1>
            <h3>Details:</h3>
            <p>{product.description}</p>
            <h2>DA {product.price}</h2>
            <div className='quantity-btn'>
              <form >
                <input type="number" className='border-2 border-teal-800 pl-2 w-12 rounded' name="quantity" value={quantity} max="99" onChange={handleQuantity}/>
              </form>
            </div>
            <div className='mt-12'>
              <button 
                className='w-50 border-2 border-red-500 solid my-5 py-3 px-10 bg-red'
                onClick={handleAddCart} // thi is next
              >Add to cart</button>
              <button className='w-50 text-white mx-5 my-5 py-3 px-10 bg-red-500'>Buy now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail