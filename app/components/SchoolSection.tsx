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
            controls.start({ height: 640 }); // Agregar clase de animación al entrar en la vista
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
      transition={{ duration: 1, ease: 'backOut', delay: 0 }}
      ref={animatedElementRef}
      className="overflow-hidden overflow-y-scroll gap-4 md:gap-8 px-[27px] text-[0.96rem] md:text-[1.15rem] 2xl:text-[1.4rem] z-40 lg:mt-[-120px] xl:mt-[-16px] flex-center flex-col justify-center w bg-[var(--secondary)] border-y border-[var(--tertiary)] text-white">
      <motion.p className='md:w-[60%] w pt-[50px] md:pt-[30px]'>
        Me llamo Alan, tengo 20 años y soy programador hace tres. Tengo experiencia en desarrollo web, tanto del lado
        del servidor como del lado del cliente. Sin embargo, me di cuenta de que la programación no es mi principal camino a seguir,
        sino una valiosa herramienta para usar cuando la necesite.
      </motion.p>
      <motion.p
        className='md:w-[60%] w'>
        En base a mi experiencia en el sistema educativo, siento un profundo propósito de contribuir a su mejora
        y que todos podamos tener la mejor experiencia posible,
        resolviendo problemas clave que generan reacciones negativas en cadena.
        La gracia es enfrentarlos y que esas reacciones sean positivas.
      </motion.p>
      <motion.p
        className='md:w-[60%] w'>
        Debido a esto voy a ser consultor educativo, pero necesito aprender, y no se me ocurre
        mejor manera que ofreciendo un servicio totalmente <span className='font-bold'>único Y gratuito</span> durante 2 meses.
      </motion.p>
      <motion.div className='md:w-[60%] w pb-10 md:pb-8'>
        <span>Para más info, consultar el siguiente pdf haciendo <a className='text-[var(--lighterBlue)] border-b-[1px] border-[var(--lighterBlue)]' href="./servicio.pdf" download>click aquí</a>.</span>
      </motion.div>
    </motion.div>
  )
}
