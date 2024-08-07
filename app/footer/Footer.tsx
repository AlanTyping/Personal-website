import React from 'react';
import Image from 'next/image';
import whatsapp from './assets/whatsapp.svg';
import mail from './assets/mail.svg';
import instagram from './assets/instagram.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='relative flex items-center justify-center w-full h-[100px] 2xl:h-[150px] border-t border-[var(--tertiary)] bg-[var(--primary)]'>
      <ul className="flex w-[80%] md:w-[45%] absolute items-center justify-evenly">
        <li><Link href={'https://api.whatsapp.com/send?phone=541138235395'} target='blank'><Image src={whatsapp} alt='' className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] 2xl:h-[45px] 2xl:w-[45px]" /></Link></li>
        <li><Link href={'https://www.instagram.com/alan_anr/'} target='blank'><Image src={instagram} alt='' className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] 2xl:h-[45px] 2xl:w-[45px]" /></Link></li>
        <li><Link href={'mailto:alantyping.dev@gmail.com'} target='blank'><Image src={mail} alt='' className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] 2xl:h-[45px] 2xl:w-[45px]" /></Link></li>
      </ul>
    </div>
  )
}
