import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import SocialIcons from './ui/SocialIcons'
import Image from 'next/image'
import Badge from './ui/badge'


const Hero = () => {
  return (
    <section className='max-padd-container py-20 bg-[#fdf3fb] dark:bg-transparent'>
      <div className='flexCenter gap-24 flex-col xl:flex-row'>
        {/* Left Side of the hero section! */}
        <div className='flex flex-1 flex-col pt-12 xl:pt-32'>
          <h1 className='h1 !font-extrabold'>
            Hello! my name is Ishwor and I am a student at the University. 
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos recusandae facilis, facere expedita tenetur perspiciatis. Enim tenetur quis laboriosam suscipit.
          </p>

          <div className='mt-6 flex gap-4'>
            <Button className='gap-x-2 shadow-xl'>
                Contact Me <MoveRight size={20}/>
            </Button>

            <Button className='shadow-xl bg-black hover:bg-[#222] text-white'>
              Download Resume
            </Button>
          </div>

          <div className='mt-20'>
          <SocialIcons />
          </div>
        </div>

        {/* Right part of the Section */}
        <div className='flex flex-1 relative z-10 top-12'>
          <div>
            <Image src={'/bg.png'} height={488} width={488} priority alt = 'myPortrait' className='drop-shadow-sm'/>
          </div>
        </div>

        {/* Photo badges */}
        <div className='hidden xl:flex'>
          <Badge/>
        </div>
      </div>

    </section>

  )
}

export default Hero