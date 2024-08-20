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
      transition={{ duration: 1, ease: 'backOut', delay: 0.15 }}
      ref={animatedElementRef}
      className="overflow-hidden overflow-y-scroll px-[27px] text-[0.95rem] z-40 lg:mt-[-120px] xl:mt-[-16px] md:text-[1.1rem] 2xl:text-[1.2rem] flex-center gap-4 flex-col justify-center w bg-[var(--secondary)] border-y border-[var(--tertiary)] text-white">
      <motion.p className='md:w-[60%] w pt-[470px] md:pt-[265px]'>
        Me llamo Alan, tengo 20 años y estoy buscando experiencias para
        aumentar mi conocimiento y poder ser consultor educativo. Si estás leyendo
        esto, probablemente seas parte de un colegio con el que me contacté y
        sepas que estoy buscando una colaboración de par en par para
        mejorar y crecer juntos. Estoy ofreciendo un servicio
        único y gratuito de consultoría durante 3 meses, entendiendo que no soy
        ningún profesional pero las ganas de crecer sobran, no puedo prometer
        mejoras, pero sí aprendizaje.
      </motion.p>
      <motion.p className='md:w-[60%] w'>
        Soy programador hace 3 años y tengo experiencia en desarrollo web, tanto del lado
        del servidor como del lado del cliente. Sin embargo, me di cuenta de que no quiero
        dedicarme a eso, sino usarlo como herramienta cuando se necesite.
      </motion.p>
      <motion.p
        className='md:w-[60%] w'>
        Como mi experiencia en el sistema educativo fue muy mala, siento la necesidad
        de ir más allá de los fundamentos y trabajar de par en par con colegios para
        que podamos tener la mejor experiencia posible, y por ende aumentar
        riquezas y prosperidad.
      </motion.p>
      <motion.div className='md:w-[60%] w pb-7'>
        <span>Para más info, consultar el siguiente pdf haciendo <a className='text-[var(--lighterBlue)] border-b-[1px] border-[var(--lighterBlue)]' href="./servicio.pdf" download>click aquí</a>.</span>
      </motion.div>
    </motion.div>
  )
}
