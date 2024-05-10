'use client'

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { Timeline } from './components/timeline/Timeline';
import { poppins400 } from '../utilities/fonts';
import { poppins800 } from '../utilities/fonts';

export default function Projects() {
  return (
    <section id='projects' className='h-auto pb-20 w-[100%] flex-center flex-col text-white bg-[var(--blue)] border-t-[1px] border-[#ffa500]'>
      <div className='w-full flex justify-center flex-col items-center mt-10 2xl:mt-14 text-[#0040c0] uppercase'>
        <h2 className={`text-[1.15rem] md:text-[1.5rem] 2xl:text-[2rem] text-white ${poppins400.className}`}>what i have done so far</h2>
        <h2 className={`text-[3.25rem] md:text-[4.5rem] 2xl:text-[6rem] ${poppins800.className}`}>projects</h2>
      </div>

      <Timeline />
    </section>
  )
}
