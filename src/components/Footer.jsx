import React, { useState } from 'react'
import {navLinks} from '../Constants/index'
import   {githubsvg} from '../assets'
import {linkedin} from '../assets'
import {facebook} from '../assets'

// import {instgram} from '../assets'




const Footer = () => {
  const [active,setactive]=useState('')
  const [toggle,setToggle]=useState(false)

  return (
    <footer className=' bg-tertiary p-12 text-center'>
      <h2 className='mb-10 text-2xl  '>Ghena Kakeh</h2>
         <ul className='list-none  sm:flex flex-row gap-10 justify-center items-center  '>
          {navLinks.map((link) => {
          return(
            <li key={link.id} className={`${active === link.title ?"text-white":"text-secondary"} hover:text-white  font-medium cursor-pointer`} 
            onClick={() => {
              setactive(link.title)
            }
            }>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
          )
            
          }
          )}

        </ul>
        <div className="social-media flex justify-center items-center gap-10 mt-10">
      <a href="https://github.com/ghenakakeh2"><img src={githubsvg} alt="" className=' w-7 h-7  cursor-pointer' /></a>
      
      <a href=""> <img src={facebook} alt="" className=' w-7 h-7 cursor-pointer' /> </a>
      {/* <img src={instgram} alt="" className='w-5 h-5'/> */}
     <a href="https://www.linkedin.com/in/ghena-kakeh-76511b26b">  <img src={linkedin} alt="" className=' w-7 h-7 cursor-pointer'/> </a>
      
     

        </div>

    
      <p className='mt-10 text-[12px] '>© 2023 ghena kakeh . All rights reserved </p>

    </footer>
  )
}

export default Footer
