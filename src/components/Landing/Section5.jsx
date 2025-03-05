import React from "react";
import {useTranslations} from 'next-intl';

function Section5({id}){
    const t = useTranslations("Section5")
    return(
        <>
        <section id={id} className="lg:max-w-screen-xl mx-auto w-full min-h-[70vh] mt-10  ">
            <div className="bg-sectionBG/60 w-full sm:w-11/12 mx-auto shadow-sombra rounded-2xl  flex flex-col lg:flex-row items-center ">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 text-center lg:text-left mt-5 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-blueText ">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-blueSubtitles  mt-4">
                        {t('text')}
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center p-4">
                    <img src="/TransporteMB.png" alt="Transporte a MagBay" className="w-full max-w-[500px] h-auto object-cover rounded-lg" />
                </div>
            </div>
        </section>

        </>
    )
}

export default Section5;