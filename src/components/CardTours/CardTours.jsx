import React from "react";

function CardTour ({image}){

    return(
        <>
            <article className="w-11/12 h-5/6 mx-auto mt-8  relative flex justify-center items-end rounded-3xl transition-transform duration-300 hover:scale-105 ">
                <img 
                    src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/avistamiento+ballenas/whales1.jpg"
                    alt="Descripción del tour" 
                    className="w-full h-full object-cover rounded-3xl" 
                />
                <div className="absolute  w-11/12 h-2/6  flex flex-col items-center justify-around mb-3">
                    <h2 className="text-4xl font-bold text-white text-center ">Avistamiento de ballenas</h2>
                    <a className="p-2 w-8/12 rounded-2xl text-center font-bold text-xl text-white duration-300 delay-300 bg-blueHover hover:bg-blueHover/50  "  href="">Explorar tour</a>
                </div>
            </article>

        </>
    )
    
}

export default CardTour;