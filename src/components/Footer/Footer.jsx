import React from "react";
import { IoMdPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <>
        <footer className="bg-[#0A142F] w-full lg:h-[40vh] flex flex-col justify-around h-[48vh] max-sm:text-sm">
            <div className="border-t border-b w-10/12 h-3/6 mx-auto flex justify-between items-center ">
                <img src="/LogoSunrise.png" alt="" className="h-full hidden sm:block" />
                <div className="w-9/12 lg:w-6/12 h-[90%]  max-sm:mx-auto max-sm:w-full ">
                   <div className="w-auto h-full  flex flex-col gap-2   ">
                    <span className=" flex gap-2 text-white  items-center  "><IoMdPin  className=" w-[20px] h-[20px]"/><a href="https://maps.app.goo.gl/errxT1nBK5NYwF9Y6" target="_blank">Puerto Salina Cruz 23740 California, Mexico</a></span>
                    <div className="w-full h-full flex flex-col lg:flex-row gap-4  "> 
                        <span className="flex text-white gap-2  items-center "><FaPhone className=" w-[20px] h-[20px]" />612 186 5233</span>
                        <span className="flex text-white gap-2  items-center"><MdEmail className=" w-[20px] h-[20px]" />BarracudAdventure.BCS@gmail.com</span>
                    </div>
                    <div className="w-full h-full flex gap-4  ">
                        <span className="flex text-white gap-2">Redes sociales</span>
                        <div className="flex text-white gap-4">
                            <a href="https://www.facebook.com/Barracuda.Adventure/" target="_blank"><FaFacebook className=" w-[20px] h-[20px]" /></a>
                            <a href=""><FaInstagram className=" w-[20px] h-[20px]" target="_blank"/></a>
                        </div>
                        
                    </div>
                   </div>
                </div>
            </div>
            <div className="flex items-center">
                <nav className="w-5/12 h-auto hidden lg:block mx-auto" role="navigation">
                    <ul className="flex justify-around font-poppins font-medium text-xl text-white ">
                        <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" >Tours</li>
                        <li className="hover:bg-blueText p-2 rounded-md cursor-pointer"  >Nosotros</li>
                        <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" >Hospedaje</li>
                        <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" >Transporte</li>
                        <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" >Contacto</li>
                        <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" >Reseñas</li>
                    </ul>
                </nav>
                <p className="mx-auto text-[#FFFFFF] text-center">Copyright © 2025 • Sunrise Adventure In MagBay</p>
            </div>
           
            
            <div className="bg-black w-full h-[15%]">
                <img src="/SitioCleaned.png" alt="" className="h-full mx-auto w-auto object-contain " />
            </div>
            {/* <p className="mx-auto text-[#FFFFFF]">Copyright © 2025 • Sunrise Adventure In MagBay</p> */}
        </footer>
        </>
    )
}

export default Footer;