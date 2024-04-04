import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import SectionWrapper from '../hoc/SectionWrapper'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'


const FeedbackCard=({key,testimonial,index,name,designation,company,image})=>{
  return (
<motion.div variants={fadeIn("",'spring',index * 0.5,0.75)}
className='bg-black-200 sm:p-5 testimonial-card p-10 rounded-3xl xs:w-[320px] w-full'>
  <p className='text-white font-black text-[48px]'>"</p>

  <div className='mt-1'>
  <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
  </div>

  <div className='mt-7 flex justify-between items-center gap-1'> 
<div className='flex flex-1 flex-col'>
<p className='text-white font-medium text-[16px]'>
  <span className='blue-text-gradient'>@</span>{name}
</p>
<p className='mt-1 text-[12px] text-secondary'>
  {designation} of {company}
</p>

</div>
<img className='w-10 h-10 rounded-full object-cover' src={image} alt={`feedback by ${name} `} />
  </div>



</motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`} >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>



      </div>


<div className={`${styles.padding} -mt-20 pb-14 flex flex-wrap gap-7` }>
{testimonials.map((testimonial,index)=>(
  <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
))}
</div>

    </div>
  )
}

export default SectionWrapper(Feedbacks,'')