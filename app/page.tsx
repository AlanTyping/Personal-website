import Link from 'next/link';
import Presentation from './presentation/page';

export default function Home() {
  return (
    <div className='flex flex-col w-full bg-blue-600'>
      <Presentation />
      <div className='h-[1200px] w-[200px] bg-green-500'>
        asd
      </div>
      <Link href='/#presentation'>Miau</Link>
    </div> 
  )
}
