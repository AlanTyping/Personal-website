'use client'

import React from 'react';

export default function SchoolSection() {
  return (
    <div className="py-16 px-[27px] 2xl:py-20 text-[0.95rem] z-40 lg:mt-[-120px] xl:mt-[-16px] md:text-[1.1rem] 2xl:text-[1.2rem] flex-center flex-col justify-center w bg-[var(--secondary)] border-y border-[var(--tertiary)] text-white">
      <p className='md:w-[60%] w'>
        Desarrollo de páginas
        web para instituciones educativas 🏫, por lo que, si formas parte
        de un colegio que necesita una página web o actualizar la
        que ya tiene, quizás te sientas interesado.
      </p>
      <div className='md:w-[60%] w mt-4'>
        <span>Para más info, consultar el siguiente pdf haciendo <a className='text-[var(--lighterBlue)] border-b-[1px] border-[var(--lighterBlue)]' href="./servicio.pdf" download>click aquí</a>.</span>
      </div>
    </div>
  )
}
