import React from 'react';
import Image from 'next/image';
import KeepGoingSvg from './utilities/keep-going.svg';

export default function KeepGoing() {
    return (
        <div id="pc-crazy-svg" className="w-full bg-[#00349A]">
            <Image src={KeepGoingSvg} className="w-full" alt='keep going' />
        </div>
    )
}
