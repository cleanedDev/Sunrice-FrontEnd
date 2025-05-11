"use client"
import React from "react";
import { useEffect, useState } from "react";
import { useLocale} from 'next-intl';
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { verifyCredentials } from "@/api/fetch/routes";
import { toursReservation, hotelReservation, deleteReservationTour, deleteReservationHotel, updateReservHotel, updateReservTour } from "@/api/fetch/routes";

import FiltersReserv from "@/components/filtersReserv/FiltersReserv";
import Calculadora from "@/components/Calculadora/Calculadora";


function Admin(){

  const locale = useLocale(); 
  const router = useRouter();
  const [allreservations, setAllReservations]= useState([])
  const[openDetail, setOpenDetail]= useState(false)
  const[openCalc, setOpenCalc] = useState(false)

  const [token, setToken] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("jwtToken"); // Se ejecuta solo en el cliente
    }
    return null;
  });
  

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
           
            const wasDeleted = await deleteReservationTour(id, token);
            if (wasDeleted) {
              const updatedData = allreservations.filter(reservation => reservation._id !== id);
              setAllReservations(updatedData);  
              setOpenDetail(false);
            }
        } else {
            
            const wasDeleted = await deleteReservationHotel(id, token);
              if (wasDeleted) {
                const updatedData = allreservations.filter(reservation => reservation._id !== id);
                setAllReservations(updatedData);  
                setOpenDetail(false);
              }
        }
      }

      const handleUpdate = async (id, reservationType, token, data) =>{
        

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

      const handleLogout = () => {
        // Limpia tokens, sesión, etc.
        localStorage.removeItem("jwtToken");
        // Redirige
        router.push(`/${locale}`);
      };

    return(
    <>
    <main className="min-h-screen mt-[6rem] bg-gray-300 p-4 sm:p-8 max-sm:w-full">

      {openCalc && 

        <div className=" fixed z-10 inset-0 flex items-center justify-center mt-10  mx-auto w-[90%] h-[70%] p-4 bg-slate-500">
          <Calculadora openCalc={openCalc} setOpenCalc={setOpenCalc}/>
        </div>
      }

      <div className=" flex flex-col my-2 md:flex-row justify-between items-center border border-black ">
        <h1 className="text-3xl font-bold text-gray-900 ">Reservaciones</h1>
        <button onClick={()=>{setOpenCalc(!openCalc)}} className="px-3 py-1 bg-blue-500 text-white rounded my-1">Calculadora</button>
        <button  onClick={handleLogout} className="px-3 py-1 bg-blue-500 text-white rounded my-1">
        🔓Log Out
        </button>
      </div>
        
        <FiltersReserv allreservations={allreservations} handlerDelete={handlerDelete} handleUpdate={handleUpdate} openDetail={openDetail} setOpenDetail={setOpenDetail} fetchData={fetchData}/>
        
    </main>
    </>
    )
}

export default Admin;