import React from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 desktop-sec ' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className='text-white items-center align-center text-center text-secondary text-[17px]'>
            {technology.name}
          </p>
        </div>
      ))}
      <div className='mob-sec flex flex-row justify-center align-center w-[100%] flex-wrap'>
        {technologies.map((technology)=>(
          <div className='p-5 flex justify-center flex-col tech-col' key={technology.name}>
            <img className='w-20 h-20 ' src={technology.icon} alt="" />
            <p className='text-white items-center align-center text-center mt-5 text-secondary text-[17px]'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, '')
