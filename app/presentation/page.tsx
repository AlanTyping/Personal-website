"use client"

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import React from "react";
import Luna from "./utilities/Luna.svg";
import Persona from "./utilities/Persona.svg";
import PresentationLine from "./utilities/pc-presentation-line.svg";
import MobilePresentationLine from "./utilities/presentation-line-mobile.svg";
import "./presentation.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"]
})

export default function Presentation() {
  const [animationState, setAnimationState] = useState(false);
  const [secondAnimationState, setSecondAnimationState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationState(true);
    }, 900);
    setTimeout(() => {
      setSecondAnimationState(true);
    }, 1800);
  }, []);

  const container = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 500
    }
  }


  return (
    <div id="presentation" className={`h-auto w-[100%] ${poppins.className}`}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="w-[100vw] h-[650px] flex flex-col relative justify-end items-center">

        <div id="luna-svg-container" className="flex h-[160px] absolute top-[-8px]">
          <Image id="luna-svg" className="h-[100px] w-auto ml-10" src={Luna} alt="luna-svg" />
        </div>

        <div className="flex justify-center items-center">
          <Image id="persona-svg" className="z-[1] h-[130px] w-auto mr-[210px]" src={Persona} alt="persona-svg" />
        </div>

        <motion.div
          initial="hidden"
          transition={{ duration: 1 }}
          animate={animationState ? "visible" : "hidden"}
          exit={{ opacity: 0 }}
          variants={container}
          id={`${animationState}`}

          className="w-full h-[400px] flex flex-col items-center">

          <div className="bg-[rgba(0,52,154,0.25)] h-full w-[85%] rounded-[25px] border-b-[1px] border-t-[1px] border-[#ffa500]">

            <div className={secondAnimationState ? "relative h-full w-full flex flex-col items-center text-white" : "hidden"}>
              {secondAnimationState &&
                <>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={"w-[85%] mt-3 h-[75px] flex justify-start items-center"}>
                    <h2 className={"text-[1.9rem] text-[#ffa500] border-b-[1px] border-[#ffa500] h-[60%]"}>About</h2>
                  </motion.div>

                  <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    id="presentation-text" className={"w-[80%] mt-1 text-[1.05rem]"}>
                    In pursuit of ways to improve the world and bring prosperity.
                    I think that the only entity that persist over time is change, and that&apos;s pretty
                    much the reason why I love doing what I do, because things can may never be perfects
                    but they can always be improved
                  </motion.p>
                </>
              }


            </div>

          </div>
        </motion.div>

        <div id="svg-presentation-container" className="w-full flex justify-center">

          <Image id="mobile-presentation-line" className="h-[130px] w-auto mr-48 sm:hidden" src={MobilePresentationLine} alt="mobile-presentation-line" />

          <Image id="pc-presentation-line" className="h-full w-auto" src={PresentationLine} alt="presentation-line" />
          <div id="pc-line-orientation" className="w-[20%]" />

        </div>
      </div>
    </div >
  )
}
