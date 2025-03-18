"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {useTranslations} from 'next-intl';
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import CardTour from "../CardTours/CardTours";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carrucel(){
  const t = useTranslations('Section1.carrucel');

  const router = useRouter();
  const locale = useLocale(); //saber idioma actual de next-intl

  const handleClick = (id) => {  //handler para redirigir a tour detallado
    // 
    router.push(`${locale}/tour/${id}`);
   
  };


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
                      tour={t('Manglares y dunas')}
                      handleClick={() => handleClick(process.env.NEXT_PUBLIC_ID_TOUR1)}
                      />
                    </SwiperSlide>

                    <SwiperSlide className="">
                      <CardTour image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/safari+marino/SF6.jpg'}
                      tour={t('Experiencia Única en MagBay')}
                      handleClick={() => handleClick(process.env.NEXT_PUBLIC_ID_TOUR2)}
                      /></SwiperSlide>
                    

                    <SwiperSlide className="">
                      <CardTour
                     image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/avistamiento+ballenas/whales1.jpg'}
                     tour={t('Avistamiento de ballenas')}
                     handleClick={() => handleClick(process.env.NEXT_PUBLIC_ID_TOUR3)}
                     />
                     </SwiperSlide>

                     
                    <SwiperSlide className="">
                      <CardTour image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/flora+y+fauna/FloraFauna9.jpg'}
                       tour={t('Avistamiento de FLora y Fauna')}
                       handleClick={() => handleClick(process.env.NEXT_PUBLIC_ID_TOUR4)}
                      />
                      </SwiperSlide>
                    
                    <SwiperSlide className="">
                      <CardTour image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/safari+marino/SF9.jpg'}
                      tour={t('Safari al pacifico')}
                      handleClick={() => handleClick(process.env.NEXT_PUBLIC_ID_TOUR5)}
                      /></SwiperSlide>
                    
                    
                    
                    </Swiper>

        
        
        </>
    )
}

export default Carrucel;