import React from "react";

function CardFishing({fishing, image}){
    return(
        <>
        <div className="w-[48%] max-sm:w-10/12 relative h-full max-sm:h-[45%] flex justify-center items-center  rounded-2xl shadow-sombra group overflow-hidden ">
                                <img src={image} alt="" className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 flex justify-center items-end group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                                    <button className="mb-1 px-6 py-2 bg-blueHover text-white font-font-poppins font-semibold rounded-lg shadow-md hover:bg-blueHover/50">
                                        Conocer más
                                    </button>
                                </div>
                                <div className="absolute flex flex-col items-center justify-center ">
                                    <h2 className="text-4xl font-bold text-white text-center">{fishing}</h2>
                                </div>
        </div>
        </>
    )
}

export default CardFishing;