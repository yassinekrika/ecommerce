"use client"

import Banner from "@components/Banner"
import Card from "@components/Card"
import Hero from "@components/Hero"
import { useState, useEffect } from "react"

const Home = () => {

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
    <main className="flex flex-col w-full">

      {/* Hero */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Product */}
      <section className="w-full">
        <div className="show-product">
          {products && products.length > 0 && products.slice(0, 3).map((product) => (
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
      </section>
      
      {/* Banner */}
      <section className="w-full">
        <Banner />
      </section>
    </main>
  )
}

export default Home