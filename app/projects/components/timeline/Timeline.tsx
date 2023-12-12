import React from 'react';
import Image from 'next/image';
import web from '../../assets/web.svg';
import school from '../../assets/school.png';
import trading from '../../assets/trading.png';
import { Item } from './items/Item';

console.log(school)

export const Timeline = () => {
  const projects = [
    {
      id: 1,
      name: "School web",
      descripcion: "As I'm giving webpage services for schools, it's interesting to see a showcase project as a reference",
      icon: web,
      date: 'November 2023 - December 2023',
      link: 'https://school-showcase.vercel.app/',
      image: school
    },
    {
      id: 2,
      name: "Bluetrading",
      descripcion: "One of the problem in trading is recording your progress, that often requires some excel knowledge and it isn't that cool to see your progress inside some rectangles. This web app give you a nice layout to see your progress in a dinamic and graphic way",
      icon: web,
      date: 'July 2023 - November 2023',
      link: 'https://bluetrading.vercel.app/',
      image: trading
    },
  ]

  return (
    <div>
      <ul>
        {projects.map(e =>
          <Item
            key={e.id}
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
