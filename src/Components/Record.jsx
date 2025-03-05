import React from 'react'

function Record() {
  return (
    <>
    <div className=' flex justify-center items-center h-screen text-white bg-black'>
       <div className=' w-[60%] h-[80%] bg-[#413939fe] overflow-y-scroll '>   
            <h1 className=' text-3xl sticky top-0'>Records</h1> 
            <ul className='flex justify-evenly mt-10 gap-10 '>
                <li>Date</li>
                <li>Time</li>
                <li>Wpm</li>
                <li>Error</li>
                <li>Accuracy</li>
            </ul>      
            <hr className=' border-white mx-7'/>
                
       </div>
    </div>
    </>
  )
}

export default Record