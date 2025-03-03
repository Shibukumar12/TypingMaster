import { useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import TypingTemplete from './Components/TypingTemplete'
import { Outlet } from 'react-router-dom'
import Contact from './Components/Contact'

function App() {
  const contactBtn=useRef()
  const handleclick=()=>{
    contactBtn.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <>
     <Navbar HandleClick={handleclick}/>
     <hr className=' bg-white' />
     <Outlet/>
      <hr className=' bg-white' />
     <Contact Reff={contactBtn}/>
    </>
  )
}

export default App
