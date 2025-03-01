import React from "react";

function CardAboutUs({subtitle, text,  image}){
    return(
        <>
                            
        <div className=" h-full  flex flex-col justify-around items-center p-1  ">
                            <h2 className="text-center italic text-26px font-medium text-blueSubtitles ">{subtitle}</h2>
                            <p className=" p-1 text-blueSubtitles  text-lg font-normal text-center sm:text-justify ">{text}</p>
                            <div className=" w-5/12 h-auto ">
                                <img className="w-full h-full object-cover" src={image} alt="" />
                            </div>
                            
        </div>
        <hr className="bg-blueDrop h-[1.5px] w-10/12 max-sm:block hidden mx-auto" />

        </>
    )
}

export default CardAboutUs;