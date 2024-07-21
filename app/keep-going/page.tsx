import React from 'react';
import Image from 'next/image';
import KeepGoingSvg from './utilities/keep-going.svg';
import KeepKeepGoingSvg from './utilities/keep-keep-going.svg';

export default function KeepGoing() {
  return (
    <section className="w-full bg-[var(--primary)] hidden xl:flex z-30 mt-[-140px]">
      <Image src={KeepKeepGoingSvg} className="w-full" alt='keep going' />
    </section>
  )
}
 