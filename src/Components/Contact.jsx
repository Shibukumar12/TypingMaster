import React from 'react'
import typingLogo from '../assets/typingLogo.png'
import '@fortawesome/fontawesome-free/css/all.css'

function Contact() {
  return (
    <>
      <div className=' grid grid-cols-3 bg-black text-white pt-14'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <img className=' w-72' src={typingLogo} alt="" />
              <div className='flex gap-5'>
                  <i className="fab fa-facebook-square text-2xl cursor-pointer "></i>
                  <i className="fab fa-twitter text-2xl cursor-pointer"></i>
                  <i className="fab fa-instagram  text-2xl cursor-pointer"></i>
                  <i className="fab fa-youtube  text-2xl cursor-pointer"></i>
              </div>
            </div>  

            <div className=' flex flex-col items-center justify-center gap-2'>
                <div>
                    <h1 className=' font-bold text-xl mr-10'>Popular Pages</h1>
                </div>

                <div>
                    <p className=' cursor-pointer hover:underline'>Keyboard Tester</p>
                    <p className=' cursor-pointer hover:underline'>Reading Speed Test</p>
                    <p className=' cursor-pointer hover:underline'>RSVP (Reading) Test</p>
                    <p className=' cursor-pointer hover:underline'>Scroll Text (Reading) Test</p>
                </div>
            </div>  

            <div className=' flex flex-col items-center justify-center gap-2'>
                <div>
                   <h1 className=' font-bold text-xl mr-4 '>Support</h1>
                </div>
                <div>
                    <p className=' cursor-pointer hover:underline'>Help & FAQs</p>
                    <p className=' cursor-pointer hover:underline'>Feedback</p>
                    <p className=' cursor-pointer hover:underline'>Changelog</p>
                    <p className=' cursor-pointer hover:underline'>System Status</p>
                </div>
            </div>  

            <div className=' col-span-3 '>
              <h1>Copyright 2023-2024 WPMTEST.ORG v2.0 - All rights reserved.</h1>
              <p>All trademarks, service marks, trade names, product names, logos and trade dress appearing on our website are the property of their respective owners i.e WPMTEST.</p>
            </div>
      </div>
    </>
  )
}

export default Contact