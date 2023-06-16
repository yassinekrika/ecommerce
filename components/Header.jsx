"use client"

import React, {useState} from 'react'
import Nav from '@components/Nav'
import SideBar from '@components/SideBar';

const Header = () => {

  const [toggleSideBar, setTggleSideBar] = useState(false)

  return (
    <>
        <Nav setTggleSideBar={setTggleSideBar} />
        <SideBar toggleSideBar={toggleSideBar} setTggleSideBar={setTggleSideBar}/>
    </>
  )
}

export default Header