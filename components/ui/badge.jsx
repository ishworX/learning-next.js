'use client'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'
import { FaStar } from 'react-icons/fa'

const Badge = ({ containerStyles, icon, endCountNum, endCountText, badgeText, reviewCount }) => {
  return (
    <div className={`${containerStyles} badge`}>
      {icon && <div className='text-3xl text-primary dark:text-black'> {icon}
      </div>}

      {endCountNum && <div className='flex flex-col'> <div className='flexCenter gap-x-2'>
        <div className='bold-36 leading-none text-primary dark:text-black'>
          <CountUp end={endCountNum} duration={5} delay={1} />
          {endCountText} 
          </div> 
            <div className='max-w-[77px] leading-name medium-15 dark:text-black'> {badgeText} 
            </div>
          </div>
      </div>}
      {/* Recent project card */}
      <div className='flex gap-x-4'>
        <Image src={'/project.png'} alt='newtasteofIndia' height={41} width={41} className='rounded-full' />
        <div className='flex flex-col'>
          <span className='bold-15 text-black'> New Taste Of India 
          </span>

          <span className='flexCenter text-xs text-primary dark:text-black'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className='text-black pl-1'>
              (<CountUp end={reviewCount} duration={4} delay={1}/>)
            </span>
          </span>
        </div>
      </div>
      {/* Details on the Card */}
    </div>


  )
}

export default Badge