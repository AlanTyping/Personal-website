import React from 'react';
import Image from 'next/image';
import whatsapp from './assets/whatsapp.svg';
import mail from './assets/mail.svg';
import instagram from './assets/instagram.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='relative flex items-center justify-center w-full h-[50px] bg-[#00152b]'>
      <ul className="flex w-[45%] absolute top-4 items-center justify-evenly">
        <li><Link href={''} target='blank'><Image src={whatsapp} alt='' className="h-[25px] w-[25px]" /></Link></li>
        <li><Link href={'https://www.instagram.com/alan_anr/'} target='blank'><Image src={instagram} alt='' className="h-[25px] w-[25px]" /></Link></li>
        <li><Link href={'mailto:alan.a.n.r@gmail.com'} target='blank'><Image src={mail} alt='' className="h-[25px] w-[25px]" /></Link></li>
      </ul>
    </div>
  )
}
