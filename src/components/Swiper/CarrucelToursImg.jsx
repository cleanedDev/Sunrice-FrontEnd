'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


function CarrucelToursImg({images, open, setOpen}){
    return(
        <>
        <div className="w-full h-[90vh] fixed top-0 left-0 bg-gray-900 backdrop-blur-md bg-opacity-70 z-10 mt-[5rem] ">
                <button className="border fixed top-0 right-5 rounded-full z-20 p-2 ml-10 mt-10" onClick={()=> setOpen(!open)}>X</button>
                    <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                              clickable: true, // Hace que los puntos de paginación sean clickeables
                            }}
                            pagination={{
                                // el: ".swiper-pagination", // Asegurar que Swiper reconozca el div de paginación
                                clickable: true,
                              }}
                            slidesPerView={1}
                            
                           
                            className=" w-full h-[95%]  mx-auto flex" aria-label="Carrusel de tours disponibles"
                            // RECORDATORIO: poner alt a cada imagen
                            >
                              {images.map((image,index) => (
        
                                <SwiperSlide key={index}  className="">
                                  <div  className="lg:w-7/12 h-[90%] md:h-full mx-auto  md:w-11/12 flex items-center">
                                  {/* <div  className="lg:w-7/12 h-[90%] md:h-[50%] mx-auto  md:w-11/12 border border-yellow-700"> */}
                                    <img src={image} alt={`Tour Image `} className="lg:w-auto lg:h-full object-cover mx-auto my-auto rounded-2xl w-11/12 h-auto" />
                                  </div>
                                </SwiperSlide>
                              ))}
        
                    </Swiper>
        
        </div>
        </>
    )
}

export default CarrucelToursImg;