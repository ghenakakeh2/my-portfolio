import { motion } from "framer-motion"
import { styles } from "../Styles"
import {SectionWrapper} from '../hoc'
import { fadeIn,textVariant } from "../Utils/Motion"
import { testimonials } from "../Constants"
  

const FeedbackCard = ({index,testimonial,name,designation,company,image}) => {
  return(
    <motion.dev
    variants={fadeIn("","spring",index *0.5,0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full '
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
           <div className="flex-1 flex flex-col">
           
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient mr-1">@</span>{name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
         

           </div>
           <img src={image} alt={`feedback-by-${name}`}  className="w-10 h-10 rounded-full object-cover"/>
        </div>
      </div>

      {console.log(testimonial)}

    </motion.dev>
  )
  
}



const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}>
        
        <motion.dev vaiants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
          <p className={`${styles.sectionSubText}`}>what Others Say</p>

        </motion.dev>

      </div>
      <div className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7 `}>
        {/* testimonials */}
        {testimonials.map((testimonial,index) => {
       return(
        <FeedbackCard
        key={testimonial.name}
        index={index}
        {...testimonial}
        />
       )
          
        }
        )}

      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks,"feedbacks")