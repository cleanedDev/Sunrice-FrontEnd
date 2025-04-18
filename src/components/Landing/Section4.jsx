import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function Section4({id}){

    const t = useTranslations("Section4")
    const locale = useLocale();

    return(
        <>
        <section id={id} className=" lg:max-w-screen-xl mx-auto w-full min-h-screen h-screen  mt-10 max-sm:h-[150vh]">
                <div className=" bg-sectionBG/60 w-full sm:w-11/12 h-full mx-auto shadow-sombra rounded-2xl flex flex-col items-center justify-between ">
                    <header className="w-10/12 mx-auto flex flex-col justify-between items-center text-center mt-5  ">
                        <h2 className="text-[2.5rem] font-bold text-blueText">“{t('title')}"</h2>
                        <hr className="h-[2px] w-11/12 bg-blueText" />
                        <p className="text-[1.75rem] font-normal text-blueSubtitles">
                        “{t('text')}"
                        </p>
                    </header>

                    <div className=" flex-1  w-full h-3/6 flex flex-col items-center justify-around ">
                        <div className=" w-[95%] mx-auto h-4/6 grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-2   gap-4 ">

                            <div className=" h-6/6 rounded-tl-[40px] rounded-br-[40px] ">
                                <img src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Hotel+Prados/HotelPrado+(12).jpg" alt="Espacio agradable en MagBay Hotel Prados"
                                className="w-full h-full object-cover rounded-tl-[40px] rounded-br-[40px] rounded-[10px] transition-transform duration-300 hover:scale-[1.05]"
                                 />
                            </div>

                            <div className=" h-6/6 rounded-tl-[40px] rounded-br-[40px] ">
                                <img src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Hotel+Prados/HotelPrado+(28).jpg" alt="Instalaciones de hospedajes en MagBay hotel prados"
                                className="w-full h-full object-cover rounded-tl-[40px] rounded-br-[40px] rounded-[10px] transition-transform duration-300 hover:scale-[1.05]" />
                            </div>

                            <div className=" h-6/6 rounded-tl-[40px] rounded-br-[40px] ">
                                <img src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Hotel+Prados/HotelPrado+(15).jpg" alt="Hotel prados ubicado en MagBay"
                                className="w-full h-full object-cover rounded-tl-[40px] rounded-br-[40px] rounded-[10px] transition-transform duration-300 hover:scale-[1.05]" />
                            </div>

                            <div className=" h-6/6 rounded-tl-[40px] rounded-br-[40px] ">
                                <img src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Hotel+Prados/HotelPrado+(36).jpg" alt="Habitaciones de Hotel prados en MagBay"
                                className="w-full h-full object-cover rounded-tl-[40px] rounded-br-[40px] rounded-[10px] transition-transform duration-300 hover:scale-[1.05]" />
                            </div>
                            
                            
                        </div>
                        <a className="p-2  w-10/12 sm:w-4/12 rounded-2xl text-center font-bold text-xl text-white duration-200 delay-200 shadow-sombra hover:shadow-sombra2 bg-blueHover hover:bg-blueHover/70  "  href={`/${locale}/hotel`} >{t("buttonText")}</a>
                    </div>

                </div>
        </section>
        </>
    )
}

export default Section4;