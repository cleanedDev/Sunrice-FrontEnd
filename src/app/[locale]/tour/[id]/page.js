"use client"
import react from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { tourByID,tourByIDEn, allTours,allToursEn } from "@/api/admin/routes";



function Tour(){

    const params = useParams();
    const id = params.id;
    const locale = useLocale();

    const[dataTour, setDataTour] = useState({})
    const[dataTours, setDataTours] = useState({})



    useEffect(() => {

        if (!id) {
            console.error("ID no disponible");
            return; // Si no hay id, no hace la petición
        }

    
        const fetchTourData = async () => {
          try {
            const tourData = await tourByID(id);  // Asumiendo que tourByID es una función async
            setDataTour(tourData); 
          } catch (error) {
            console.error("Error fetching tour data:", error);
          }
        };

        const fetchTourDataEn = async () => {
            try {
              const tourData = await tourByIDEn(id);  // Asumiendo que tourByID es una función async
              setDataTour(tourData); 
            } catch (error) {
              console.error("Error fetching tour data:", error);
            }
          };


        const fetchAllTourData = async (id) => {
            try {
              const toursData = await allTours(id);  // Asumiendo que tourByID es una función async
              setDataTours(toursData); 
            } catch (error) {
              console.error("Error fetching tour data:", error);
            }
          };

          const fetchAllTourDataEn = async (id) => {
            try {
              const toursData = await allToursEn(id);  // Asumiendo que tourByID es una función async
              setDataTours(toursData); 
            } catch (error) {
              console.error("Error fetching tour data:", error);
            }
          };

        fetchTourData();

        if (locale === "es") {
            fetchTourData();
            fetchAllTourData(id);
        } else {
            fetchTourDataEn();
            fetchAllTourDataEn(id);
          
        }
          // Llamar la función asíncrona dentro de useEffect

        
      }, [id]); 
      

    return(
        <>
        <p className="mt-16">
         este es el ID del tour: {id}  el nombre del tour es: {dataTour.title}
         
       
        </p>
        
        {dataTours.length > 0 && dataTours.map((element) => (
            <p key={element._id}>{element.title} y su id es: {element._id}</p>
        ))}
       
        </>
    )
}


export default Tour;