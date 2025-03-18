import React from "react";
import CardAboutUs from "../CardAboutUs/CardAboutUs";
import { useTranslations } from "next-intl";

function Section3({id}){
   const t = useTranslations('Section3');
    return(
        <>
        <section id={id} className=" lg:max-w-screen-xl mx-auto w-full min-h-screen h-screen flex items-center   max-md:h-[150vh] max-sm:h-[240vh]" >
                <div className=" bg-sectionBG w-full h-full mx-auto shadow-sombra rounded-2xl sm:w-11/12  ">

                    <header className="w-full mx-auto text-center p-1 mt-4  ">
                        <h2 className="text-[2.5rem] font-bold text-blueText">{t('title')}</h2>
                    </header>

                    <div className="w-full h-[70%] max-md:h-[85%]  mt-5 grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">

                        <CardAboutUs subtitle={t('cards.turismoTitle')} text={t('cards.turismoText')} image={"/certificado 1.png"} />
                        <CardAboutUs subtitle={t('cards.guiasTitle')} text={t('cards.guiasText')} image={"/brujula 1.png"}/>
                        <div className="max-md:col-span-2  w-full h-full flex flex-col">
                            <CardAboutUs 
                            subtitle={t('cards.inclusionTitle')} 
                            text={t('cards.inclusionText')} 
                            image="/colaboracion 1.png"
                            // className="w-full "  // Ajusta ancho si es necesario
                            />
                        </div>


                    </div>
                    
                </div>
               
            </section>
        </>
    )
}

export default Section3;