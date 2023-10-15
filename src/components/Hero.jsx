import {motion} from 'framer-motion'
import { styles } from '../Styles'
import { ComputersCanvas } from './canvas'
import cv from '../assets/cv.pdf'

const Hero = () => {
  return (
    <section className='bg-hero-pattern bg-no-repeat bg-center bg-cover relative w-full h-screen mx-auto' id="about">
    <div className={`${styles.paddingX} absolute  inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5   z-20`}>
      <div className="flex flex-col  justify-center items-center mt-5">
        <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-60 violet-gradient ' />
      </div> 
      <div className=''>
        <h1 className={`${styles.heroHeadText} text-white red`} > Hi, I'm  <span className='text-[#915eff]'>Ghena</span></h1>
       <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a Front End Developer</p>
      <p className=' sm:w-1/2 mt-2  text-gray-200'>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things</p>
    <button className='px-10 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg shadow-lg mt-5 font-bold text-lg  hover:m-5'><a href={cv} >Check Resume</a></button>
      </div>
    </div>
    {/* <ComputersCanvas/> */}

    </section>

  
  )
}

export default Hero