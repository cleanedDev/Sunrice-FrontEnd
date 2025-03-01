import React from "react";

function Section6({id}){
    return(
        <>
            <section id={id} className=" lg:max-w-screen-xl mx-auto w-full min-h-[60vh]   mt-5  max-sm:h-auto">

            <div className=" bg-sectionBG/60 w-full sm:w-11/12 h-full mx-auto shadow-sombra rounded-2xl flex flex-col-reverse items-center lg:flex-row justify-rounded max-sm:h-auto">
                {/* <div className=" w-full lg:w-[40%] h-[80%]  mx-auto relative rounded-2xl mt-8 p-1 max-sm:h-[40%]"> */}
                <div className=" w-10/12 h-[30%] lg:w-[40%] lg:h-[80%]  mx-auto relative rounded-2xl my-8 p-1 ">
                    <img src="/Map.png" alt="Ubicacion MagBay" className="w-full h-full object-cover rounded-2xl" />
                    <a
                        href="https://maps.app.goo.gl/errxT1nBK5NYwF9Y6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 left-0 w-full h-full"
                    ></a>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-2xl">
                        <span className="text-white text-lg font-bold text-center">¡Comienza tu aventura! Al hacer clic, serás redirigido.</span>
                    </div>
                </div>

                <div className="w-full lg:w-[40%] h-[80%]  mx-auto flex flex-col justify-around p-1 max-sm:h-auto max-md:mt-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-blueText text-center mt-5 lg:mt-0">
                    Contáctanos y comienza tu aventura.
                    </h2>
                    <div className="w-full h-[15%] flex justify-around my-2 cursor-pointer ">

                        <a href="mailto:barracudadventure.bcs@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="/email.png" alt="Email sunrise adventure in MagBay" className="w-full h-full hover:scale-110" />
                        </a>

                        <a href="https://wa.me/6121865233?text=Hola,%20me%20interesa%20tu%20servicio.">
                            <img src="/whatsapp.png" alt="WhatsApp sunrise adventure in MagBay" className="w-full h-full hover:scale-105" />
                        </a>

                        <img src="/formulario.png" alt="" className="hover:scale-110" />
                    </div>
                    <p className="text-lg md:text-xl text-blueSubtitles  mt-2 text-center ">Estamos aquí para ayudarte. Contáctanos por correo, WhatsApp,  o a través de nuestro formulario, como mejor te convenga. </p>
                </div>

            </div>
            </section>


        </>
        
    )
}

export default Section6;