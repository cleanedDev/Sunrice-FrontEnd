"use client";
import React from "react";
import {useTranslations} from 'next-intl';




function Politicas(){

    const t = useTranslations('politicas');
   
   

    
    return(
        <>
        <section className=" my-[8rem] w-full md:w-[60%]  text-justify mx-auto  gap-2 flex flex-col justify-around p-2">
            <h1 className="text-[2.5rem] font-bold text-blueText text-center">Lineamientos para Reservaciones</h1>
            <ul className="flex flex-col gap-9">
                <li className="flex flex-col gap-2  ">
                    <h2 className="text-[1.75rem] font-medium text-blueSubtitles text-center lg:text-justify">{t("titleP1")}</h2>
                    <p className="text-blueSubtitles text-lg ">
                    {t("descripP1")}
                    </p>
                </li>

                <li className="flex flex-col gap-2  ">
                    <h2 className="text-[1.75rem] font-medium text-blueSubtitles text-center lg:text-justify">{t("titleP2")}</h2>
                    <p className="text-blueSubtitles text-lg">
                    {t("descripP2")}
.
                    </p>
                </li>

                <li className="flex flex-col gap-2  ">
                    <h2 className="text-[1.75rem] font-medium text-blueSubtitles text-center lg:text-justify">{t("titleP3")}</h2>
                    <p className="text-blueSubtitles text-lg">
                    {t("descripP3")}
                    </p>
                </li>

                <li className="flex flex-col gap-2  ">
                    <h2 className="text-[1.75rem] font-medium text-blueSubtitles text-center lg:text-justify">{t("titleP4")}</h2>
                    <p className="text-blueSubtitles text-lg">
                    {t("descripP4")}
                    </p>
                </li>
            </ul>
        </section>
        </>
    )
}


export default Politicas;