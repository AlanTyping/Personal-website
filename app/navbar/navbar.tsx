'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './navbar.css';
import home from './utilities/home.svg';
import code from './utilities/code.svg';
import editing from './utilities/editing.svg';
import trading from './utilities/trading.svg';

export default function Navbar() {
  const [animationState, setAnimationState] = useState(false);
  const [secondAnimationState, setSecondAnimationState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationState(true);
    }, 2000);
    setTimeout(() => {
      setSecondAnimationState(true);
    }, 3000);
  }, []); 

  return (
    animationState ?
      <motion.div
        initial={{ height: '0vh' }}
        animate={{ height: '40vh' }}
        transition={{ duration: 1 }}
        id='nav' className={'fixed rounded w-[3.3vw] max-h-[280px] text-[white] bg-[rgba(0,52,154,0.25)] border-t-[1px] border-b-[1px] border-[#ffa500] flex flex-col cursor:pointer z-[3]'}>
        {secondAnimationState && (
          <>
            <Link className='h-[25%] w-full flex justify-center items-center' href="/#presentation">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Image src={home} alt='home-svg' />
              </motion.div>
            </Link>
            <Link className='h-[25%] w-full flex justify-center items-center' href="/#programming">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                
              >
                <Image src={code} alt='code-svg' />
              </motion.div>
            </Link>
            <Link className='h-[25%] w-full flex justify-center items-center' href="/#edits">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <Image src={editing} alt='editing-svg' />
              </motion.div>
            </Link>
            <Link className='h-[25%] w-full flex justify-center items-center' href="/#trading">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <Image src={trading} alt='trading-svg' />
              </motion.div>
            </Link>
          </>

        )}
      </motion.div>
      : <></>
  )
}
