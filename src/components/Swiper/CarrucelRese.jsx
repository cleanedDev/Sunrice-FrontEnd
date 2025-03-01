"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardRese from "../CardRese/CardRese";


function CarrucelRese(){
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
                        namePerson={"Alejandra navarro"}
                        testimonio={"Una gran experiencia! La atención y el trato es excelente  100% RECOMENDABLE!"}/>
                    </SwiperSlide>

                    <SwiperSlide >
                       <CardRese bg={"bg-[#33B3FF]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(10).jpg"}
                        namePerson={"Mariana López"}
                        testimonio={"Una experiencia increíble, superó mis expectativas. Definitivamente lo volveré a vivir."}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#1AA7FF]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(8).jpg"}
                        namePerson={"Carlos Méndez"}
                        testimonio={"Desde el primer momento me sentí en otro mundo. 100% recomendado."}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#0088E6]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(9).jpg"}
                        namePerson={"José Fernández"}
                        testimonio={"Si buscas algo diferente y emocionante, este es el lugar perfecto. ¡Me encantó!"}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#005599]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(5).jpg"}
                        namePerson={"Andrea Ramírez"}
                        testimonio={"No sabía cuánto necesitaba esta experiencia hasta que la viví. ¡Imperdible!"}/>
                    </SwiperSlide>
                    

                    <SwiperSlide >
                       <CardRese bg={"bg-[#004480]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(7).jpg"}
                        namePerson={"Isabela Núñez"}
                        testimonio={"Viví momentos únicos e irrepetibles. Gracias por esta experiencia increíble."}/>
                    </SwiperSlide>

                    <SwiperSlide >
                       <CardRese bg={"bg-[#0099FF]"}
                        photo={"https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Comments/User+(4).jpg"}
                        namePerson={"Alberto Morales"}
                        testimonio={"No pensé que algo pudiera emocionarme tanto. Sin duda, lo haré de nuevo, experiencia para compartir con amigos."}/>
                    </SwiperSlide>
                    

                    
                                        
                    
                </Swiper>


        </>
    )
}

export default CarrucelRese;