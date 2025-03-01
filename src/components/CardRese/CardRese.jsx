import React from "react";


function CardRese(props){
    const { bg, photo, testimonio, namePerson } = props;
    return(
        <>
        <div className={`${bg} w-full h-full  rounded-3xl flex flex-col items-center gap-y-8`}>
                <div className="w-1/3 h-1/3 flex justify-end overflow-hidden self-end">
                    <img src={photo} alt="" className="h-full rounded-3xl rounded-bl-[45px] "/>
                </div>
                <div className="w-10/12 h-3/6 flex flex-col gap-y-8">
                    <p className="w-full   text-lg font-light p-1 text-[#F4F0E5]">
                        {testimonio}
                    </p>
                    <div className="flex flex-col gap-y-1 leading-5 pb-6">
                        <span className=" w-10/12 text-sm font-semibold text-[#F4F0E5]">
                            {namePerson}
                        </span>   
                    </div>
                </div>
        </div>
        
        
        </>
    )
}

export default CardRese;