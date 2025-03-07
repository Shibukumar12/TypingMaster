import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { playAgain } from './Store/Slicing'


function ScoreCard() {
  const selector=useSelector(state=>state.Typingmaster)
  const [recordSaved,setRecordsaved]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const updateGlobalState=()=>{
    setRecordsaved((prev)=>!prev)
    dispatch(playAgain())
    navigate('/')
  }
  return (
    <>
       <div className=' bg-black h-screen flex justify-center items-center'>
            <div className='  w-[50%] h-[70%] border bg-[#464545] rounded-2xl '>
                 <h1 className=' text-yellow-200 font-bold text-3xl  absolute left-[33%] top-[36%]'>{selector.wpm < 29 ? 'You are moving slow like a baby car' : selector.wpm > 30  && selector.wpm < 40 ? 'You are moving fast like a MotorBike' : 'You are moving so fast like a super Car'}</h1>
                <div className='flex justify-evenly items-center h-full'>
                    <div className=' border py-6 px-10 rounded-2xl bg-[#7dda6f]'>
                      <h3 className=' font-bold text-xl'>Accuracy</h3>
                      <p className=' text-center text-2xl'>{selector.accuracy} %</p>
                    </div>

                    <div className=' border py-6 px-10 rounded-2xl bg-[#7dda6f]'>
                      <h3 className=' font-bold text-xl'>words-mins</h3>
                      <p className=' text-center text-2xl'>{selector.wpm} WPM</p>
                    </div>

                    <div className=' border py-6 px-14 rounded-2xl bg-[#7dda6f]'>
                      <h3 className=' font-bold text-xl'>Errors</h3>
                      <p className=' text-center text-2xl'>{selector.error}</p>
                    </div>
                </div>
                <button onClick={updateGlobalState} className=' duration-1000 text-[#4def34] absolute left-[43.5%] bottom-32 py-2 px-10 text-2xl rounded-3xl hover:border-[#4def34] border-4 font-bold'>Play Again</button>
            </div>
       </div>
    </>
  )
}

export default ScoreCard