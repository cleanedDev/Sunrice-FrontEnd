import React from "react";
import CardFishing from "../CardFishing";

function Section2(){
    return(
        <>
        <section className="lg:max-w-screen-xl mx-auto w-full h-[140vh]   my-8 overflow-hidden max-sm:h-[160vh] ">
            <div  className="bg-sectionBG/60 w-full sm:w-11/12 h-[97%] mx-auto flex flex-col  shadow-sombra rounded-2xl ">
            
                <div className="w-full mx-auto text-center p-1 mt-4  ">
                    <h2 className="text-[2.5rem] font-bold text-blueText">Retos y Emociones en el Océano</h2>
                    <p className="text-[1.75rem] font-normal text-blueSubtitles">
                        "Siente la fuerza del mar mientras nadas o desafías a las grandes especies."
                    </p>
                </div>
                    
                    
                <div className="w-11/12 h-[120vh]  p-2 mt-3 mx-auto  flex flex-col justify-around sm:h-[115vh]  "> 
                        <div className="w-11/12 h-[50%] relative mx-auto max-sm:h-[40%] rounded-2xl shadow-sombra hover:shadow-sombra2 flex justify-center items-center group overflow-hidden">
                            <img 
                                src="https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Nado+marlin/nm8.jpg" 
                                alt="Nado con marlin" 
                                className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-105"
                            />
                            
                            <div className="absolute inset-0 bg-black/30 opacity-0 flex justify-center items-end group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                                <button className="mb-9 px-6 py-2 bg-blueHover text-white font-font-poppins font-semibold rounded-lg shadow-md hover:bg-blueHover/50">
                                    Conocer más
                                </button>
                            </div>

                            <div className="absolute flex flex-col items-center justify-center ">
                                <h2 className="text-4xl font-bold text-white text-center">Nado con marlin</h2>
                            </div>
                        </div>

                        <div className="w-11/12 sm:h-[35%] mx-auto  flex max-sm:flex-col justify-between items-center h-[45%] rounded-2xl ">
                            
                            <CardFishing fishing={' Pesca InShore'} image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/pesca+inshore/FishingInShore2.jpg'}/>
                            <CardFishing fishing={' Pesca OffShore'} image={'https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/Pesca+Offshore/FishingOffshore2.jpg'}/>
                            
                        </div>

                </div>
            </div>
        </section>

    
    
        </>
    )

}


export default Section2;