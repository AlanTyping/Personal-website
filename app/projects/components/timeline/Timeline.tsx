import React from 'react';
import Image from 'next/image';
import web from '../../assets/web.svg';
import school from '../../assets/school.png';
import trading from '../../assets/trading.png';
import flash from '../../assets/flash.png';
import speed from '../../assets/speed.png';
import { Item } from './items/Item';

export const Timeline = () => {
  const projects = [
    {
      name: "School web",
      descripcion: "As I'm giving webpage services for schools, it's interesting to see a showcase project as a reference",
      icon: web,
      date: 'November 2023 - December 2023',
      link: 'https://school-showcase.vercel.app/',
      image: school
    },
    {
      name: "Bluetrading",
      descripcion: "One of the problem in trading is recording your progress, that often requires some excel knowledge and it isn't that cool to see your progress inside some rectangles. This web app give you a nice layout to see your progress in a dinamic and graphic way",
      icon: web,
      date: 'July 2023 - November 2023',
      link: 'https://bluetrading.vercel.app/',
      image: trading
    },
    
    {
      name: "Speed cube",
      descripcion: "One of the problem in trading is recording your progress, that often requires some excel knowledge and it isn't that cool to see your progress inside some rectangles. This web app give you a nice layout to see your progress in a dinamic and graphic way",
      icon: web,
      date: 'December 2022 - March 2023',
      link: 'https://speedcube-timer.vercel.app/',
      image: speed
    },
    
    {
      name: "Flash Typing",
      descripcion: "One of the problem in trading is recording your progress, that often requires some excel knowledge and it isn't that cool to see your progress inside some rectangles. This web app give you a nice layout to see your progress in a dinamic and graphic way",
      icon: web,
      date: 'Octuber 2022 - November 2022',
      link: 'https://flashtyping.netlify.app/',
      image: flash
    },
  ]

  return (
    <div className='mt-10'>
      <ul>
        {projects.map((e, i) =>
          <Item
            key={i}
            name={e.name}
            descripcion={e.descripcion}
            icon={e.icon}
            date={e.date}
            link={e.link}
            image={e.image}
          />)
        }
      </ul>
    </div>
  )
}
