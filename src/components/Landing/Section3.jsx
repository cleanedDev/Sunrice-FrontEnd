import React from "react";
import CardAboutUs from "../CardAboutUs/CardAboutUs";

function Section3({id}){
    return(
        <>
        <section id={id} className=" lg:max-w-screen-xl mx-auto w-full min-h-screen h-screen flex items-center  mt-10 max-md:h-[150vh] max-sm:h-[240vh]" >
                <div className=" bg-sectionBG w-full h-full mx-auto shadow-sombra rounded-2xl sm:w-11/12  ">

                    <header className="w-full mx-auto text-center p-1 mt-4  ">
                        <h2 className="text-[2.5rem] font-bold text-blueText">Compromiso, Experiencia y Accesibilidad</h2>
                    </header>

                    <div className="w-full h-[70%] max-md:h-[85%]  mt-5 grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">

                        <CardAboutUs subtitle={"Turismo Seguro y Certificado"} text={"Contamos con todos los permisos y regulaciones exigidos por las autoridades correspondientes, garantizando un servicio turístico y de hospedaje seguro, confiable y de calidad."} image={"/certificado 1.png"} />
                        <CardAboutUs subtitle={"Guías Expertos y Conocedores de la Región"} text={"Nuestros capitanes son nativos de Bahía Magdalena, pescadores con años de experiencia y profundo conocimiento de las aguas locales, asegurando un recorrido auténtico y enriquecedor."} image={"/brujula 1.png"}/>
                        <div className="max-md:col-span-2  w-full h-full flex flex-col">
                            <CardAboutUs 
                            subtitle="Experiencias para Todos" 
                            text="Nos esforzamos por hacer que nuestras experiencias sean accesibles para todos, incluyendo personas con discapacidad. En caso de requerir asistencia especial, por favor háznoslo saber al momento de reservar tu tour para brindarte el mejor servicio posible." 
                            image="/colaboracion 1.png"
                            // className="w-full "  // Ajusta ancho si es necesario
                            />
                        </div>


                    </div>
                    
                </div>
               
            </section>
        </>
    )
}

export default Section3;