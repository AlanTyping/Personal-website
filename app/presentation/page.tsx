'use client'

import React from 'react';
import Luna from './utilities/Luna.svg';
import Persona from './utilities/Persona.svg';
import PresentationLine from './utilities/pc-presentation-line.svg';
import MobilePresentationLine from './utilities/presentation-line-mobile.svg';
import './presentation.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Presentation() {

    const [animationState, setAnimationState] = useState('animation-off')

    useEffect(() => {
        setTimeout(() => {
        setAnimationState('animation-on');
    }, 1100);
    }, []);
    

    return (
        <div id="presentation" className="h-[100vh] w-[100%]">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars-container" className="w-[100vw] flex flex-col relative justify-end items-center">

                <div id="luna-svg-container" className="flex justify-center h-[16vh] absolute top-[-8px]">
                    <Image id="luna-svg" className="h-[100px]" src={Luna} alt='luna-svg' />
                </div>

                <div className="flex justify-center items-center">
                    <Image id="persona-svg" className="z-[1] h-[125px] mr-[220px]" src={Persona} alt='persona-svg' />
                </div>

                <div id={`${animationState}`} className="h-[0px] w-full flex flex-col justify-center items-center">
                    <div id="stars-description" className="bg-[#00349a78] h-full w-[70%] rounded-[25px] border-[1px] border-[#ffa500] hidden">
                        <h1>Holaassdfksjdfkjsdfkjsdfkjskdfda</h1>
                    </div>
                </div>

                <div id="svg-presentation-container" className="h-[25vh] w-full flex justify-center">
                    <Image id="pc-presentation-line" className="h-full" src={PresentationLine} alt='presentation-line' />
                    <Image id="mobile-presentation-line" className="hidden" src={MobilePresentationLine} alt='mobile-presentation-line' />
                    <div id="pc-line-orientation" className="w-[20%]"></div>
                </div>
            </div>
        </div>
    )
}
