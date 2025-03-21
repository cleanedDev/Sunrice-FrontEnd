"use client";
import React from "react";
import {useTranslations, useLocale} from 'next-intl';
import { useForm } from "react-hook-form"
import {enviarFormularioContact} from  "../../../api/fetch/routes"

function Contact(){

    const t = useTranslations('formContact');
    const locale = useLocale(); 

const { register, handleSubmit, reset, watch, formState: { errors },} = useForm()
    
      const onSubmit = async  (data) => {
        reset()
        await enviarFormularioContact(data, locale)
      }

    
    return(
        <>
    
        <div className="w-full h-[120vh] lg:h-screen  mt-[6rem] flex items-center lg:max-w-screen-xl  mx-auto">
            <div className="w-6/12 max-md:w-10/12 max-sm:w-11/12 h-[80%] relative flex flex-col items-center mx-auto">

                <img src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/avistamiento+ballenas/whales2.jpg"
                className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-[#141a4fa2] bg-opacity-50 z-10 rounded-2xl"></div>

                <div className="absolute z-20 w-10/12 max-sm:w-full p-6 flex flex-col items-center ">
                    <h2 className="text-[2rem] max-sm:text-[1.5rem] font-bold text-white text-center">
                        {t("title")}
                    </h2>
                    <p className="text-[1.10rem] max-sm:text-[1rem] font-normal text-white text-center">
                        {t("text")}
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg flex flex-col mt-4 gap-3" >
                        
                        <div className="w-full flex max-sm:flex-col gap-3">
                            <div className="w-full ">
                                <input className="w-full bg-white p-4 rounded-md" placeholder={t("inputs.nombre")}
                                {...register("nombre",{ required: true, maxLength: 30 })}
                                />
                                {errors.nombre?.type === "required" && ( <p className="text-red-500" role="alert">{t("alert")}</p>)}
                            </div>

                            <div className="w-full ">
                                <input type="tel" className="w-full bg-white p-4 rounded-md" placeholder={t("inputs.celular")} 
                                {...register("celular",{ required: true, maxLength: 10 })}
                                />
                                {errors.celular?.type === "required" && ( <p className="text-red-500" role="alert">{t("alert")} </p>)}
                            </div>
                        </div>

                        <div>
                            <input type="email" className="w-full bg-white p-4 rounded-md" placeholder={t("inputs.correo")}
                            {...register("email", { required: true})}
                            />
                            {errors.email?.type === "required" && ( <p className="text-red-500" role="alert">{t("alert")}</p>)}
                         </div>

                         <div>
                            <textarea className="w-full bg-white p-4 rounded-md h-32 resize-none" placeholder={t("inputs.mensaje")} {...register("message",{ required: true, maxLength: 1000 })}></textarea>
                            {errors.message?.type === "required" && ( <p className="text-red-500" role="alert">{t("alert")}</p>)}
                        </div>

                        <input type="submit" value={t("valueButton")} className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md transition-all"/>
                
                    </form>
                </div>
            </div>
        </div>
        </>
         )
}

export default Contact;