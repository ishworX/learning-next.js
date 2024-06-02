import React from 'react'
import CountUp from 'react-countup'

const Badge = ({containerStyles, icon, endCountNum, endCountText, badgeText, reviewCount }) => {
  return (
    <div className={`${containerStyles} badge`}> 
      {icon && <div className='text-3xl text-primary dark:text-black'> {icon}
      </div>}

      {endCountNum && <div className='flex flex-col'> <div className='flexCenter gap-x-2'>
        <div className='bold-36 leading-none text-primary dark:text-black'>
          <CountUp end={endCountNum} duration={5} delay={1}/>
          {endCountText} </div> </div> 
        </div>}
    </div>
    
    
  )
}

export default Badge