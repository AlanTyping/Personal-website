import React from 'react';
import { Item } from './items/Item';
import { projects } from './data';

export const Timeline = () => {

  return (
    <div className='mt-10 2xl:mt-16'>
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
            color={e.color}
            type={e.type}
          // mobileColor={e.mobileColor}
          />)
        }
      </ul>
    </div>
  )
}
