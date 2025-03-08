
import Link from "next/link";
import React from "react";

function CardTour ({image, tour,handleClick}){

    return(
        <>
            <article className="w-11/12 h-5/6 mx-auto mt-8  relative flex justify-center items-end rounded-3xl transition-transform duration-300 hover:scale-105 shadow-sombra hover:shadow-sombra2">
                <img 
                    src={image}
                    alt="Descripción del tour" 
                    className="w-full h-full object-cover rounded-3xl" 
                />
                <div className="absolute  w-11/12 h-2/6  flex flex-col items-center justify-around mb-12  gap-3">
                    <h2 className="text-4xl font-bold text-white text-center ">{tour}</h2>
                    
                        <button className="p-2 w-8/12 rounded-2xl text-center font-bold text-xl text-white duration-300 delay-300 bg-blueHover hover:bg-blueHover/50" onClick={handleClick}>Explorar tour</button>
                    
                </div>
            </article>

        </>
    )
    
}

export default CardTour;