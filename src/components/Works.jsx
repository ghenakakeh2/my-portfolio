import { Tilt } from "react-tilt"
import {animate, motion} from 'framer-motion'
import { styles  } from "../Styles"
import { github } from "../assets"
import { projects } from "../Constants"
import {fadeIn,textVariant} from '../Utils/Motion'
import {SectionWrapper} from '../hoc/index'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const ProjectCard =({index, name,description,tags,image,source_code_link,Live_Demo}) => {
  return(
    <motion.dev variants={fadeIn("up","spring", index * 0.5 , 0.75)}>
     <Tilt
   options={
    {
      max : 45,
      scale:1,
      speed:450

    }

   }
   className='bg-tertiary  rounded-2xl sm:w-[360px] w-full '
     >
      <div className="relative w-full h-[230px] ">
         <img src={image} alt={name} className="w-full h-full object-cover rounded-xl  "/>
         <div className="absolute inset-0 flex justify-end card-img_hover">
          <div 
          onClick={()=>{
            window.open(source_code_link,"_blank")


          }}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />

          </div>

         </div>
      </div>
      <div className="mt-5 p-4">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-1 text-secondary ">{description}</p>

      </div>
      <div className="mt-4 flex flex-wrap gap-3 px-4">
      {
        tags.map((tag) => {
          return(
            <p key={tag.name} className={`${tag.color}`}>
              #{tag.name}

            </p>
          )
          
        }
        )
      }

      </div>
      <div className="flex justify-between px-4  py-4">
       <button className="px-5 py-2 rounded-md border-[1px] border-secondary border-solid"  onClick={()=>{
            window.open(Live_Demo,"_blank")


          }} > Demo</button>
       <button className="px-5 py-2 rounded-md border-[1px] border-secondary border-solid"   onClick={()=>{
            window.open(source_code_link,"_blank")


          }}>Source code</button>

      </div>

     </Tilt>
    </motion.dev>
  )
}


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()} id="projects">
      <h2 className={`${styles.sectionHeadText}`}> Projects  </h2>
    <motion.p  variants={fadeIn("","",0.1,1)} className={`${styles.sectionSubText} !w-full`}>  Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described 
         with links to code repositories and live demos in it. 
         it reflects my ability to solve complex problems , work with different technologies , and mange projects effectively.</motion.p>

      </motion.div>

    <div className="mt-20 flex flex-wrap gap-7">
    <Swiper
        // slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:2,
          },
          639: {
            slidesPerView: 1,
          },
          865:{
            slidesPerView:2
          },
          1000:{
            slidesPerView:3
          },}}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
      {
        projects.map((project,index) => {
          return(
            <SwiperSlide className="mb-16 " >

             <ProjectCard 
             key={`project-${index}`}
             index={index}
             {...project}
             />
            </SwiperSlide>

          )
        }
        )
      }
         </Swiper>

    </div>

    
    </>
  )
}

export default SectionWrapper(Works,"works")