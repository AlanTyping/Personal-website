import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='fixed rounded h-[40vh] w-[4vw] text-[white] bg-[#0b265c] border-[1px] border-[orange] left-[-3px] top-40 flex flex-col cursor:pointer z-[3]'>
        <Link className='h-[25%] w-full flex justify-center items-center' href="/#presentation">sd</Link>
        <Link className='h-[25%] w-full flex justify-center items-center' href="/#programming">sd</Link>
        <Link className='h-[25%] w-full flex justify-center items-center' href="/#edits">ert</Link>
        <Link className='h-[25%] w-full flex justify-center items-center' href="/#trading">sd</Link>
    </div>
  )
}
