"use client"
import React from "react";
import { useEffect, useState } from "react";
import { useLocale} from 'next-intl';
import Swal from "sweetalert2";
import { verifyCredentials } from "@/api/fetch/routes";
import { toursReservation, hotelReservation, deleteReservationTour, deleteReservationHotel, updateReservHotel, updateReservTour } from "@/api/fetch/routes";

import FiltersReserv from "@/components/filtersReserv/FiltersReserv";


function Admin(){

  const locale = useLocale(); 
  const [allreservations, setAllReservations]= useState([])
  const[openDetail, setOpenDetail]= useState(false)

  const token = localStorage.getItem("jwtToken");

  const verifyToken = async (token) => {
    if (token) {
        const response = await verifyCredentials(token, locale);  // Llamada asíncrona
     
    } else {
      Swal.fire({
        title: "Oops!",
        text: "No has iniciado sesion",
        icon: "error",
      }).then(() => {
        // Redirige al hacer clic en "OK"
        window.location.href =  window.location.href = `/${locale}/`;  
      });
     
    }
  };

  const fetchData = async () => {
    const toursResponse = await toursReservation();
    const hospedajeResponse = await hotelReservation();

   
    const allReservations = [
      ...toursResponse,
      ...hospedajeResponse
    ];

    // Actualiza el estado de allReservations solo después de tener los datos combinados
    setAllReservations(allReservations);
  };

  

    
      useEffect(() => {
       
  
        verifyToken(token); 
        fetchData();

      }, []);

      const handlerDelete = async (id, reservationType,  token,)=>{
        
        if (reservationType === 'tour') {
          await deleteReservationTour(id, token)
            const updatedData = allreservations.filter(reservation => reservation._id !== id);
            setAllReservations(updatedData);  
            setOpenDetail(false)
        } else {
          await deleteReservationHotel(id, token)
            const updatedData = allreservations.filter(reservation => reservation._id !== id);
            setAllReservations(updatedData);  
            setOpenDetail(false)
        }
      }

      const handleUpdate = async (id, reservationType, token, data) =>{
        console.log(data)

        if (reservationType === 'hotel') {

          const newData={

            fechaInicio: data.fechaInicio,
                fechaFin: data.fechaFin,
                nombre: data.nombre,
                correo: data.email,
                cantidadPersonas: data.cantidadPersonas,
                telefono: data.telefono,
                contactPref: data.contactMethod
          }
          await updateReservHotel(id, token, newData)
          await fetchData()
            
        } else {

          const newData={

                fechaInicio: data.fechaInicio,
                fechaFin: data.fechaFin,
                tourElegido: data.tourElegido ,
                nombre: data.nombre,
                correo: data.email,
                cantidadPersonas: data.cantidadPersonas,
                telefono: data.telefono,
                extras: data.extras,
                hospedaje:{
                  fechaInicio: data.fechaInicioH,
                  fechaFin: data.fechaFinH,
                  cantidadPersonasH: data.cantidadPersonasH
                },
                contactPref: data.contactMethod
          }

          await updateReservTour(id, token, newData)
          await fetchData()
           
        }

      }

    return(
    <>
    <main className="min-h-screen mt-[6rem] bg-gray-300 p-4 sm:p-8 max-sm:w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reservation Management</h1>
        <FiltersReserv allreservations={allreservations} handlerDelete={handlerDelete} handleUpdate={handleUpdate} openDetail={openDetail} setOpenDetail={setOpenDetail}/>
    </main>
    </>)
}

export default Admin;