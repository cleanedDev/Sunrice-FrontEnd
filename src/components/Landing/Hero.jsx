import React from "react";
import Link from "next/link";

function Hero({ id }) {
    return (
        <>
            <section id={id} className=" flex  items-center w-full h-screen bg-hero-bg bg-cover bg-center relative  min-h-screen ">
                <div className=" w-7/12 h-auto mx-auto max-sm:w-11/12 ">
                    <img className="object-cover w-full " src="/LogoSunrise.png" alt="Logo de Sunrise Adventure en Magbay - Tours y Hospedaje" />
               </div>
              
            </section>
            <div className=" w-full ">
                <img className="w-full" src="/Vector.svg" alt="Logo de Sunrise Adventure en Magbay - Tours y Hospedaje" />
            </div>
        </>
    )
}

export default Hero;