import React from 'react'
import Button from './Button'
import typingLogo from '../assets/typingLogo.png'
function Navbar({HandleClick}) {
    const navbarItems=[
        {
            name:'About us',
            url:'/about-us'
        },
        {
            name:'Contact us',
            url:'/contact',
            onclick:HandleClick
        },
        {
            name:'Speed Reading',
            url:'/speed-reading'
        },
        {
            name:'Keyboard Tester',
            url:'/keyboard-tester',
            
        },
    ]
  return (
    <>
     <div className='grid grid-cols-12 bg-black h-20'>

        <div className=' col-span-10 flex gap-12'>

            <div className=' flex items-center ml-6'>
                <img className=' w-64' src={typingLogo} alt="" />
            </div>

            <ul className=' flex items-center gap-14 '>
                {
                    navbarItems.map((navitem,idx)=>{
                        return(
                        <li key={idx} onClick={navitem?.onclick} className=' font-serif text-white cursor-pointer duration-700 hover:bg-[#333333] hover:text-yellow-300 hover:underline  rounded-xl px-3 py-2'>{navitem.name}</li>
                       )
                    })
                }
            </ul>

        </div>

        <div className='col-span-2 flex items-center justify-end mr-10'>
            
            <Button className='bg-[#9b50ba] px-3 py-2 rounded-xl font-serif text-white' children='Free Certificate'/>
        </div>

     </div>
    </>
  )
}

export default Navbar