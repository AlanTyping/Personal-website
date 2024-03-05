'use client'

import React from 'react';

export default function SchoolSection() {
  return (
    <div className="py-24 flex-center flex-col justify-center w bg-[var(--darkBlue)] text-white">
      <p className='w-[60%]'>
        Actualmente decidí especializarme en el desarrollo de páginas
        web para instituciones educativas, por lo que, si formas parte
        de un colegio el cual necesita una página web, o actualizar la
        que ya tiene, quizás te sientas interesado.
      </p>
      <div className='w-[60%] mt-4'>
        <span>Para más info, consultar el siguiente pdf:</span>
      </div>
      <a href="./a.pdf" download>Descargar PDF</a>
    </div>
  )
}
