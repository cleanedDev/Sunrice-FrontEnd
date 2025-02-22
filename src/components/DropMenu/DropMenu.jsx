import React from "react";
import { useState,useEffect } from "react";
function DropMenu({ isOpen, handleToggle,setIsOpen, handleScrollSection }) {


    
    return (
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md shadow-md z-50 transition-opacity duration-300 sm:hidden${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`fixed top-0 left-0 h-5/6 w-3/4 bg-blueDrop shadow-lg transition-transform duration-300 border-black ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        //   onClick={(e) => e.stopPropagation()} // Evita que el clic cierre el menú si se hace dentro
        >
          <div className="w-full h-1/6 flex justify-between items-center  text-white overflow-hidde4 ">

            <div className=" w-3/12 h-auto flex items-center p-1">
                <img className=" object-cover " src="/LogoSunrise.png" alt="Logo de Sunrise Adventure en Magbay - Tours y Hospedaje" onClick={() => handleScrollSection("heroSection")}/>
            </div>

            <button className="mr-4 " aria-label="Cerrar menú" onClick={handleToggle}>✕</button>

          </div>
          
          <ul className="flex flex-col gap-4 p-4 text-lg font-poppins font-bold text-white ">
            <li className="hover:bg-gray-100 p-1" onClick={() => handleScrollSection("section1")}>Tours</li>
            <hr/>
            <li className="hover:bg-gray-100 p-1">Nosotros</li>
            <hr/>
            <li className="hover:bg-gray-100 p-1">Hospedaje</li>
            <hr/>
            <li className="hover:bg-gray-100 p-1">Transporte</li>
            <hr/>
            <li className="hover:bg-gray-100 p-1">Contacto</li>
            <hr/>
            <li className="hover:bg-gray-100 p-1">Reseñas</li>
            <hr/>
          </ul>
        </div>
      </div>
    );
  }
  
  export default DropMenu;