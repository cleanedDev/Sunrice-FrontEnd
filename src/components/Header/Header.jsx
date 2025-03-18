"use client";
import React from "react";
import {useTranslations} from 'next-intl';
import { useState, useEffect } from "react";
import { usePathname,  useRouter  } from "next/navigation";
import Link from "next/link";


import DropMenu from "../DropMenu/DropMenu";

function Header() {
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();


    const [scrolled, setScrolled] = useState(false); //state para controlar blur de header
    const [isOpen, setIsOpen] = useState(false);//state para controlar meu hamburguesa
    const [idioma, setIdioma]=useState('');

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleScrollSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 80);
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

     // Redirección automática según el idioma del navegador
    useEffect(() => {
      const locale = pathname.split("/")[1];
      setIdioma(locale)

    }, []);

     // Extraer el idioma de la URL (ej. "en" o "es")
    const redirectTo = pathname !== `/${idioma}` ? `/${idioma}` : "#heroSection";
    

    return (
        <>
       
          <header className={`w-full h-20 mx-auto sticky top-0 z-50 pt-2 box-border transition-all duration-400 max-sm:h-24 ${pathname !== `/${idioma}` ? "bg-blue-500 shadow-md" : scrolled ? "bg-blue-500/55 backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
              <div className=" flex items-center mx-auto w-full h-full lg:max-w-screen-xl max-sm:justify-between  ">

                <div className="w-1/12 h-auto max-sm:w-3/12 cursor-pointer">
                  <Link href={redirectTo}>
                    <img className="object-cover w-full" src="/LogoSunrise.png" alt="Logo de Sunrise Adventure en Magbay - Tours y Hospedaje" />
                  </Link>
                </div>
                
                {pathname === `/${idioma}` && (
                  <>
                  <nav className=" w-11/12 h-auto max-sm:hidden" role="navigation">
                    <ul className="flex justify-around font-poppins font-medium text-xl text-white">
                      <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" onClick={() => handleScrollSection("section1")}>{t('Tours')}</li>
                      <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" onClick={() => handleScrollSection("section3")}>{t('Nosotros')}</li>
                      <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" onClick={() => handleScrollSection("section4")}>{t('Hospedaje')}</li>
                      <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" onClick={() => handleScrollSection("section5")}>{t('Transporte')}</li>
                      <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" onClick={() => handleScrollSection("section6")}>{t('Contacto')}</li>
                      <li className="hover:bg-blueText p-2 rounded-md cursor-pointer" onClick={() => handleScrollSection("section7")}>{t('Reseñas')}</li>
                    </ul>
                  </nav>
                
                <div className="sm:hidden " onClick={handleToggle}>
                  <img  src="/Menu Button.svg" alt="Logo de Sunrise Adventure en Magbay - Tours y Hospedaje"  />
                </div>
                </>
              )}
                
              </div>
          </header>
            <DropMenu isOpen={isOpen} handleToggle={handleToggle} setIsOpen={setIsOpen} handleScrollSection={handleScrollSection}/>

       
        </>
    )
}

export default Header;