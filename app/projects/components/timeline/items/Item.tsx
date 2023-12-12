import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="h-[500px] w-[99vw] flex flex-row items-center  relative">
        <div className="h-full w-[10%]  flex-center flex-col items-center relative">

          <div className='h-full w-[3px] bg-white' />

          <div className='p-[1px] rounded-[100%] bg-white absolute top-0'>
            <Image src={icon} alt='' fill={true} />
          </div>

        </div>

        <div className="h-auto w-[90%] flex-center rounded mt-8">
          <div className="bg-blue-800 w-[90%] rounded flex items-center p-4 relative flex-col">
            <div className='w-full'>
              <Image src={image} alt='' className='w-full h-auto rounded' style={{ objectFit: 'contain' }} />
            </div>

            <div className='h-full w-full p-2'>
              <div className='w-full mt-2 flex justify-start'>
                <span className='text-[0.9rem] text-[#d8d8d8]'>{date}</span>
              </div>
              <div className='w-full mt-2 flex justify-start'>
                <h2 className='text-[1.2rem]'>{name}</h2>
              </div>
              <div className='w-full mt-4 flex justify-start px-1'>
                <p className='text-[0.95rem] text-[#d8d8d8]'>{descripcion}</p>
              </div>
              <div className='w-full mt-4 flex justify-start px-1'>
                <Link href={link}>link</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </li>
  )
}
