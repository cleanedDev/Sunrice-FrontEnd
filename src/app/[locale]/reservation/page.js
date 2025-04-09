'use client'
import React , { useRef, useEffect } from "react";
import FormReservationTour from "@/components/FormReservationTour/FormReservationTour";
import {useSearchParams } from "next/navigation";


import { useLocale,useTranslations } from "next-intl";

import Swal from "sweetalert2";

import {reservationTour} from "../../../api/fetch/routes"

function Reservation(){

  const searchParams = useSearchParams();
  const locale = useLocale(); 
  const formRef = useRef();
  const tourName = searchParams.get("tourName");
  const t = useTranslations('tourReservation');
  
  

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
            title: newData?.idioma === "es"? "¿Todo está correcto? Revisa los detalles antes de enviar." : "Is everything correct? Review the details before submitting.",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText:  newData?.idioma === "es"? "Si, enviar." : "Yes, send." ,
            denyButtonText: newData?.idioma === "es"? `Revisar formulario` : "Verify information",
          }).then(async (result) => {
            
            if (result.isConfirmed) {
            
              const res = await reservationTour(newData, locale);
  
              if (res.success) {
                
                  Swal.fire({
                    title: newData?.idioma === "es" ? "Reserva enviada con éxito!" : "Reservation successfully sent!",
                    text: newData?.idioma === "es" ? "Enviamos los detalles de reservación a tu correo electrónico" : "We have sent the reservation details to your email",
                    icon: "success"
                  }).then(() => {
                    
                      formRef.current.resetForm();
                      window.location.href = `/${locale}#section1`;  // Redirección después de confirmar
                  });
  
              } else {
                 
                  Swal.fire({
                      title: "Error",
                      text: res.msg,
                      icon: "error"
                  });
              }
  
          } else if (result.isDenied) {
              Swal.fire("Revisa el formulario", "", "info");
          }
          });
          
        }

        useEffect(() => {
          Swal.fire({
            title: locale === "es" ? "¡Hola y bienvenido!" : "Hello and welcome!",
            text: locale === "es"
              ? "Nos encantaría que disfrutes de tu tour, pero recuerda que algunas actividades pueden depender de las condiciones del clima. Te sugerimos echar un vistazo al pronóstico del tiempo para el día que deseas reservar, ¡para que todo salga perfecto!"
              : "We'd love for you to enjoy your tour, but please remember that some activities may depend on weather conditions. We recommend checking the weather forecast for the day you'd like to book, to make sure everything goes smoothly!",
            icon: "info",
            confirmButtonText: locale === "es" ? "¡Gracias por la recomendación!" : "Thanks for the recommendation!",
            showCancelButton: true,
            cancelButtonText: locale === "es" ? "Ver el clima" : "View weather",
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
              // Solo abrir si se presionó el botón "Ver el clima"
              window.open("https://www.windy.com/24.790/-112.108?24.485,-111.807,10,m:emkac2r", "_blank");
            }
          });
        }, []);
        


    return(
        <>
        <main className="w-full h-[250vh] lg:h-[175vh] relative  flex flex-col items-center mx-auto lg:max-w-screen-xl rounded-2xl  ">
           
             <img src="/bgFomR.jpg" className="w-full h-full object-cover rounded-2xl "></img>
             <div className="absolute top-0 left-0 w-full h-full bg-[#12142ab4] bg-opacity-50 z-10 rounded-2xl "></div>

              <FormReservationTour onSubmit={onSubmit} t={t} tourName={tourName}  ref={formRef}/>
        
        </main>
        </>
    )
}

export default Reservation;