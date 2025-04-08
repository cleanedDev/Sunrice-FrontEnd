'use client'
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaParking , FaTimes } from 'react-icons/fa';
import { useTranslations, useLocale } from "next-intl";
import { reservationHotel } from "@/api/fetch/routes";
import CarrucelToursImg from "@/components/Swiper/CarrucelToursImg";
import Galeryhotel from "@/components/Galeryhotel/Galeryhotel";
import Swal from "sweetalert2";
import { MdOutlineDining, MdTerrain, MdKitchen } from 'react-icons/md';
import {roomsEs, roomsEn, instalations} from "../../../../public/rooms/roomsInfo";

import CardRoom from "@/components/CardRoom/CardRoom";
import DetailRoom from "@/components/DetailRoom/DetailRoom";




function Hotel(){

  const t = useTranslations("hotel");
  const tf = useTranslations('tourReservation');
  const locale = useLocale(); 
  const today = new Date().toISOString().split("T")[0]; // Fecha de hoy en formato YYYY-MM-DD
  const[open, setOpen] = useState(false)

    const facilities = [
        { name: t('terraza'), icon: MdTerrain },
        { name: t('comedor'), icon: MdOutlineDining },
        { name: t('estacionamiento'), icon: FaParking },
        { name: t('cocina'), icon: MdKitchen }
      ];
      const [selectedRoom, setSelectedRoom] = useState(null);
      const [openForm, setOpenForm] = useState(false)
      
  const { register, handleSubmit, reset, watch, formState: { errors },} = useForm()
  const fechaInicio = watch("fechaInicio"); 

  const onSubmit = async (data) => {
   
    const newData = {
      ...data,
      idioma: locale
    }
   Swal.fire({
               title: newData?.idioma === "es"? "¿Todo está correcto? Revisa los detalles antes de enviar." : "Is everything correct? Review the details before submitting."  ,
               showDenyButton: true,
               showCancelButton: false,
               confirmButtonText: newData?.idioma === "es"? "Si, enviar." : "Yes, send." ,
               denyButtonText: newData?.idioma === "es"? `Revisar formulario` : "Verify information",
             }).then(async (result) => {
               
               if (result.isConfirmed) {
                
                 await reservationHotel(newData, locale);
                //  Swal.fire(newData?.idioma === "es"? ("Reserva enviada con exito!", "Enviamos los detalles de reservacion a tu correo electronico", "success") : ("Reservation successfully sent!", "We have sent the reservation details to your email", "success")); 
                Swal.fire({
                  title: newData?.idioma === "es" ? "Reserva enviada con éxito!" : "Reservation successfully sent!",
                  text: newData?.idioma === "es" ? "Enviamos los detalles de reservación a tu correo electrónico" : "We have sent the reservation details to your email",
                  icon: "success"
                });
                 reset()  
                 setOpenForm(false)
                
               } else if (result.isDenied) {
                 
                 // Swal.fire("Excelente eleccion", "", "info");
               }
             });
  }


    return(
        <>
           
    <main className="w-full min-h-screen relative mt-[5.5rem]  lg:max-w-screen-xl flex flex-col  mx-auto ">
         {open && ( <CarrucelToursImg images={instalations} open={open} setOpen={setOpen} />)}
            <header className="relative h-[70vh] overflow-hidden">
                <img 
                    src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Hotel+Prados/HotelPrado+(15).jpg"
                    alt="Hotel Exterior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2F4156]/90 flex items-end shadow-[0_-10px_15px_rgba(0,0,0,0.3)]">
                    <div className="container mx-auto px-4 pb-20 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hotel Prados</h1>
                    <p className="text-xl text-[#C8D9E6] max-w-2xl">{t('subtitle')}</p>
                    </div>
                </div>
            </header>


           <Galeryhotel instalations={instalations} open={open} setOpen={setOpen}/>
            
            <section className="py-20 bg-[#F5EFEB]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-hotel-darkBlue mb-12 text-center">{t('habitaciones')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(locale === "es" ? roomsEs : roomsEn).map((room) => (
                        <CardRoom key={room.id} room={room} setSelectedRoom={setSelectedRoom} />
                    ))}
                       
                    </div>
                </div>
            </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-hotel-darkBlue mb-12 text-center">{t('instalaciones')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-hotel-lightBlue rounded-full flex items-center justify-center mb-4">
                  <facility.icon className="w-8 h-8 text-hotel-darkBlue" />
                </div>
                <h3 className="text-lg font-semibold text-hotel-darkBlue text-center">{facility.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-hotel-darkBlue flex flex-col ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('estancia')}</h2>
          {!openForm &&(
            <button className="bg-white text-hotel-darkBlue px-8 py-3 rounded-lg font-semibold text-lg transition-transform hover:scale-105"
            onClick={() => setOpenForm(true)}
           >
             {t('buttonReservar')}
           </button>
          )}
          
        </div>
            
        {openForm && (
        <div className=" w-full pt-5   bg-opacity-50 mx-auto   ">
             

              <form onSubmit={handleSubmit(onSubmit)} className="bg-[#0a1047a2] mx-auto w-full lg:w-[70%] p-5  flex flex-col gap-4 relative rounded-2xl">
                <button onClick={() => setOpenForm(false)} className="absolute  top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
                  <FaTimes className="w-6 h-6" />
                </button>
                  <h1 className=" mx-auto text-white text-4xl font-semibold p-1 text-center">{t('titleForm')}</h1>
                
                  <div className=" mx-auto flex flex-col md:flex-row gap-4 w-[90%] lg:w-[70%] ">

                      <div className="w-full lg:w-[50%]  flex flex-col gap-1 items-center">
                        <label className="text-white font-semibold" htmlFor="inicio" >{tf("checkIn")}</label>
                        <input id="inicio" type="date" className="p-1 w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" min={ today}
                        {...register("fechaInicio",{ required: true, min: today})}
                        /> 
                        {/* {errors.fechaInicio?.type === "required" && ( <p className="text-red-500" role="alert">{t("campo obligatorio")}</p>)} */}
                      </div>

                      <div className="w-full lg:w-[50%] gap-4] flex flex-col gap-1 items-center   ">
                        <label className="text-white font-semibold" htmlFor="fin">{tf('checkOut')}</label>
                        <input id="fin" type="date" className="p-1  w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" min={fechaInicio || today}
                        {...register("fechaFin",{ required: true,  validate: value => (new Date(value) > new Date(fechaInicio)) || tf("fechaFinMsg")})}
                        /> 
                        {errors.fechaFin && <p className="text-red-500 text-center">{errors.fechaFin.message}</p>}
                      </div> 

                  </div>

                  <div className="w-[90%] lg:w-[70%] flex flex-col items-center mx-auto ">
                    <label className="text-white font-semibold" htmlFor="personas" >{tf('huespedes')}</label>
                    <input id="personas" type="number" className="w-[50%] p-2 text-center rounded-2xl"
                    {...register("cantidadPersonas",{ required: true, min: 1, max: 6})}/> 
                    {errors.cantidadPersonas?.type === "required" && ( <p className="text-red-500" role="alert">{tf("campo obligatorio")}</p>)}
                  </div>

                  <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[90%] lg:w-[70%]">
                
                    <div className=" w-full md:w-[70%] lg:w-[50%] flex flex-col mx-auto">
                      <input className="w-full  rounded-2xl p-2 text-center  placeholder:italic" placeholder={tf('nombre')}
                      {...register("nombre",{required:true, maxLength:50})}/> 
                      {errors.nombre?.type === "required" && ( <p className="text-red-500 text-center" role="alert">{tf("campo obligatorio")}</p>)}
                    </div>
                      
                    <div className=" w-full md:w-[70%] lg:w-[50%] flex flex-col mx-auto">
                      <input type="tel" className="w-full    rounded-2xl p-2 text-center  placeholder:italic" placeholder={tf('celular')}  
                      {...register("telefono",{required:true, maxLength:10})}/> 
                      {errors.telefono?.type === "required" && ( <p className="text-red-500 text-center" role="alert">{tf("campo obligatorio")}</p>)}
                    </div>

                  </div>

                  <input type="email" className="p-2 bg-white rounded-2xl w-[90%] md:w-[60%]  lg:w-[70%] mx-auto text-center" placeholder={tf('correoElectronico')} 
                    {...register("correo",{required:true })}/>
                    {errors.correo?.type === "required" && ( <p className="text-red-500 mx-auto" role="alert">{tf('correoAlert')}</p>)}

                    <h2 className="mx-auto text-white font-semibold text-center">{tf('metodoContacto')}</h2>
                    <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[85%] lg:w-[60%] ">

                        <div className="w-full md:w-[70%] lg:w-[50%]  flex gap-1 items-center justify-center bg-white p-1 rounded-2xl mx-auto   ">
                          <input  type="radio" value="whatsapp" id="whatsapp"
                          {...register("contactPref", { required: tf('selecciona') })}/>
                          <label htmlFor="whatsapp">Whatsapp</label><br/>
                        </div>

                        <div className="w-full md:w-[70%] lg:w-[50%]  flex gap-1 items-center justify-center bg-white p-1 rounded-2xl mx-auto   ">
                          <input type="radio" value="correo electronico" id="email"
                          {...register("contactPref", { required: tf('selecciona') })}/>
                          <label htmlFor="email">{tf('CorreoOption')}</label><br/>
                        </div>
                                    
                    </div>
                    {errors.contactPref && <p className="text-red-500 mx-auto">{errors.contactPref.message}</p>}

                <input type="submit" value={tf("reservarAhora")} className="w-[30%] bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md transition-all mb-5 mx-auto"/>
              </form>          
        </div>
  
       ) } 
      
      
      </section>


      {selectedRoom && (
        <DetailRoom selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom}/>
      )}


      
      


    </main>
        </>
    )
   
}

export default Hotel;