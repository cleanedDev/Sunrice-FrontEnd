import React from "react";
import Swiper from "swiper";
import Carrucel from "../Swiper/Carrucel";


function Section1({ id }) {

    

    return (
        <>
            <section id={id} className=" lg:max-w-screen-xl mx-auto w-full min-h-screen h-screen flex items-center  " style={{ height: '110vh' }} >
                <div className=" bg-sectionBG/60 w-full sm:w-11/12 h-full mx-auto flex flex-col    rounded-2xl ">
                    <div className="mx-auto  text-center p-1 mt-4">
                        <h2 className="text-[2.5rem] font-bold text-blueText">Explora Bahía Magdalena: Tours Inolvidables</h2>
                        <h3 className="text-[1.75rem] font-normal text-blueSubtitles" >"Navega entre manglares, dunas y avista fauna espectacular."</h3>
                    </div>
                   <Carrucel/>
                </div>
            </section>
        </>
    )
}

export default Section1;