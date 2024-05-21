import { LINKS } from '@/public/data'
import { motion } from 'framer-motion'
import { Link } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {

  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {LINKS.map((link, i) => (
        <Link href={link.path} key={i} className={`${linkStyles}`}>
          {link.path === path && (
            <motion.span
              initial={{ y: '-1000%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='undrline'
              className={`${underlineStyles}`}
            >
            </motion.span>)}
            {link.title}
        </Link>
      ))}
    </nav>
  )

}

export default Nav