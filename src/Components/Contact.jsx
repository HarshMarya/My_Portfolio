import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdMessage } from "react-icons/md";



function Contact() {
  return (
    <div className='p-6 md:p-10' id='contact-me'>
      <h1 className="text-4xl text-center font-bold mb-4">Contact Me</h1>
      <div className="w-[80px] h-[8px] bg-[#3F3D56] rounded-xl mx-auto mb-10"></div>

        <form className='flex flex-col w-full lg:w-1/2 mx-auto' action="https://api.web3forms.com/submit" method="POST">
          {/* web3forms link */}
        <input type="hidden" name="access_key" value="7baf9deb-8a04-4c04-82d5-5e4cf3b951c4"/>
        <div className='flex w-full relative'>
            <input type='text' name='Client Name'  placeholder='Your Name' className='contact-input'/>
            <FaUser className=' absolute right-4 top-8 text-2xl'/>
        </div>
        <div className='flex w-full relative'>
            <input type='email' name='Client Email'  placeholder='Your Email' className='contact-input'/>
            <MdEmail className=' absolute right-4 top-8 text-2xl'/>
        </div>
        <div className='flex w-full relative'>
            <textarea placeholder='Your Message' name='Client Message' className='contact-input h-[200px]'/>
            <MdMessage className=' absolute right-4 top-8 text-2xl'/>
        </div>
            <button type='submit' className='bg-black text-white w-fit p-4 hover:bg-white hover:text-black hover:border-2 hover:border-black transition font-bold'>GET IN TOUCH</button>
        </form>
        
    </div>
  )
}

export default Contact