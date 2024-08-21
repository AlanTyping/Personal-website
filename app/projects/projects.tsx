'use client'

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { Timeline } from './components/timeline/Timeline';
import { poppins400, poppins800 } from '../utilities/fonts';

export default function Projects() {
  return (
    <section id='projects' className='h-auto pb-20 w-[100%] flex-center flex-col text-[var(--text)] bg-[var(--primary)]'>
      <div className='w-full flex justify-center flex-col items-center mt-24 2xl:mt-14 text-[var(--tertiary)] uppercase'>
        <h2 className={`text-[1.15rem] md:text-[1.5rem] 2xl:text-[1.9rem] text-[#ccc] ${poppins400.className}`}>una vista de mis</h2>
        <h2 className={`text-[3.25rem] md:text-[4.5rem] 2xl:text-[4.5rem] text-[var(--text)] ${poppins800.className}`}>proyectos</h2>
      </div>

      <Timeline />
    </section>
  )
}