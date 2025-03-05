import React from "react";
import Carrucel from "../Swiper/Carrucel";
import {useTranslations} from 'next-intl';


function Section1({ id }) {
const t = useTranslations('Section1');
    

    return (
        <>
            <section id={id} className=" lg:max-w-screen-xl mx-auto w-full min-h-screen h-110vh flex items-center mt-3 mb-2  " >
                <div className=" bg-sectionBG/60 w-full sm:w-11/12 h-full mx-auto flex flex-col shadow-sombra    rounded-2xl ">
                    <header className="mx-auto  text-center p-1 mt-4 ">
                        <h2 className="text-[2.5rem] font-bold text-blueText">{t('title')}</h2>
                        <p className="text-[1.75rem] font-normal text-blueSubtitles" >{t('text')}</p>
                    </header>
                   <Carrucel/>
                </div>
            </section>
        </>
    )
}

export default Section1;