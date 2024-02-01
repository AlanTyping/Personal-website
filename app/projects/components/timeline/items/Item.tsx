import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { poppins500 } from '../../../../utilities/fonts';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

type Props = {
  name: string
  descripcion: string
  icon: StaticImageData
  date: string
  link?: string
  image?: StaticImageData
  color: string
}

export const Item = ({ name, descripcion, icon, date, link, image, color }: Props) => {
  const animatedElementRef = useRef(null);
  const [visible, setIsVisible] = useState<boolean>(false);
  const [background, setbackground] = useState<string>('');
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ x: 0, opacity: 1 }); // Agregar clase de animación al entrar en la vista
          } else {
             // Eliminar clase de animación al salir de la vista
          }
        });
      },
      { threshold: 0.5 } // Umbral del 50% de visibilidad
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
    <li ref={animatedElementRef}>
      <div className="h-auto py-10 2xl:py-14 w-[98vw] lg:w-[90vw] flex flex-row justify-center items-center relative">
        <div className="h-full w-[10%] absolute left-0">
          <div className='w-full h-full relative flex-center flex-col items-center'>
            <div className='h-full w-[3px] sm:w-[5px] 2xl:w-[7px] bg-[#0040c0]' />

            <div className='p-[1px] 2xl:p-[2px] rounded-[100%] bg-[#0040c0] absolute top-0'>
              <Image src={icon} alt='' className='w-[70px] max-w-[40px] sm:max-w-[50px] lg:max-w-[60px] 2xl:max-w-[100px] 2xl:w-[80px]' style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: -100, opacity: 0 }} // Estado inicial fuera de la vista
          animate={controls} // Animación controlada por Framer Motion
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="h-auto w-full flex-center justify-center rounded mt-8 2xl:mt-14">
          <div className={`bg-[#012979] overflow-hidden w-[80%] rounded flex items-center p-4 sm:p-6 2xl:p-8 relative flex-col border-b-[6px] border-[#ffa500] ${visible ? 'bg-red-400' : ''}`}>
            {image && <Image src={image} alt='' className='hidden lg:flex w-[150%] brightness-[30%] top-0 h-auto rounded absolute' style={{ objectFit: 'cover' }} />}
            
            <div className={`hidden lg:flex absolute inset-x-0 inset-y-0 z-[1] ${color}`} />

            <div className='w-full mt-2 pb-4 lg:pb-6 2xl:mt-6 flex justify-start z-[1]'>
              <h2 className={`text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] 2xl:text-[3rem] ${poppins500.className}`}>{name}</h2>
            </div>

            <div className='w-full lg:hidden'>
              {image && <Image src={image} alt='' className='w-full h-auto rounded z-[1]' style={{ objectFit: 'contain' }} />}
            </div>

            <div className='h-full w-full p-2 2xl:p-4 z-[1]'>
              <div className='w-full mt-2 flex justify-start'>
                <span className='text-[0.9rem] sm:text-[1.1rem] lg:text-[1.1rem] 2xl:text-[1.5rem] text-[#b4b4b4]'>{date}</span>
              </div>
              <div className='w-full mt-4 flex justify-start px-1'>
                <p className='text-[0.95rem] sm:text-[1.1rem] lg:text-[1.2rem] 2xl:text-[1.8rem] text-[#e0e0e0]'>{descripcion}</p>
              </div>
              <div className='w-full mt-6 2xl:mt-10 flex justify-start px-1'>
               {link && <Link href={link} target='blank' className={`p-2 bg-[#001d3d] lg:bg-[#0040c0] sm:text-[1.1rem] 2xl:text-[1.5rem] px-4 2xl:px-6 text-white rounded ${poppins500.className}`}>visit site</Link>} 
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </li>
  )
}
