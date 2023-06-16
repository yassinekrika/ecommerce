"use client"


import React, {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const PaymentForm = () => {
    const [cartProduct, setCartProduct] = useState([])
    const router = useRouter()

    const fetchProduct = async () => {
      return await fetch(`/api/cartProduct`)
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }
    
    useEffect(() => {
      fetchProduct()
    }, [])
    let totalPrice = cartProduct.reduce((total, item) => {
      return total + (item.Product.price * item.quantity);
    }, 0)


    const { data: session } = useSession()    

    const [formData, setFormData] = useState({
        email: "", 
        cardInformation: "",  
        cardName: "",
        shippingAddress: "",
        totalAmount: totalPrice,
        userId: parseInt(session.user.id),
    });
    console.log(formData)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevFormData => {
          return {
            ...prevFormData, 
            [name]: value
          }
        })
      };

    const submit = async (e) => {
        e.preventDefault()
        await fetch(`/api/order`, {
          method: 'POST', 
          body: JSON.stringify(formData)
        }).then(() => {
          router.push('/congrat')
        })
    }
  return (
    <div className='payment-form flex justify-center'>
        <form onSubmit={submit}>
            <div>
                <label>Email</label>
                <input type="text" placeholder='Email' name='email' onChange={handleChange}/>
                <label>Card information</label>
                <input type="text" placeholder='1234-1234-1234-1234' name='cardInformation' onChange={handleChange}/>
                <label>Name of card</label>
                <input type="text" placeholder='Visa, Master Card, Wise ...'  name='cardName' onChange={handleChange}/>
                <label>Shipping address</label>
                <input type="text" placeholder='Address'  name='shippingAddress' onChange={handleChange}/>
            </div>
            <button type='submit' className='pay-btn mb-10'>
                Pay
            </button>
        </form>
    </div>
  )
}

export default PaymentForm