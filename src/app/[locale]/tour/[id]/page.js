"use client"
import react from "react";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { tourByID,tourByIDEn, allTours,allToursEn } from "@/api/fetch/routes";
import GaleryTours from "@/components/GaleryTours/Galerytours";
import CarrucelToursImg from "@/components/Swiper/CarrucelToursImg";
import ContainerTourInfo from "@/components/containerTourInfo/ContainerTourInfo";
import CardSugeTours from "@/components/CardsSugeTours/CardSugeTours";



function Tour(){

    
    const params = useParams();
    const id = params.id;
    const locale = useLocale();

    const[dataTour, setDataTour] = useState({})
    const[idSelected, setIdSelected]=useState()
    const[dataTours, setDataTours] = useState([])
    const[open, setOpen] = useState(false)
    const specialIds = ["67aa734c536fdf4dbe900fa0", "67aa947a536fdf4dbe900fa3", "67aa9536536fdf4dbe900fa4"];


  console.log(dataTour)
      
    useEffect(() => {

    
        const fetchTourData = async () => {
          try {
            const tourData = await tourByID(id);  // Asumiendo que tourByID es una función async
            setDataTour(tourData); 
            setIdSelected(tourData._id);
            
           
            
          } catch (error) {
            console.error("Error fetching tour data:", error);
          }
        };

        const fetchTourDataEn = async () => {
            try {
              const tourData = await tourByIDEn(id);  // Asumiendo que tourByID es una función async
              setDataTour(tourData); 
              setIdSelected(tourData._id);
              
              
            } catch (error) {
              console.error("Error fetching tour data:", error);
            }
          };

        const fetchAllTourData = async (id) => {
          try {
              const toursData = await allTours(id);  // Asumiendo que allTours es una función async
      
              // Filtrar los tours según el ID especial
              const filteredTours = specialIds.includes(id) 
                  ? toursData.filter((tour) => specialIds.includes(tour._id)) // Si el id es especial, solo guarda los tours especiales
                  : toursData.filter((tour) => !specialIds.includes(tour._id)); // Si el id NO es especial, guarda los tours normales
      
              // Guardar los tours filtrados en localStorage
              
      
              // Establecer los tours filtrados en el state
              setDataTours(filteredTours); 
      
          } catch (error) {
              console.error("Error fetching tour data:", error);
          }
      };

          const fetchAllTourDataEn = async (id) => {
            try {
             
              const toursData = await allToursEn(id);  // Asumiendo que tourByID es una función async
              // console.log(toursData)
              const filteredTours = specialIds.includes(id) 
                  ? toursData.filter((tour) => specialIds.includes(tour._id)) // Si el id es especial, solo guarda los tours especiales
                  : toursData.filter((tour) => !specialIds.includes(tour._id)); // Si el id NO es especial, guarda los tours normales
      
              // Guardar los tours filtrados en localStorage
              
      
              // Establecer los tours filtrados en el state
              setDataTours(filteredTours); 
            } catch (error) {
              console.error("Error fetching tour data:", error);
            }
          };

        if (locale === "es") {
            fetchTourData();
            fetchAllTourData(id);
        } else {
            fetchTourDataEn();
            fetchAllTourDataEn(id);
          
        }
          // Llamar la función asíncrona dentro de useEffect

        
      }, [id]); 
      
      const handleTourClick = (selectedTour) => {

        setIdSelected(selectedTour._id);
        console.log(idSelected)

        // Hacer scroll al inicio de la página
         window.scrollTo({ top: 0, behavior: "smooth" });
        setDataTours((prevTours) => {
          // Filtrar el nuevo array sin el tour seleccionado
          const updatedTours = prevTours.filter((tour) => tour._id !== selectedTour._id);
      
          // Agregar el tour que estaba en dataTour de vuelta a la lista (si ya hay uno cargado)
          if (dataTour && Object.keys(dataTour).length > 0) {
            updatedTours.push(dataTour);
          }
   
          return updatedTours;
        });
      
        // Actualizar el tour principal
        setDataTour(selectedTour);
      };

    
      
    return(
        <>
         <main className="w-full min-h-screen relative mt-[6rem]  lg:max-w-screen-xl  mx-auto flex flex-col justify-around gap-10 text-white  ">
            {open && ( <CarrucelToursImg images={dataTour.images} open={open} setOpen={setOpen} />)}

            <h1 className=" w-auto lg:w-4/12 text-4xl font-bold text-blueText p-4 text-center  mx-auto ">{dataTour.title}</h1>
              {dataTour?.images?.length > 0 && (
                <GaleryTours  open={open} setOpen={setOpen} imagenes={dataTour.images}/>
              )}
           
            <ContainerTourInfo dataTour={dataTour} handleTourClick={handleTourClick}/>

          
            <section className="w-11/12 lg:w-9/12 max-sm:h-[80vh] h-[45vh] grid grid-cols-2 items-center rounded-2xl  gap-5 bg-gradient-to-br from-[#004AAD] via-[#63a4cd] to-[#158fe7]  mb-10  mx-auto max-sm:grid-cols-1 max-sm:w-full ">
              {Array.isArray(dataTours) && dataTours.map((tour) => (
                  
                  <CardSugeTours key={tour._id} tour={tour} dataTours={dataTours} handleTourClick={handleTourClick} />
                       
              ))}         
            </section>

         </main>
       
        </>
    )
}


export default Tour;