import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import SocialIcons from './ui/SocialIcons'


const Hero = () => {
  return (
    <section>
      <div>
        {/* Left Side of the hero section! */}
        <div>
          <h1>
            Hello! my name is Ishwor and I am a student at the University. 
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos recusandae facilis, facere expedita tenetur perspiciatis. Enim tenetur quis laboriosam suscipit.
          </p>
          <div>

            <Button className='gap-x-2 shadow-xl'>
                Contact Me <MoveRight size={20}/>
            </Button>

            <Button className='shadow-xl bg-black hover:bg-[#222] text-white'>
              Download Resume
            </Button>
          </div>
          <div>
          <SocialIcons />
          </div>
        </div>
        
        </div>

    </section>

  )
}

export default Hero