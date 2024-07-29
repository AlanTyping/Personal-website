import Link from "next/link"
import { poppins400, poppins600 } from "../../utilities/fonts"
import alan from '../../../public/lion.svg'
import Image from "next/image"

export default function Header() {
  return (
    <header className={`w h-[100px] lg:h-[80px] 2xl:h-[125px] flex-center bg-[var(--secondary)] border-b-[2px] border-[var(--tertiary)] p-[27px] text-white ${poppins400.className}`}>
      <nav className="w sm:w-[95%] lg:w-[90%] flex items-center justify-end relative sm:text-[1.4rem] lg:text-[1rem] 2xl:text-[1.5rem] gap-12">
        <div className="flex items-center gap-[13px] 2xl:gap-6 absolute left-0">
          <div className="h-[32px] sm:h-[50px] lg:h-[40px] 2xl:h-[60px] aspect-square w-auto relative">
            <Image src={alan} alt="alan" fill={true} className="rounded-[2px]" />
          </div>
          <Link href='#' className={`${poppins600.className} text-[1.2rem] sm:text-[1.8rem] lg:text-[1.5rem] 2xl:text-[2rem]`}>Portafolio</Link>
        </div>
        <Link href='#' className="hidden lg:flex">blog</Link>
        <Link href='#' className="hidden lg:flex">projectos</Link>
        <Link href='mailto:alantyping.dev@gmail.com' className="h-[44px] sm:h-[60px] lg:h-[50px] 2xl:h-[65px] w-[135px] sm:w-[246px] lg:w-[180px] 2xl:w-[266px] border border-[var(--tertiary)] lg:bg-[var(--terciary)] rounded-[3px] flex-center lg:hover:bg-[var(--tertiary)] transition">contacto</Link>
      </nav>
    </header>
  )
}
