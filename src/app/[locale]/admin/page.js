"use client"
import React from "react";
import { useEffect, useState } from "react";
import { useLocale} from 'next-intl';
import Swal from "sweetalert2";
import { verifyCredentials } from "@/api/fetch/routes";
import { toursReservation, hotelReservation } from "@/api/fetch/routes";
import FiltersReserv from "@/components/filtersReserv/FiltersReserv";


function Admin(){

  const locale = useLocale(); 
  const [tourData, setTourData] = useState([])
  const [hospedajeData, setHospedajeData] = useState([])
  const [allreservations, setAllReservations]= useState([])

      useEffect(() => {

        const token = localStorage.getItem("jwtToken");

        const verifyToken = async () => {
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

        
        verifyToken();
        

       

      }, []);

      useEffect(() => {
        const fetchData = async () => {
          const toursResponse = await toursReservation();
          const hospedajeResponse = await hotelReservation();
      
          // Actualizar los estados de los datos de tours y hospedaje
          setTourData(toursResponse);
          setHospedajeData(hospedajeResponse);
      
          // Combina los datos de tours y hospedaje
          const allReservations = [
            ...toursResponse,
            ...hospedajeResponse
          ];
      
          // Actualiza el estado de allReservations solo después de tener los datos combinados
          setAllReservations(allReservations);
        };
      
        // Llama a la función para obtener los datos
        fetchData();
      }, []);

    return(
    <>
    <main className="min-h-screen mt-[6rem] bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reservation Management</h1>
        <FiltersReserv allreservations={allreservations}/>
    </main>
    </>)
}

export default Admin;