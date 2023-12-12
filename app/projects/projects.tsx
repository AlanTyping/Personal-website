import React from 'react';
import { Poppins } from 'next/font/google';

const poppins500 = Poppins({
  weight: "500",
  subsets: ["latin"]
})

const poppins800 = Poppins({
  weight: "800",
  subsets: ["latin"]
})

export default function Projects() {
  return (
    <section id='projects' className='h-[100vh] w-[100%] bg-[#001d3d] border-t-[1px] border-[#ffa500]'>
      <div className='w-full flex justify-center flex-col items-center mt-10 text-[#0040c0] uppercase'>
        <h2 className={`text-[1.5rem] text-white ${poppins500.className}`}>what i have done so far</h2>
        <h2 className={`text-[4.5rem] ${poppins800.className}`}>projects</h2>
      </div>
    </section>
  )
}
