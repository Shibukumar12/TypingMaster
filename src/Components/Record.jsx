import React from 'react'
import { useSelector } from 'react-redux'

function Record() {
  const selector=useSelector(state=>state.Typingmaster)
  console.log(selector);
  
  return (
    <>
    <div className=' flex justify-center items-center h-screen text-white bg-black'>
       <div className=' w-[60%] h-[80%] bg-[#413939fe] overflow-y-scroll '>   
            <h1 className=' text-4xl ml-12 mt-4 font-bold'>Records</h1> 
            <ul className='grid grid-cols-5 gap-10 mx-12  mt-10 font-bold text-lg sticky top-3'>
                <li>Date</li>
                <li>Time</li>
                <li>Wpm</li>
                <li>Error</li>
                <li>Accuracy</li>
            </ul>      
            <hr className=' border-white mx-7'/>

            
                {selector.recordArray  && selector.recordArray.lenght > 0 ?  
                  selector.recordArray?.map((item,index)=>{
                    return(
                          <>
                            <ul key={index} className='grid grid-cols-5 gap-10 mx-12  mt-2 mb-1'>
                              <li>{item.date}</li>
                              <li>{item.time}</li>
                              <li>{item.wpm}</li>
                              <li>{item.error}</li>
                              <li>{item.accuracy}%</li>
                            </ul>
                            <hr className='mx-7'/>
                          </>
                    )
                  })
                  :<h1 className='text-center mt-10'>No Records Found</h1>
                }
           
       </div>
    </div>
    </>
  )
}

export default Record