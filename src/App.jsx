import { useState } from 'react'
import Navbar from './Components/Navbar'
import TypingTemplete from './Components/TypingTemplete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <hr className=' bg-white' />
     <TypingTemplete/>
    </>
  )
}

export default App
