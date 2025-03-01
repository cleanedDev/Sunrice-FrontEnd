"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CardTour from "../CardTours/CardTours";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carrucel(){
    return(
        <>
        <Swiper
                    modules={[Navigation, Pagination]}
                    // navigation
                    pagination={{
                        // el: ".swiper-pagination", // Asegurar que Swiper reconozca el div de paginación
                        clickable: true,
                      }}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        768: { // A partir de 'md' (tabletas)
                          slidesPerView: 2,
                        },
                        1024: { // A partir de 'lg' (pantallas grandes)
                          slidesPerView: 3,
                        }
                      }}
                   
                    className=" w-full sm:w-10/12 h-5/6 mt-5" aria-label="Carrusel de tours disponibles"
                    // RECORDATORIO: poner alt a cada imagen
                    >
                    <SwiperSlide className="">
                      <CardTour image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/manglares+y+dunas/md1.jpg'}
                      tour={"Manglares y dunas"}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="">
                      <CardTour image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/safari+marino/SF6.jpg'}
                      tour={"Experiencia Única en MagBay"}
                      /></SwiperSlide>
                    

                    <SwiperSlide className="">
                      <CardTour
                     image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/avistamiento+ballenas/whales1.jpg'}
                     tour={"Avistamiento de ballenas"}
                     />
                     </SwiperSlide>

                     
                    <SwiperSlide className="">
                      <CardTour image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/flora+y+fauna/FloraFauna1.jpg'}
                       tour={"Avistamiento de FLora y Fauna"}
                      />
                      </SwiperSlide>
                    
                    <SwiperSlide className="">
                      <CardTour image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/safari+marino/SF9.jpg'}
                      tour={"Safari al pacifico"}
                      /></SwiperSlide>
                    
                    
                    
                    </Swiper>

        
        
        </>
    )
}

export default Carrucel;