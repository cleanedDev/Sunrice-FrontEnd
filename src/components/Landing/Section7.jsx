import React from "react";
import CarrucelRese from "../Swiper/CarrucelRese";
import { useTranslations } from "next-intl";

function Section7({id}){
    const t = useTranslations('Section7');
   
    return(
        <>
        <section id={id} className=" lg:max-w-screen-xl mx-auto w-full min-h-[60vh] h-[75vh] max-sm:h-full  mt-10 flex flex-col justify-around " >
                    <header className="mx-auto  text-center p-1 mt-4 mb-5">
                        <h2 className="text-[2.5rem] font-bold text-blueText">{t('title')}</h2> 
                    </header>

                    <div className="flex-1  w-full flex justify-center  ">
                        <CarrucelRese/>
                    </div>
                    
        </section>
        </>
        
    )
}

export default Section7;