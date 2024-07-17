import Navbar from './navbar/navbar';
import Presentation from './presentation/page';
import KeepGoing from './keep-going/page';
import Blog from './blog/Blog';
import SchoolSection from './components/SchoolSection';
import Projects from './projects/projects';
import Footer from './footer/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className={`flex-center h-auto flex-col w-full bg-blue-600 overflow-hidden z-[-3] ${poppins.className}`}>
      {/* <Navbar /> */}
      <Presentation />
      <KeepGoing />
      <Blog />
      <SchoolSection />
      <Projects />
      <Footer />
    </div> 
  )
}
