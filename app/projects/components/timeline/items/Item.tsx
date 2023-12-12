import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { poppins500 } from '../../../../utilities/fonts';

type Props = {
  name: string
  descripcion: string
  icon: StaticImageData
  date: string
  link: string
  image: StaticImageData
}

export const Item = ({ name, descripcion, icon, date, link, image }: Props) => {
  return (
    <li>
      <div className="h-auto py-10 w-[99vw] flex flex-row justify-center items-center relative">
        <div className="h-full w-[10%] absolute left-0">
          <div className='w-full h-full relative flex-center flex-col items-center'>
            <div className='h-full w-[3px] bg-[#0040c0]' />

            <div className='p-[1px] rounded-[100%] bg-[#0040c0] absolute top-0'>
              <Image src={icon} alt='' className='w-full' style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex-center justify-center rounded mt-8">
          <div className="bg-[#012979] w-[80%] rounded flex items-center p-4 relative flex-col border-b-[6px] border-[#ffa500]">
            <div className='w-full mt-2 pb-4 flex justify-start'> 
              <h2 className={`text-[1.4rem] ${poppins500.className}`}>{name}</h2>
            </div>

            <div className='w-full'>
              <Image src={image} alt='' className='w-full h-auto rounded' style={{ objectFit: 'contain' }} />
            </div>

            <div className='h-full w-full p-2'>
              <div className='w-full mt-2 flex justify-start'>
                <span className='text-[0.9rem] text-[#d8d8d8]'>{date}</span>
              </div>
              <div className='w-full mt-4 flex justify-start px-1'>
                <p className='text-[0.95rem] text-[#d8d8d8]'>{descripcion}</p>
              </div>
              <div className='w-full mt-4 flex justify-start px-1'>
                <Link href={link} className={`p-2 bg-[#001d3d] text-white rounded ${poppins500.className}`}>visit site</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </li>
  )
}
