import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { useLocale,useTranslations } from "next-intl";
import { useRouter } from "next/navigation";


function ContainerTourInfo({dataTour,id}){

  const t = useTranslations('tourPage.containerToursInfo');
  const tp = useTranslations('tourPage');
  const router = useRouter();
  const locale = useLocale(); 

  const handleClick = () => { 
   
    // router.push(`/${locale}/reservation`); 
    router.push(`/${locale}/reservation?tourName=${dataTour.title}`);
   
  };
 

    return(
        <>
         <section className="w-11/12 lg:w-9/12 h-auto flex flex-col sm:flex-row items-center justify-around  mx-auto  bg-gradient-to-br from-[#004AAD] via-[#63a4cd] to-[#158fe7] rounded-xl " aria-labelledby="tour-details">
                      <div className="w-[95%] lg:w-[48%] h-[95%]  flex flex-col justify-around items-center gap-3 max-sm:h-[45%]">
                        <div className="w-[95%] h-[60%]  p-3">
                            {dataTour?.images?.length > 0 &&(
                                      <img src={dataTour.images[6]} className="w-full h-full object-cover rounded-3xl "  alt="Main view of the tour location" loading="lazy"  />
                            )}
                        </div>
                      
                        <div className="w-[95%] h-[30%]  flex    gap-4 p-3 flex-col ">
                             
                              <div className="w-full h-full flex flex-col    gap-1">
                                    
                                    <div className="w-full lg:w-[85%] h-auto flex items-center gap-4 mx-auto bg-[#1f64be] rounded-2xl p-4 transition-all hover:shadow-lg hover:bg-[#1a56a3] ">
                                      <FaRegCalendarCheck className="w-12 h-12 text-white flex-shrink-0"/>
                                      <div className="flex flex-col justify-center items-center flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-1">{t('temporada')}</h3>
                                        
                                          <div className="space-y-2">
                                                    {dataTour?.temporada?.length > 0 ? (
                                                      dataTour.temporada.map((temporada, index) => (
                                                        <div 
                                                          key={index}
                                                          className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 text-white/90 text-sm font-medium transition-colors hover:bg-white/20"
                                                        >
                                                          {temporada}
                                                        </div>
                                                      ))
                                                    ) : (
                                                      <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 text-white/90 text-sm">
                                                        No hay temporadas disponibles
                                                      </div>
                                                    )}
                                        </div>
                                      </div>                                   
                                    </div>
                                  
                                  
                                  <div className="w-full lg:w-[85%] h-auto flex items-center gap-4 mx-auto bg-[#1f64be] rounded-2xl p-4 transition-all hover:shadow-lg hover:bg-[#1a56a3] ">
                                    <MdOutlineTimer  className="w-12 h-12 text-white flex-shrink-0"/>
                                    <div className="flex flex-col justify-center items-center flex-1">
                                      <h3 className="text-lg font-semibold text-white mb-1">{t('duracion')}</h3>
                                        {dataTour?.descripcion?.duration &&(
                                            <span className="text-white/90 text-center">{dataTour.descripcion.duration}</span>
                                        )}
                                    </div>
                                  </div>
                              </div>

                              {/* <div className=""> */}
                                  <div className="w-full lg:w-[85%] h-auto flex items-center gap-4 mx-auto bg-[#1f64be] rounded-2xl p-4 transition-all hover:shadow-lg hover:bg-[#1a56a3]">
                                <IoIosPeople  className="w-12 h-12 text-white flex-shrink-0"/>
                                <div className="flex flex-col justify-center items-center flex-1">
                                  <h3 className="text-lg font-semibold text-white mb-1">{tp("pasajeros")}</h3>
                                          {dataTour?.pasajeros?.map((pasajero, index) => (
                                          <span key={index} className="text-white/90 text-center">
                                            {pasajero}
                                          </span>
                                        ))}
                                    
                                  </div>
                                </div>
                              {/* </div> */}

      
                        </div>   
                        <button onClick={() => handleClick()} className="w-full md:w-7/12 mb-3 mx-auto block bg-[#183254] text-white py-3 px-6 rounded-2xl font-semibold hover:bg-green-500 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">{t('reservar')}</button>       
                      </div>
        
                      <div className="w-[95%] lg:w-[48%] h-[95%]  flex flex-col gap-5  justify-around p-1">
                              {dataTour?.descripcion &&(
                                  <p className=" w-[96%] mx-auto max-sm:text-center ">{dataTour.descripcion.text}</p>
                              )}
                              <div className="bg-[#1f64be]/90 rounded-2xl p-6 shadow-lg"> 
                                <h3 className="text-xl font-bold text-white text-center mb-4">{t('incluye')}</h3>
                                {dataTour?.descripcion?.includes &&(
                                  <ul className="space-y-2">
                                    {dataTour.descripcion?.includes?.map((item, index) => {
                                      return (
                                          <li key={index} className="text-white/90 text-center">{item}</li>
                                          );
                                      })}
                                  </ul>
                                )}
                              </div>
                              <div className="bg-[#1f64be]/80 rounded-2xl p-4"> 
                                {dataTour?.options &&(
                                  <p className="text-white text-center">{dataTour.options}</p>
                                )}
                              </div>
                              
                      </div>
        </section>
        </>
    )
}

export default ContainerTourInfo;