import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import speaker from '../assets/speaker.png'

function TypingTemplete() {
  const [isAciveClass,setsiActiveClass]=useState('Basic')
  const handleClass=(btnClass)=>{
    setsiActiveClass(btnClass)
  }
  return (
    <>
       <div className=' h-screen bg-black grid grid-rows-12'>

            <div className=' flex justify-center items-center gap-7  row-span-2 '>
                <Button onClick={()=>handleClass('Basic')} children='Basic' className= {`py-2 px-6 rounded-2xl ${isAciveClass ==='Basic' ? 'bg-[#9b50ba]' : <></>} text-white`}/>
                <Button onClick={()=>handleClass('Classic')} children='Classic' className={`py-2 px-5 rounded-2xl ${isAciveClass === 'Classic' ? 'bg-[#9b50ba]' : <></>} text-white`}/>
                <Button onClick={()=>handleClass('Advanced')} children='Advanced' className={`py-2 px-4 rounded-2xl ${isAciveClass === 'Advanced' ? 'bg-[#9b50ba]' : <></>} text-white`}/>
            </div>

            <div className='flex justify-evenly items-center  row-span-4  text-white '>
                <div className=' border-8 rounded-full border-green-400'>
                  <h2 className='p-10 text-3xl'>60</h2>
                </div>

                <div className=' border py-6 px-10 rounded-2xl'>
                  <h3 className=' font-bold text-xl'>Accuracy</h3>
                  <p className=' text-center text-2xl'>0 %</p>
                </div>

                <div className=' border py-6 px-10 rounded-2xl'>
                  <h3 className=' font-bold text-xl'>words-mins</h3>
                  <p className=' text-center text-2xl'>0 WPM</p>
                </div>

                <div className=' border py-6 px-14 rounded-2xl'>
                  <h3 className=' font-bold text-xl'>Errors</h3>
                  <p className=' text-center text-2xl'>00</p>
                </div>
            </div>

            <div className=' flex items-center justify-around row-span-1 text-white'>
                <div className=' flex items-center gap-5'>
                    <h4>Complexity</h4>
                    <Button children='Easy' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                    <Button children='Medium' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                    <Button children='Hard' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                </div>
                <div className=' flex items-center gap-5'>
                    <h4>Mode</h4>
                    <Button children='1 Minute' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                    <Button children='3 Minute' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                    <Button children='5 Minute' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                </div>
                <div>
                    <img src={speaker} alt="" />
                </div>
            </div>

            <div className=' flex justify-center items-center row-span-2 '>
                <Input readOnly ClassName=' w-[55%]' value='sfdgfgdds'/> 
            </div>

            <div className=' flex justify-center items-center row-span-3 '>
                 <Input  ClassName=' w-[42%] placeholder-green-600 placeholder:text-2xl placeholder:font-bold' placeholder='Start Typing Here ....' /> 
            </div>

       </div>
    </>
  )
}

export default TypingTemplete