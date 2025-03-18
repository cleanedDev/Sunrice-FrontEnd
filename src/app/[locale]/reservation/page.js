'use client'
import React from "react";
import {useSearchParams } from "next/navigation";
import { useState , useEffect} from "react";
import { useForm } from "react-hook-form"
import { useLocale,useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import {reservationTour} from "../../../api/fetch/routes"

function Reservation(){

  const searchParams = useSearchParams();
  const locale = useLocale(); 
  const tourName = searchParams.get("tourName");
  const today = new Date().toISOString().split("T")[0]; // Fecha de hoy en formato YYYY-MM-DD
  const { setValue } = useForm();
  const t = useTranslations('tourReservation');
  const [hospedaje, setHospedaje] = useState(false);
  
  const { register, handleSubmit, reset, watch, formState: { errors },} = useForm()
      
        const onSubmit = async (data) => {

          
          const newData = {
              tourElegido: data.tourElegido ,
              nombre: data.nombre ,
              idioma: locale ,
              cantidadPersonas: data.cantidadPersonas ,
              fechaInicio: data.fechaInicio ,
              fechaFin: data.fechaFin ,
              correo: data.email ,
              telefono: data.telefono ,
              extras: data.extras ,
              estado: "pendiente" ,
              contactPref: data.contactMethod ,
              hospedaje: {
                  fechaInicio: data.fechaInicioH ,
                  fechaFin: data.fechaFinH,
                  cantidadPersonasH: data.cantidadPersonasH
              }
          }

          Swal.fire({
            title: "¿Todo está correcto? Confirma los detalles antes de enviar",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Si, enviar.",
            denyButtonText: `Revisar formulario`,
          }).then(async (result) => {
            
            if (result.isConfirmed) {
             
              await reservationTour(newData);
              Swal.fire("Reserva enviada con exito!", "", "success"); 
              setHospedaje(false)
              reset()  
              window.location.href = "/";
            } else if (result.isDenied) {
              
              // Swal.fire("Excelente eleccion", "", "info");
            }
          });
          
        }

  const fechaInicio = watch("fechaInicio"); // Observar la fecha de inicio
  const fechaFin = watch("fechaFin");
  const fechaInicioH = watch("fechaInicioH");
  const fechaFinH = watch("fechaFinH");
  const cantidadPersonasH = watch("cantidadPersonasH");
  

  const handleToggleHospedaje = () => {
    setHospedaje((prev) => {
        if (prev) {
            // Si se desactiva, limpiar los valores
            setValue(fechaInicioH, "");
            setValue(fechaFinH, "");
            setValue(cantidadPersonasH, "");

            reset({
              fechaInicioH: "",
              fechaFinH: "",
              cantidadPersonasH: "",
          }, { keepValues: true });

            console.log("Campos de hospedaje reseteados");
        }
        return !prev; // Alternar el estado
    });
};

    return(
        <>
        <div className="w-full h-[250vh] lg:h-[175vh] relative  flex flex-col items-center mx-auto lg:max-w-screen-xl rounded-2xl  ">
           
             <img src="/bgFomR.jpg" className="w-full h-full object-cover rounded-2xl "></img>
             <div className="absolute top-0 left-0 w-full h-full bg-[#12142ab4] bg-opacity-50 z-10 rounded-2xl "></div>
            
        
           <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] lg:w-[60%] mt-[10rem] md:mt-[7rem] absolute flex flex-col gap-4 mx-auto bg-[#0a1047a2] rounded-2xl   z-20">
              <h1 className=" mx-auto text-white text-4xl font-semibold p-1 text-center">{t("title")}</h1>
             
             <input className="p-2 bg-white rounded-2xl w-[85%] lg:w-[60%] mx-auto text-center" defaultValue={tourName} readOnly 
             {...register("tourElegido",{ required: true})}/>
             {errors.tourElegido?.type === "required" && ( <p className="text-red-500" role="alert">{t("campo obligatorio")}</p>)}
              
              <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[85%] lg:w-[60%]">

                <div className="w-full lg:w-[50%]  flex flex-col gap-1 items-center">
                  <label className="text-white font-semibold" htmlFor="inicio" >{t("inicioTravesia")}</label>
                  <input id="inicio" type="date" className="p-1 w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" min={ today}
                  {...register("fechaInicio",{ required: true, min: today})}/> 
                  {errors.fechaInicio?.type === "required" && ( <p className="text-red-500" role="alert">{t("campo obligatorio")}</p>)}
                </div>

                <div className="w-full lg:w-[50%] gap-4] flex flex-col gap-1 items-center   ">
                  <label className="text-white font-semibold" htmlFor="fin">{t("finalTravesia")}</label>
                  <input id="fin" type="date" className="p-1  w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" min={fechaInicio || today}
                  {...register("fechaFin",{ required: true,  validate: value => (new Date(value) >= new Date(fechaInicio)) || t("fechaFinMsg")})}/> 
                  {errors.fechaFin && <p className="text-red-500 text-center">{errors.fechaFin.message}</p>}
                </div> 

              </div>

              <div className="w-[85%] lg:w-[60%] flex flex-col items-center mx-auto ">
                <label className="text-white font-semibold" htmlFor="personas" >{t("viajeros")}</label>
                <input id="personas" type="number" className="w-[50%] p-2 text-center rounded-2xl"
                {...register("cantidadPersonas",{ required: true, min: 1, max: 6})}/> 
                {errors.cantidadPersonas?.type === "required" && ( <p className="text-red-500" role="alert">{t("campo obligatorio")}</p>)}
              </div>

              <div className="w-[85%] h-auto lg:w-[60%] flex flex-col items-center mx-auto">
                {/* <label className="text-white mx-auto font-semibold" htmlFor="peticion">{t('extras')}</label> */}
        
                <label className="text-white mx-auto font-semibold" htmlFor="peticion">
                  {tourName.includes("Sport Fishing")
                    ? t('extrasPesca')
                    : t('extras')}
                </label>
                
                <textarea id="peticion" className="w-[90%] h-[9rem]   mx-auto resize-none rounded-xl text-center  placeholder:italic" placeholder={tourName.includes("Sport Fishing")? t('peticion2') : t('peticion') }
                {...register("extras",{ maxLength: 700})}/>
              </div>

              <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[85%] lg:w-[60%]">
                
                <div className=" w-full md:w-[70%] lg:w-[50%] flex flex-col mx-auto">
                  <input className="w-full  rounded-2xl p-2 text-center  placeholder:italic" placeholder={t('nombre')}
                  {...register("nombre",{required:true, maxLength:50})}/> 
                  {errors.nombre?.type === "required" && ( <p className="text-red-500 text-center" role="alert">{t("campo obligatorio")}</p>)}
                </div>
                  
                <div className=" w-full md:w-[70%] lg:w-[50%] flex flex-col mx-auto">
                  <input type="tel" className="w-full    rounded-2xl p-2 text-center  placeholder:italic" placeholder={t('celular')}  
                  {...register("telefono",{required:true, maxLength:10})}/> 
                  {errors.telefono?.type === "required" && ( <p className="text-red-500 text-center" role="alert">{t("campo obligatorio")}</p>)}
                </div>

              </div>
              
              <input type="email" className="p-2 bg-white rounded-2xl w-[85%] md:w-[60%]  lg:w-[60%] mx-auto text-center" placeholder={t('correoElectronico')} 
               {...register("email",{required:true })}/>
               {errors.nombre?.type === "required" && ( <p className="text-red-500 mx-auto" role="alert">{t('correoAlert')}</p>)}

              <div className="mt-6 flex flex-col items-center justify-center gap-2 ">
                    <p className="text-white font-semibold text-center">{t('agregarHotel')}</p>
                    <button type="button" className={`px-4 py-2 rounded-md text-white font-semibold transition-all ${hospedaje ? "bg-red-500" : "bg-blue-500"}`}
                      // onClick={() => setHospedaje(!hospedaje)}
                      onClick={handleToggleHospedaje}
                    >
                      {hospedaje ? t('buttonQuitar') :  t('buttonAgregar')}
                    </button>
              </div>

              {hospedaje && (
               <motion.div  className="w-[85%] lg:w-[60%] flex flex-col mx-auto"
               initial={{ opacity: 0, height: 0 }} 
               animate={{ opacity: 1, height: "auto" }} 
               exit={{ opacity: 0, height: 0 }} 
               transition={{ duration: 0.3 }} >

                  <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-full">
                    <div className="w-full lg:w-[50%]  flex flex-col gap-1 items-center">
                        <label className="text-white font-semibold" htmlFor="inicioH">{t('checkIn')}</label>
                        <input id="inicioH" type="date" className="p-1 w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" min={ today}
                        {...register("fechaInicioH",{ required: hospedaje, min: today})}/> 
                        {errors.fechaInicioH?.type === "required" && ( <p className="text-red-500" role="alert">{t("campo obligatorio")}</p>)}
                    </div>
                    <div className="w-full lg:w-[50%] gap-4] flex flex-col gap-1 items-center">
                        <label className="text-white font-semibold" htmlFor="fechafinH">{t('checkOut')}</label>
                        <input id="fechafinH" type="date" className="p-1  w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" min={ fechaInicioH || today} 
                        {...register("fechaFinH",{ required: hospedaje,  validate: value => (value > fechaInicioH) || "La fecha de fin debe ser posterior a la de inicio"})}/> 
                        {errors.fechaFinH && <p className="text-red-500 text-center">{errors.fechaFinH.message}</p>}
                    </div> 
                  </div>

                  <div className="w-full flex flex-col items-center mx-auto ">
                    <label className="text-white font-semibold" htmlFor="numberH">{t('huespedes')}</label>
                    <input id="numberH" type="number" className="w-[50%] p-2 text-center rounded-2xl"
                     {...register("cantidadPersonasH",{ required: hospedaje, min: 1})}/>
                     {errors.cantidadPersonasH?.type === "required" && ( <p className="text-red-500" role="alert">{t("campo obligatorio")}</p>)}
                  </div>

              </motion.div> 

            )};

              <h2 className="mx-auto text-white font-semibold text-center">{t('metodoContacto')}</h2>
              <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[85%] lg:w-[60%] ">

                <div className="w-full md:w-[70%] lg:w-[50%]  flex gap-1 items-center justify-center bg-white p-1 rounded-2xl mx-auto   ">
                  <input  type="radio" value="whatsapp" id="whatsapp"
                  {...register("contactMethod", { required: t('selecciona') })}/>
                  <label htmlFor="whatsapp">Whatsapp</label><br/>
                </div>

                <div className="w-full md:w-[70%] lg:w-[50%]  flex gap-1 items-center justify-center bg-white p-1 rounded-2xl mx-auto   ">
                  <input type="radio" value="email" id="email"
                  {...register("contactMethod", { required: t('selecciona') })}/>
                  <label htmlFor="email">{t('CorreoOption')}</label><br/>
                </div>
                              
              </div>
              {errors.contactMethod && <p className="text-red-500 mx-auto">{errors.contactMethod.message}</p>}

              <input type="submit" value={t("reservarAhora")} className="w-[30%] bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md transition-all mb-5 mx-auto"/>
           </form>

        </div>
        </>
    )
}

export default Reservation;