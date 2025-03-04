import { useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import TypingTemplete from './Components/TypingTemplete'
import { Outlet } from 'react-router-dom'
import Contact from './Components/Contact'

function App() {
  const contactBtn=useRef()
  const ArrowUpBtn=useRef()

  const ScrollUp=()=>{
    contactBtn.current.scrollIntoView({behavior:'smooth'})
  }

  const ScrollDown=()=>{
    ArrowUpBtn.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <>
     <Navbar scrollup={ScrollUp} Reff2={ArrowUpBtn}/>
     <Outlet/>
      <hr className=' bg-white' />
     <Contact Reff={contactBtn} scrolldown={ScrollDown}/>
    </>
  )
}

export default App
