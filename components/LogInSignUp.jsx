"use client"

import { signIn } from 'next-auth/react'
import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const LogInSignUp = () => {
  
  const [toggleLoginDropDown, setToggleLoginDropDown] = useState(true)
  const [toggleSignUpDropDown, setToggleSignUpDropDown] = useState(false)
  const [toggleSignedUpDropDown, setToggleSignedUpDropDown] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: value
      }
    })
  };
  
  const handleSignUpChange = (e) => {
    const {name, value} = e.target
    setSignUpData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: value
      }
    })
  };

  const handleLoginSubmit = async (e) => {
    await signIn("credentials", {
      username: formData.username, 
      password: formData.password,
      redirect: false
    }) 
  }

  const handleSignUpSubmit = async (e) => {
    try {
      const res = await fetch(`/api/user/register`, {
        method: 'POST', 
        body: JSON.stringify(signUpData),
      })

      if (res.ok) {
        setToggleSignedUpDropDown(true)
        setToggleSignUpDropDown(false)
      }
    } catch(err) {
      console.log(err)
    }
  }
  
  return (
    <>
    { toggleLoginDropDown && 
      <div className='dropdown-login'>
          <h2 className='title'>Login</h2>
          <form className='login-form' onSubmit={handleLoginSubmit}>
            <input type="text" placeholder='username' className='input-form input-usename' name='username' onChange={handleChange} required />
            <input type="password" placeholder='password' className='input-form input-password' name='password' onChange={handleChange} required />
            <button 
              type='button'
              className='auth-btn-login'
              onClick={handleLoginSubmit}
            >LOG IN</button>
          </form>
          
          <p>If you don't have an account, <span 
            className='signup'
            onClick={() => {
              setToggleLoginDropDown(false)
              setToggleSignUpDropDown(true)
            }}
          >Sing Up</span></p>
      </div>
    }
 
    { toggleSignUpDropDown &&
      <div className='dropdown-login'>
        <h2 className='title'>Sign Up</h2>
        <form className='login-form'>
          <input type="text" placeholder='username' className='input-form input-usename' name='name' onChange={handleSignUpChange} required />
          <input type="email" placeholder='email' className='input-form input-email' name='email' onChange={handleSignUpChange} required />
          <input type="password" placeholder='password' className='input-form input-password' name='password' onChange={handleSignUpChange} required />
          <button 
            type='button'
            className='auth-btn-signup'
            onClick={handleSignUpSubmit}
          >SIGN UP</button>
        </form>
        
        <p>If you don't have an account, <span 
            className='signup'
            onClick={() => {
              setToggleLoginDropDown(true)
              setToggleSignUpDropDown(false)
            }}
          >Log In</span></p>
      </div>
    }
    
    { toggleSignedUpDropDown &&
      <div className='dropdown-login' style={{justifyContent: "space-around"}}>
        <h2 className='title'>Sign Up</h2>
        <FontAwesomeIcon icon={faCircleCheck} size='2xl' beat style={{color: "#33cf73"}} />
        <h4 className='title' style={{marginTop: "20px", fontSize: "20px"}}>Signed up</h4>
      </div>
    }
      

    </>
  )
}

export default LogInSignUp