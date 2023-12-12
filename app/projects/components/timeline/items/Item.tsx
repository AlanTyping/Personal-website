import { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  name: string
  descripcion: string
  icon: StaticImageData
  date: string
  link: string
  image: StaticImageData
}

export const Item = ({ name, descripcion, icon, date, link, image }: Props) => {
  return (
    <li>
      <h2>name</h2>
    </li>
  )
}
