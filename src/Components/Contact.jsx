import React from 'react'
import typingLogo from '../assets/typingLogo.png'
import '@fortawesome/fontawesome-free/css/all.css'

function Contact({Reff}) {
  return (
    <>
      <div className=' grid grid-cols-3 gap-5 bg-black text-white pt-14 ' ref={Reff}>
            <div className='col-span-1 flex flex-col items-center justify-center gap-3 '>
              <img className=' w-72' src={typingLogo} alt="" />
              <div className='flex gap-5'>
                  <i onClick={() => window.open("https://www.facebook.com")} className="fab fa-facebook-square text-2xl cursor-pointer "></i>
                  <i onClick={() => window.open("https://www.twitter.com")} className="fab fa-twitter text-2xl cursor-pointer"></i>
                  <i onClick={() => window.open("https://www.instagram.com")}  className="fab fa-instagram  text-2xl cursor-pointer"></i>
                  <i onClick={() => window.open("https://www.youtube.com")} className="fab fa-youtube  text-2xl cursor-pointer"></i>
              </div>
            </div>  

            <div className='col-span-1 flex flex-col items-center justify-center gap-2'>
                <div>
                    <h1 className=' font-bold text-xl mr-6'>Popular Pages</h1>
                </div>

                <div className=' flex flex-col gap-2'>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>Keyboard Tester</p>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>Reading Speed Test</p>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>RSVP (Reading) Test</p>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>Scroll Text (Reading) Test</p>
                </div>
            </div>  

            <div className='col-span-1 flex flex-col items-center justify-center gap-2  '>
                <div>
                   <h1 className=' font-bold text-xl mr-4 '>Support</h1>
                </div>
                <div className=' flex flex-col gap-1 '>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>Help & FAQs</p>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>Feedback</p>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>Changelog</p>
                    <p className=' cursor-pointer hover:text-yellow-300 hover:underline text-sm'>System Status</p>
                </div>
            </div>  

            <div className=' col-span-3 text-sm py-10 bg-slate-800'>
              <h1 className=' text-center text-lg pb-3'>Copyright 2023-2024 WPMTEST.ORG v2.0 - All rights reserved.</h1>
              <p className=' text-center text-xs'>All trademarks, service marks, trade names, product names, logos and trade dress appearing on our website are the property of their respective owners i.e WPMTEST.</p>
            </div>
      </div>
    </> 
  )
}

export default Contact