import Navbar from './navbar/navbar';
import Header from './components/header/Header';
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
    <div className={`flex-center h-auto flex-col w-full bg-[var(--primary)] overflow-hidden z-[-3] ${poppins.className}`}>
      {/* <Navbar /> */}
      <Header />
      <Presentation />
      <KeepGoing />
      <Blog />
      <SchoolSection />
      <Projects />
      <Footer />
    </div> 
  )
}
