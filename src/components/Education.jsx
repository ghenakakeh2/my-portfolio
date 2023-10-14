import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import {motion} from 'framer-motion'
import'react-vertical-timeline-component/style.min.css'
import { styles } from '../Styles'
import { experiences } from '../Constants'
//section warpper
import {textVariant} from '../Utils/Motion'
import {SectionWrapper} from '../hoc'



const ExperinceCard = ({experince}) => {
    return(
      <VerticalTimelineElement  contentStyle={{background:"#1d1836",color:"#fff"}} contentArrowStyle={{borderRight:"1px solid #232631"}}
      date={experince.date} iconStyle={{background:experince.iconBg}} 
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img 
          src={experince.icon}
          alt={experince.company_name}
          className='w-[60%] h-[64%] object-contain '
          />
        </div>
      }
      >
       <div>
        <h3 className='text-white text-[24px] font-bold '>{experince. title}</h3>
        <p p className='text-secondary text-[16px] font-semibold m-0'>{experince. company_name}</p>
        
       </div>
       <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experince.points.map((point,index) => {
          return(
            <li key={`experince-poiny-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
              {point}
            </li>
          )
        }
        )}

       </ul>
    
      </VerticalTimelineElement>
    )
}


const Education = () => {
  return (
    <section className='education py-10' id="Education">
      <motion.div variants={textVariant()} >
      <h2 className={`${styles.sectionHeadText}`}> Education  </h2>
    <p className={`${styles.sectionSubText}`}> My education has been a journey of self-discovery and growth. My educational details are as follows.</p>

      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experince,index) => {
          return  <ExperinceCard key={index} experince={experince}/>
            
          }
          )}
        
        </VerticalTimeline>

      </div>
        {/* <div className="title ">
        <h2> Education  </h2>
    <p> My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
        </div> */}

    </section>
  )
}

export default SectionWrapper(Education,"Education")
