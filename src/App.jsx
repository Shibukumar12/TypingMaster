import { useState } from 'react'
import Navbar from './Components/Navbar'
import TypingTemplete from './Components/TypingTemplete'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <hr className=' bg-white' />
     <Outlet/>
    </>
  )
}

export default App
