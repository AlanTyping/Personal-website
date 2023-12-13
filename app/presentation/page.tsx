"use client"

import { motion } from "framer-motion";
import React from "react";
import Luna from "./utilities/Luna.svg";
import Persona from "./utilities/Persona.svg";
import PresentationLine from "./utilities/pc-presentation-line.svg";
import MobilePresentationLine from "./utilities/presentation-line-mobile.svg";
import "./presentation.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { poppins500 } from "../utilities/fonts";
import { poppins800 } from "../utilities/fonts";

export default function Presentation() {
  const [animationState, setAnimationState] = useState(false);
  const [secondAnimationState, setSecondAnimationState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationState(true);
    }, 750);
    setTimeout(() => {
      setSecondAnimationState(true);
    }, 1600);
  }, []);

  const container = {
    hidden: { opacity: 0, height: "var(--height-from)" },
    visible: {
      opacity: 1,
      height: "var(--height-to)"
    }
  }

  return (
    <section id="presentation" className={`h-auto w-[100%]`}>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="w-[100vw] h-[770px] md:h-[650px] 2xl:h-[950px] flex flex-col relative justify-end items-center">

        <div id="luna-svg-container" className="flex h-[160px] absolute top-[-8px]">
          <Image id="luna-svg" className="h-[100px] 2xl:h-[120px] w-auto ml-10 2xl:ml-[-20px]" src={Luna} alt="luna-svg" />
        </div>

        <div className="flex justify-center items-center">
          <Image id="persona-svg" className="z-[1] h-[130px] 2xl:h-[170px] mb-[-1px] w-auto mr-[210px] 2xl:mr-[300px]" src={Persona} alt="persona-svg" />
        </div>

        <motion.div
          initial="hidden"
          transition={{ duration: 1 }}
          animate={animationState ? "visible" : "hidden"}
          exit={{ opacity: 0 }}
          variants={container}
          id={`${animationState}`}

          className="w-full flex flex-col items-center [--height-from:0px] [--height-to:475px] sm:[--height-to:400px] 2xl:[--height-to:700px]">

          <div className="bg-[rgba(0,52,154,0.25)] h-full w-[85%] lg:w-[55%] rounded-[25px] border-b-[1px] border-t-[1px] border-[#ffa500]">

            <div className={secondAnimationState ? "relative text-[1rem] sm:text-[1.15rem] 2xl:text-[1.6rem] h-full w-full flex flex-col items-center justify-start text-white" : "hidden"}>
              {secondAnimationState &&
                <>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={"w-[85%] sm:w-[90%] mt-5 sm:mt-2 2xl:mt-10 h-[75px] flex justify-start items-center"}>
                    <h2 className={`text-[1.8rem] 2xl:text-[2.2rem] text-[#ffa500] border-b-[1px] border-[#ffa500] h-auto ${poppins500.className}`}>About</h2>
                  </motion.div>

                  <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={"w-[80%] sm:w-[85%] mt-5 sm:mt-4 2xl:mt-10"}>
                      Developer from Argentina, currently 19 years old and able to face any challenge 
                      in order to grow and increase my knowledge.
                  </motion.p>
                  <br />
                  <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={"w-[80%] sm:w-[85%] mt-4 2xl:mt-8 sm:pb-0"}>

                    In pursuit of ways to improve the world and bring prosperity.
                    I think that the only entity that persist over time is change, and that&apos;s pretty
                    much the reason why I love doing what I do, because things can may never be perfect
                    but they can always be improved
                  </motion.p>
                </>
              }


            </div>

          </div>
        </motion.div>

        <div className="w-full flex justify-center">

          <Image id="mobile-presentation-line" className="h-[130px] w-auto mr-48 md:hidden" src={MobilePresentationLine} alt="mobile-presentation-line" />

          <Image className="h-[180px] 2xl:h-[270px] w-auto hidden md:flex" src={PresentationLine} alt="presentation-line" />
          <div id="pc-line-orientation" className="w-[20%]" />

        </div>
      </div>
    </section>
  )
}
