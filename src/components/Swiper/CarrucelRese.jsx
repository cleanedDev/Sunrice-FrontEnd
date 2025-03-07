"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardRese from "../CardRese/CardRese";
import { useTranslations } from "next-intl";


function CarrucelRese(){

 const t = useTranslations('Section7.testimonios')

    return(
        <>

                <Swiper
                    modules={[Navigation, Autoplay]}
                  
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { // A partir de 'md' (tabletas)
                          slidesPerView: 2,
                        },
                        930: { // A partir de 'lg' (pantallas grandes)
                          slidesPerView: 3,
                        }
                      }}
                      autoplay={{ 
                        delay: 4000, // Tiempo entre cambios (ms)
                        disableOnInteraction: true, // No se detiene al interactuar
                      }}
                      loop={true} 
                   
                    className=" w-5/6 lg:w-11/12 h-5/6  " aria-label="Carrusel de tours disponibles"
                    // RECORDATORIO: poner alt a cada imagen
                    >
                    <SwiperSlide >
                       <CardRese bg={"bg-[#66C2FF]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(1).jpg"}
                        namePerson={"Monserrat navarro"}
                        testimonio={t('testimonio1')}/>
                    </SwiperSlide>

                    <SwiperSlide >
                       <CardRese bg={"bg-[#33B3FF]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(10).jpg"}
                        namePerson={"Mariana López"}
                        testimonio={t('testimonio2')}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#1AA7FF]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(8).jpg"}
                        namePerson={"Carlos Méndez"}
                        testimonio={t('testimonio3')}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#0088E6]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(9).jpg"}
                        namePerson={"José Fernández"}
                        testimonio={t('testimonio4')}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#005599]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(5).jpg"}
                        namePerson={"Andrea Ramírez"}
                        testimonio={t('testimonio5')}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#004480]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(7).jpg"}
                        namePerson={"Isabela Núñez"}
                        testimonio={t('testimonio6')}/>
                    </SwiperSlide>

                    <SwiperSlide >
                       <CardRese bg={"bg-[#0099FF]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(4).jpg"}
                        namePerson={"Alberto Morales"}
                        testimonio={t('testimonio7')}/>
                    </SwiperSlide>
                    

                    
                                        
                    
                </Swiper>


        </>
    )
}

export default CarrucelRese;