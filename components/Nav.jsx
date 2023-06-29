"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Profile from './Profile'
import LogInSignUp from './LogInSignUp'
import { useSession } from 'next-auth/react'


const Nav = ({ setTggleSideBar }) => {
  const {data: session} = useSession()

  const isLogedIn = false
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [toggleLoginDropDown, setToggleLoginDropDown] = useState(false)

  const showCart = () => {
    if (session?.user) {
      setTggleSideBar(prev => !prev)
    } else {
      alert('you have to create a user account')
    }
  }

  return (
    <>
        <nav>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/shop'>Shop</Link></li>
                <li><Link href='/about'>About us</Link></li>
            </ul>
            <ul>
                <li className='relative-li'>
                  {session?.user ? (
                    <div>
                      <Image 
                        alt='profile'
                        src="/assets/images/img1.webp"
                        width={30}
                        height={30}
                        className='avatar-img'
                        onClick={() => setToggleDropDown(prev => !prev)}
                      />
                      {toggleDropDown && <Profile setToggleDropDown={setToggleDropDown} />}
                    </div>
                  ) : (
                    <div>
                      <div
                        className='login'
                        onClick={() => {
                          setToggleLoginDropDown(prev => !prev)
                        }}
                      >
                        Login
                      </div>
                      {toggleLoginDropDown && <LogInSignUp />}
                    </div>
                  )
                }
                </li>
                <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                <li
                  className='bag'
                  onClick={showCart}
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav