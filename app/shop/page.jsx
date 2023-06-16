"use client"

import React, {useState, useEffect} from 'react'
import Card from '@components/Card'

const shop = () => {

  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    return fetch('/api/product')
          .then(res => res.json())
          .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
        <div className="head">
            <h1 className='head-text'>Best Seller Products</h1>
            <div className="btns">
                <button className='btn-filter active' type='button'>All</button>
                <button className='btn-filter' type='button'>Laptop</button>
                <button className='btn-filter' type='button'>Earphone</button>
                <button className='btn-filter' type='button'>Console</button>
                <button className='btn-filter' type='button'>Speaker</button>
            </div>
        </div>
        <div className="show-product">
            {products && products.length > 0 && products.map((product) => (
              <Card 
                key={product.id} 
                productId={product.id}
                productName={product.name} 
                productDesc={product.description} 
                productPrice={product.price}
                productImg={product.img}
              />
            ))}
        </div>
    </>
  )
}

export default shop