import { useState } from 'react'
import Navbar from './Components/Navbar'
import TypingTemplete from './Components/TypingTemplete'
import { Outlet } from 'react-router-dom'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <hr className=' bg-white' />
     <Outlet/>
      <hr className=' bg-white' />
     <Contact/>
    </>
  )
}

export default App
