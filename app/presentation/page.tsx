'use client'

import { Poppins } from 'next/font/google';
import { motion } from "framer-motion";
import React from 'react';
import Luna from './utilities/Luna.svg';
import Persona from './utilities/Persona.svg';
import PresentationLine from './utilities/pc-presentation-line.svg';
import MobilePresentationLine from './utilities/presentation-line-mobile.svg';
import './presentation.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const poppins = Poppins({
    weight: '300',
    subsets: ['latin']
})

export default function Presentation() {
    const [animationState, setAnimationState] = useState('animation-off');
    const [secondAnimationState, setSecondAnimationState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationState('animation-on');
        }, 700);
        setTimeout(() => {
            setSecondAnimationState(true);
        }, 2200);
    }, []);


    return (
        <div id="presentation" className={`h-[100vh] w-[100%] ${poppins.className}`}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars-container" className="w-[100vw] flex flex-col relative justify-end items-center">

                <div id="luna-svg-container" className="flex justify-center h-[16vh] absolute top-[-8px]">
                    <Image id="luna-svg" className="h-[100px] ml-12 " src={Luna} alt='luna-svg' />
                </div>

                <div className="flex justify-center items-center">
                    <Image id="persona-svg" className="z-[1] h-[19vh] mr-[220px]" src={Persona} alt='persona-svg' />
                </div>

                <div id={`${animationState}`} className="h-[0px] w-full flex flex-col justify-center items-center poppins">
                    <div id="stars-description" className="bg-[rgba(0,52,154,0.25)] h-full w-[70%] rounded-[25px] border-b-[1px] border-t-[1px] border-[#ffa500] hidden">
                        <div id={`stars-descript`} className={secondAnimationState ? 'relative h-full w-full flex flex-col items-center text-white' : 'hidden'}>
                            {secondAnimationState ?
                                <>
                                    <motion.div
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className={'w-[85%] mt-[2%] h-[20%] flex justify-start items-center'}>
                                        <h2 id='presentation-title' className={'text-[1.9rem] text-[#ffa500] border-b-[1px] border-[#ffa500] h-[60%]'}>About</h2>
                                    </motion.div>
                                    <motion.p
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        id='presentation-text' className={'w-[85%] mt-[1%] text-[1.25rem]'}>
                                        In pursuit of ways to improve the world and bring prosperity.
                                        I think that the only entity that persist over time is change, and that's pretty
                                        much the reason why I love doing what I do, because things can may never be perfects
                                        but they can always be improved
                                    </motion.p>
                                </>
                                : ''
                            }



                        </div>

                    </div>
                </div>

                <div id="svg-presentation-container" className="h-[27vh] w-full flex justify-center">
                    <Image id="pc-presentation-line" className="h-full" src={PresentationLine} alt='presentation-line' />
                    <Image id="mobile-presentation-line" className="hidden" src={MobilePresentationLine} alt='mobile-presentation-line' />
                    <div id="pc-line-orientation" className="w-[20%]"></div>
                </div>
            </div>
        </div >
    )
}
