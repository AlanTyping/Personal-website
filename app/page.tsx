import Navbar from './navbar/navbar';
import Presentation from './presentation/page';
import KeepGoing from './keep-going/page';
import Programming from './programming/page';
import Edits from './edits/page';
import Trading from './trading/page';

export default function Home() {
  return (
    <div className='flex flex-col w-full bg-blue-600'>
      {/* <Navbar /> */}
      <Presentation />
      <KeepGoing />
      <Programming />
      <Edits />
      <Trading />
    </div> 
  )
}
