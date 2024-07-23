import Header from "../components/header/Header";
import Image from "next/image";
import { poppins400, poppins500, poppins600, poppins700, poppins800 } from "../utilities/fonts";
import force from './utilities/force.svg';
import line from './utilities/line.svg';

export default function Presentation() {
  return (
    <section className={`py-10 lg:py-[0px] w overflow-hidden flex flex-col lg:flex-col-reverse items-center lg:h-[750px] 2xl:h-[1000px]`}>
      <div className="relative animate-bounce h-[607px] w lg:h-[910px] lg:ml-24 mt-[-100px] lg:mt-[-320px] 2xl:mt-[-450px] 2xl:h-[2200px]">
        <Image fill={true} src={force} alt="force" />
      </div>
      <div className="hidden lg:flex w relative">
        <div className="absolute top-0 ml-24 2xl:ml-48 2xl:h-[600px] h-[400px] w-[430px] 2xl:w-[500px] z-20">
          <Image src={line} alt="line" fill={true} />
        </div>
      </div>
      <div className="w-[90%] lg:px-[27px] lg:w-[90%] text-[var(--text)] flex flex-col mt-[-200px] lg:mt-[70px] 2xl:mt-[140px] lg:ml-24 2xl:ml-40">
        <h2 className={`${poppins500.className} text-[2.5rem] lg:text-[3.2rem] 2xl:text-[3.5rem] z-10 mb-[-30px] uppercase`}>Be</h2>
        <h1 className={`${poppins700.className} text-[4rem] lg:text-[4.8rem] 2xl:text-[6.5rem] z-10 uppercase`}>Creative</h1>
      </div>
    </section>
  )
}




// "use client"

// import { motion } from "framer-motion";
// import React from "react";
// import Luna from "./utilities/Luna.svg";
// import Persona from "./utilities/Persona.svg";
// import PresentationLine from "./utilities/pc-presentation-line.svg";
// import MobilePresentationLine from "./utilities/presentation-line-mobile.svg";
// import "./presentation.css";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { poppins400 } from "../utilities/fonts";
// import { poppins800 } from "../utilities/fonts";

// export default function Presentation() {
//   const [animationState, setAnimationState] = useState(false);
//   const [secondAnimationState, setSecondAnimationState] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimationState(true);
//     }, 750);
//     setTimeout(() => {
//       setSecondAnimationState(true);
//     }, 1600);
//   }, []);

//   const container = {
//     hidden: { opacity: 0, height: "var(--height-from)" },
//     visible: {
//       opacity: 1,
//       height: "var(--height-to)"
//     }
//   }

//   return (
//     <section id="presentation" className={`h-auto w-[100%]`}>
//       <div id="stars" />
//       <div id="stars2" />
//       <div id="stars3" />
//       <div className="w-[100vw] h-[770px] md:h-[650px] 2xl:h-[950px] flex flex-col relative justify-end items-center">

//         <div id="luna-svg-container" className="flex h-[160px] absolute top-[-8px]">
//           <Image id="luna-svg" className="h-[100px] lg:h-[80px] 2xl:h-[130px] w-auto ml-6 2xl:ml-[-20px]" src={Luna} alt="luna-svg" />
//         </div>

//         <div className="flex justify-center items-center">
//           <Image id="persona-svg" className="z-[1] h-[140px] lg:h-[110px] 2xl:h-[160px] mb-[-1px] w-auto mr-[210px] 2xl:mr-[300px]" src={Persona} alt="persona-svg" />
//         </div>

//         <motion.div
//           initial="hidden"
//           transition={{ duration: 1 }}
//           animate={animationState ? "visible" : "hidden"}
//           exit={{ opacity: 0 }}
//           variants={container}
//           id={`${animationState}`}

//           className="w-full flex flex-col items-center [--height-from:0px] [--height-to:475px] sm:[--height-to:400px] 2xl:[--height-to:700px]">

//           <div className="bg-[rgba(0,52,154,0.25)] h-full w-[85%] lg:w-[55%] rounded-[10px] border-b-[1px] border-t-[1px] border-[#ffa500]">

//             <div className={secondAnimationState ? "relative text-[1rem] sm:text-[1.15rem] 2xl:text-[1.55rem] h-full w-full flex flex-col items-center justify-start text-white" : "hidden"}>
//               {secondAnimationState &&
//                 <>
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ x: 0, scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.2 }}
//                     className={"w-[85%] sm:w-[90%] mt-2 2xl:mt-10 h-[75px] flex justify-start items-center"}>
//                     <h2 className={`text-[1.8rem] 2xl:text-[2.25rem] text-[#ffa500] border-b-[1px] border-[#ffa500] h-auto ${poppins400.className}`}>Sobre mí</h2>
//                   </motion.div>

//                   <div className="w h-[350px] overflow-y-scroll px-6">
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ x: 0, scale: 1, opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                       className={"sm:w-[85%] mt-4 sm:mt-4 2xl:mt-12"}>
//                       Desarrollador Web de Argentina, dispuesto a enfrentar cualquier reto
//                       a cambio de aumentar conocimietos y habilidades.
//                     </motion.p>
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ x: 0, scale: 1, opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                       className={"sm:w-[85%] mt-4 2xl:mt-8 sm:pb-0"}>

//                       En búsqueda de caminos para mejorar el mundo y traer prosperidad.
//                       Creo que la unica entidad que persiste en el tiempo es el cambio, y esa es la razón
//                       porqué me gusta lo que hago, porque las cosas quizás núnca sean perfectas,
//                       pero siempre pueden ser mejoradas.
//                     </motion.p>
//                   </div>

//                 </>
//               }


//             </div>

//           </div>
//         </motion.div>

//         <div className="w-full flex justify-center">

//           <Image id="mobile-presentation-line" className="h-[130px] w-auto mr-48 md:hidden" src={MobilePresentationLine} alt="mobile-presentation-line" />

//           <Image className="h-[180px] 2xl:h-[270px] w-auto hidden md:flex" src={PresentationLine} alt="presentation-line" />
//           <div id="pc-line-orientation" className="w-[20%]" />

//         </div>
//       </div>
//     </section>
//   )
// }
