'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoMdCloseCircleOutline } from "react-icons/io";


function CarrucelToursImg({images, open, setOpen}){
    return(
        <>
        <section className="w-full h-[90vh] fixed top-0 left-0 bg-gray-900 backdrop-blur-md bg-opacity-70 z-20 mt-[5rem] " aria-label="Tour image carousel">
                <button className=" fixed top-0 right-5 rounded-full z-20 p-2 ml-10 mt-10"  aria-label="Close carousel" onClick={()=> setOpen(!open)}><IoMdCloseCircleOutline className="w-8 h-8" /></button>
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
                                  <figure  className="lg:w-7/12 h-[90%] md:h-full mx-auto  md:w-11/12 flex items-center my-1">
                                  {/* <div  className="lg:w-7/12 h-[90%] md:h-[50%] mx-auto  md:w-11/12 border border-yellow-700"> */}
                                    <img src={image} alt={`Tour image ${index + 1}`}  className="lg:w-auto lg:h-full object-cover mx-auto my-auto rounded-2xl w-11/12 h-auto" loading="lazy" />
                                    <figcaption className="sr-only">
                                      {`Tour image ${index + 1} - available tour view`}
                                    </figcaption>
                                  </figure>
                                </SwiperSlide>
                              ))}
        
                    </Swiper>
        
        </section>
        </>
    )
}

export default CarrucelToursImg;