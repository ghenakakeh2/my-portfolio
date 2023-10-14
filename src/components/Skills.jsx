import React, { useEffect, useState } from 'react';
import {technologies} from '../Constants/index'
import { Tilt } from "react-tilt"

import {styles} from "../Styles"
import {SectionWrapper} from '../hoc'
import { slideIn,fadeIn,textVariant } from "../Utils/Motion"

import {motion} from 'framer-motion'


const Skills = () => {


    const [teachno,setTechno]=useState([]);
 

    useEffect(() => {
      setTechno(technologies)
      
    }
    ,[teachno])


    const SkillCard=({skill},index) => {
      return(
        <motion.dev variants={fadeIn("up","spring", index * 0.5 , 0.75)} >
        <Tilt
      options={
       {
         max : 45,
         scale:1,
         speed:350
   
       }
   
      }
      className='  rounded-2xl  '
        >
        <div key={skill.id} className='flex justify-center items-center gap-2 px-2  border-[1px] border-gray-600 rounded-md border-solid   py-2 px- shadow-card   '> 
        <img src={skill.icon} alt="" className='w-8 h-8  ' />
        <p> {skill.name}</p>
      </div>
      
     </Tilt>
    </motion.dev>

      )
    }
    
  return (
    <section id="skills">
        <motion.div variants={textVariant()}>
       
        <h3 className={`${styles.sectionHeadText}`}> Skills  </h3>
       
        <motion.p  variants={fadeIn("","",0.1,1)} className={`${styles.sectionSubText}`}> Here are some of my skills on which I have been working on for the past 2 years. </motion.p>
        </motion.div>
        <div className=" flex flex-wrap gap-20 justify-between  mt-10  ">
            {
              teachno.map((teac,index) => {
                
                return(
                  <div key={index}  className={`sm:w-[46%]  w-full  py-8  px-2 border-[0.1px] border-purple-600  shadow-card bg-[rgb(23, 23, 33)] rounded-xl`}>
                    <h2 className='text-gray-500 font-bold text-3xl text-center py-2'>{teac.name}</h2>
                    <div className='flex sm:justify-evenly justify-around mt-5 items-center gap-5  flex-wrap p-5 '>
                      
                      {
                      
                      teac.data.map((skill,index) => {
                        return(
                          <SkillCard key={skill.name} skill={skill} index={index}/>
                        
                        )
                      }
                      )}


                    </div>
                     </div>
                )
              }
              )
            }
        </div>
   
    </section>
  )
}

export default SectionWrapper(Skills,'skills')
