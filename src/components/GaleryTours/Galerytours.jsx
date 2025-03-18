import React from "react";

function GaleryTours({imagenes,open,setOpen}){
    return(
        <>
        <div className="w-11/12 lg:w-9/12 h-[85vh]  lg:h-[90vh]   mx-auto flex items-center justify-around gap-5  ">
                <div className="w-[70%] h-[98%]  flex flex-col gap-5 max-md:w-[85%] rounded-3xl">
                  <div className="w-full h-[65%]  flex gap-5 rounded-3xl">
                    <div className="w-[60%] h-full   rounded-3xl max-sm:hidden ">
                        {imagenes?.length > 0 &&(
                          <img src={imagenes[0]} onClick={() => setOpen(!open)}alt="Tour image" className="w-full h-full object-cover rounded-3xl transition-transform duration-300  hover:scale-[1.08] " />
                        )}
                              {/* <img src={imagenes[0]} alt="Tour image" className="w-full h-full object-cover rounded-3xl " /> */}
                           
                    </div>
                    <div className=" w-full  md:w-[40%] h-full flex flex-col   gap-5 rounded-3xl ">
                      <div className="w-full h-[50%] " >
                        <img src={imagenes[1]} onClick={() => setOpen(!open)} alt="Tour image" className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" />
                      </div>
                      <div className="w-full h-[50%] rounded-3xl overflow-hidden md:overflow-visible  ">
                        <img src={imagenes[2]} onClick={() => setOpen(!open)} alt="Tour image" className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" />
                      </div>
                      
                    </div>

                  </div>
                  <div className="w-full h-[40%]   rounded-3xl overflow-hidden ">
                      <img src={imagenes[3]} onClick={() => setOpen(!open)} alt="Tour image" className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.05]" />
                  </div>

                </div>

                <div className="w-[30%] h-[98%] flex flex-col gap-5   max-md:hidden rounded-3xl ">
                    <div className="w-full h-[50%]  rounded-3xl">
                    <img src={imagenes[5]} onClick={() => setOpen(!open)} alt="Tour image" className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" />
                      </div>
                    <div  className="w-full h-[50%]  rounded-3xl">
                      <img src={imagenes[6]} onClick={() => setOpen(!open)} alt="Tour image" className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.08]" />
                    </div>
                </div>
              
            </div>


        </>
    )
}


export default GaleryTours;