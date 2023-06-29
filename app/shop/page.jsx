"use client"

import React, {useState, useEffect} from 'react'
import Card from '@components/Card'

const shop = () => {

  const [data, setData] = useState([])
  const [products, setProducts] = useState([])
  const [isActive, setIsActive] = useState(null)

  const fetchProduct = async () => {
    return fetch('/api/product')
          .then(res => res.json())
          .then(data => {
            setData(data)
            setProducts(data)
          })
  }

  useEffect(() => {
    fetchProduct()
    setIsActive('All')
  }, [])

  const productCategory = [...new Set(data.map(product => product.category))]

  const filtereProduct = (filterVal) => {
    const filteredProduct = data.filter((product) => {
      return product.category === filterVal
    })
    setProducts(filteredProduct)
  }

  return (
    <>
        <div className="head">
            <h1 className='head-text'>Best Seller Products</h1>
            <div className="btns">
                <button 
                  className={`btn-filter${isActive === 'All' ? ' active' : ''}`}
                  type='button'
                  onClick={() => {
                    fetchProduct()
                    setIsActive('All')
                  }}
                >All</button>

                {products && productCategory.map((category) => (
                  <button 
                    key={category} 
                    className={`btn-filter ${isActive === category ? 'active' : ''}`}
                    type='button'
                    onClick={(e) => {
                      filtereProduct(category)
                      setIsActive(category)
                    }}
                  >{category}</button>
                ))}
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