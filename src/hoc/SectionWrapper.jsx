import {motion} from 'framer-motion'
import { styles } from '../Styles'
import {staggerContainer} from '../Utils/Motion'


const SectionWrapper = (Commponent,index) => {
return(
  function HOC(){
    return(
  
      <motion.section variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.25}}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span ' id={index}>
         &nbsp;
        </span>
        
        <Commponent/>
      </motion.section>
    )
   }
)
}

export default SectionWrapper
