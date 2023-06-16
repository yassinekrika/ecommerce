import React from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const LogIn = ({ setToggleDropDown }) => {

  const handleSignOut = async(e) => {
    await signOut().then(() => {
      setToggleDropDown(false)
    })
  }

  const { data: session } = useSession()

  return (
    <div className='dropdown'>
        <h2 className='title'>Profile</h2>
        <Image
          alt='profile'
          src="/assets/images/img1.webp"
          width={100}
          height={100}
          className='profile-img'
        />
        <h3 className='username'>@{session?.user.name}</h3>
        <p>{session?.user.email}</p>
        <button 
          type='button'
          className='auth-btn-logout'
          onClick={handleSignOut}
        >Log out</button>
    </div>
  )
}

export default LogIn