import React from "react";

function Galeryhotel({instalations,open, setOpen}){
    return(
    <>
     <section className=" h-[85vh]  lg:h-[90vh]   mx-auto flex items-center justify-around gap-5 my-4 " aria-label="Image gallery for the selected tour">
                    <div className="w-[70%] h-[98%]  flex flex-col gap-5 max-md:w-[85%] rounded-3xl">
                      <div className="w-full h-[65%]  flex gap-5 rounded-3xl">
                        <div className="w-[60%] h-full   rounded-3xl max-sm:hidden ">
                            {instalations?.length > 0 &&(
                              <img src={instalations[0]} onClick={() => setOpen(!open)} alt="Main view of the tour location"  className="w-full h-full object-cover rounded-3xl transition-transform duration-300  hover:scale-[1.08]  " loading="lazy"  />
                            )}
                                  
                               
                        </div>
                        <div className=" w-full  md:w-[40%] h-full flex flex-col   gap-5 rounded-3xl ">
                          <div className="w-full h-[50%] " >
                            <img src={instalations[1]} onClick={() => setOpen(!open)} alt="Secondary view of the tour area"  className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" loading="lazy"  />
                          </div>
                          <div className="w-full h-[50%] rounded-3xl overflow-hidden md:overflow-visible  ">
                            <img src={instalations[2]} onClick={() => setOpen(!open)} alt="Tour image" className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" loading="lazy"  />
                          </div>
                          
                        </div>
    
                      </div>
                      <div className="w-full h-[40%]   rounded-3xl overflow-hidden ">
                          <img src={instalations[6]} onClick={() => setOpen(!open)}  alt="Close-up of a tour feature"  className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.05]" loading="lazy"  />
                      </div>
    
                    </div>
    
                    <div className="w-[30%] h-[98%] flex flex-col gap-5   max-md:hidden rounded-3xl ">
                        <div className="w-full h-[50%]  rounded-3xl">
                        <img src={instalations[5]} onClick={() => setOpen(!open)} alt="Highlight of the tour location" className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" loading="lazy"  />
                          </div>
                        <div  className="w-full h-[50%]  rounded-3xl">
                          <img src={instalations[14]} onClick={() => setOpen(!open)} alt="Additional feature of the tour"  className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" loading="lazy"  />
                        </div>
                    </div>
                  
                </section>
    </>)
}

export default Galeryhotel;