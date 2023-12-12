import React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import web from './assets/web.svg';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const poppins500 = Poppins({
  weight: "500",
  subsets: ["latin"]
})

const poppins800 = Poppins({
  weight: "800",
  subsets: ["latin"]
})

const projects = [
  {
    id: 1,
    name: "School web",
    descripcion: "As I'm giving webpage services for schools, it's interesting to see a showcase project as a reference" 
  },
  {
    id: 2,
    name: "Bluetrading",
    descripcion: "One of the problem in trading is recording your progress, that often requires some excel knowledge and it isn't that cool to see your progress inside some rectangles. This web app give you a nice layout to see your progress in a dinamic and graphic way" 
  },
]

export default function Projects() {
  return (
    <section id='projects' className='h-[100vh] w-[100%] flex-center flex-col text-white bg-[#001d3d] border-t-[1px] border-[#ffa500]'>
      <div className='w-full flex justify-center flex-col items-center mt-10 text-[#0040c0] uppercase'>
        <h2 className={`text-[1.5rem] text-white ${poppins500.className}`}>what i have done so far</h2>
        <h2 className={`text-[4.5rem] ${poppins800.className}`}>projects</h2>
      </div>

      <div className="">
        <VerticalTimeline>

        </VerticalTimeline>
      </div>
    </section>
  )
}
