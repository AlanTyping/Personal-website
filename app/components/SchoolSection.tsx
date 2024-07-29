'use client'

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';


export default function SchoolSection() {
  const animatedElementRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ height: 250 }); // Agregar clase de animación al entrar en la vista
          } else {
            // Eliminar clase de animación al salir de la vista
          }
        });
      },
      { threshold: 1 } // Umbral del 100% de visibilidad
    );

    if (animatedElementRef.current) {
      observer.observe(animatedElementRef.current);
    }

    return () => {
      if (animatedElementRef.current) {
        observer.unobserve(animatedElementRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ height: 0 }} // Estado inicial fuera de la vista
      animate={controls} // Animación controlada por Framer Motion
      transition={{ duration: 1.3, ease: 'backOut', delay: 0.3 }}
      ref={animatedElementRef}
      className="overflow-hidden px-[27px] 2xl:py-20 text-[0.95rem] z-40 lg:mt-[-120px] xl:mt-[-16px] md:text-[1.1rem] 2xl:text-[1.2rem] flex-center flex-col justify-center w bg-[var(--secondary)] border-y border-[var(--tertiary)] text-white">
      <motion.p
        className='md:w-[60%] w'>
        Desarrollo de páginas
        web para instituciones educativas 🏫, por lo que, si formas parte
        de un colegio que necesita una página web o actualizar la
        que ya tiene, quizás te sientas interesado.
      </motion.p>
      <motion.div className='md:w-[60%] w mt-4'>
        <span>Para más info, consultar el siguiente pdf haciendo <a className='text-[var(--lighterBlue)] border-b-[1px] border-[var(--lighterBlue)]' href="./servicio.pdf" download>click aquí</a>.</span>
      </motion.div>
    </motion.div>
  )
}
