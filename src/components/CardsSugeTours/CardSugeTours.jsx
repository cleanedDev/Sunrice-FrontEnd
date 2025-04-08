import React from "react";



function CardSugeTours({handleTourClick, tour, dataTours}){

    return(
    <>
                <div onClick={() => handleTourClick(tour)}  className={`bg-[#F5EFEB] w-[85%] ${dataTours?.length <= 2 ? 'h-[50%]' : 'h-[80%]'} group relative bg-[#F5EFEB] rounded-xl overflow-hidden shadow-lg 
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl
                        cursor-pointer mx-auto`} aria-label={`Click to view details of ${tour.title} tour`} 
                        role="button"> 
                    
                          <div className="flex items-center p-4 gap-4 h-full">
                              <div className="w-1/4 aspect-square overflow-hidden rounded-xl">
                                <img
                                  src={tour.images[6]}
                                  loading="lazy"
                                  alt={`Image of the ${tour.title} tour`}
                                  className="w-full h-full object-cover transform group-hover:scale-110 
                                          transition-transform duration-500"
                                />
                              </div>
                              <h3 className="flex-1 text-[#183254] font-bold text-lg md:text-xl 
                                        group-hover:text-[#004AAD] transition-colors duration-300">
                                {tour.title}
                              </h3>
                          </div>

                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
                </div>
    </>)

}

export default CardSugeTours;