'use client'

import React from 'react';

export default function SchoolSection() {
  return (
    <div className="py-16 2xl:py-20 text-[0.95rem] md:text-[1.1rem] 2xl:text-[1.5rem] flex-center flex-col justify-center w bg-[var(--darkBlue)] border-t-[1px] border-[#ffa500] text-white">
      <p className='md:w-[60%] w-[80%]'>
        Especializandome en el desarrollo de páginas
        web para instituciones educativas 🏫, por lo que, si formas parte
        de un colegio el cual necesita una página web, o actualizar la
        que ya tiene, quizás te sientas interesado.
      </p>
      <div className='md:w-[60%] w-[80%] mt-4'>
        <span>Para más info, consultar el siguiente pdf haciendo <a className='text-[var(--lighterBlue)] border-b-[1px] border-[var(--lighterBlue)]' href="./servicio.pdf" download>click aquí</a></span>
      </div>
    </div>
  )
}
