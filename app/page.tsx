import Navbar from './navbar/navbar';
import Presentation from './presentation/page';
import KeepGoing from './keep-going/page';
import Projects from './projects/projects';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className={`flex flex-col w-full bg-blue-600 ${poppins.className}`}>
      {/* <Navbar /> */}
      <Presentation />
      <KeepGoing />
      <Projects />
    </div> 
  )
}
