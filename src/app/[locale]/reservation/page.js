'use client'
import React , { useRef } from "react";
import FormReservationTour from "@/components/FormReservationTour/FormReservationTour";
import {useSearchParams } from "next/navigation";
import { useState , useEffect} from "react";

import { useLocale,useTranslations } from "next-intl";

import Swal from "sweetalert2";

import {reservationTour} from "../../../api/fetch/routes"

function Reservation(){

  const searchParams = useSearchParams();
  const locale = useLocale(); 
  const formRef = useRef();
  const tourName = searchParams.get("tourName");
  const t = useTranslations('tourReservation');
  const [hospedaje, setHospedaje] = useState(false);
  

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
                  // Mostrar la alerta de éxito y redirigir después de "OK"
                  Swal.fire({
                    title: newData?.idioma === "es" ? "Reserva enviada con éxito!" : "Reservation successfully sent!",
                    text: newData?.idioma === "es" ? "Enviamos los detalles de reservación a tu correo electrónico" : "We have sent the reservation details to your email",
                    icon: "success"
                  }).then(() => {
                      setHospedaje(false);
                      // reset();
                      formRef.current.resetForm();
                      window.location.href = `/${locale}#section1`;  // Redirección después de confirmar
                  });
  
              } else {
                  // Mostrar error si la reserva falla
                  Swal.fire({
                      title: "Error",
                      text: res.message,
                      icon: "error"
                  });
              }
  
          } else if (result.isDenied) {
              Swal.fire("Revisa el formulario", "", "info");
          }
          });
          
        }


    return(
        <>
        <main className="w-full h-[250vh] lg:h-[175vh] relative  flex flex-col items-center mx-auto lg:max-w-screen-xl rounded-2xl  ">
           
             <img src="/bgFomR.jpg" className="w-full h-full object-cover rounded-2xl "></img>
             <div className="absolute top-0 left-0 w-full h-full bg-[#12142ab4] bg-opacity-50 z-10 rounded-2xl "></div>

              <FormReservationTour onSubmit={onSubmit} t={t} tourName={tourName} hospedaje={hospedaje} setHospedaje={setHospedaje} ref={formRef}/>
        
        </main>
        </>
    )
}

export default Reservation;