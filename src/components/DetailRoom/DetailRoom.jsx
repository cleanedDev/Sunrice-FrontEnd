import React from "react";
import { FaWifi, FaTv, FaSnowflake, FaBath, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useLocale } from "next-intl";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function DetailRoom({selectedRoom,setSelectedRoom}){
  const locale = useLocale()
    return(
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  p-4 z-40 ">
          <div className="bg-white rounded-lg max-w-4xl w-full h-[85vh]  lg:max-h-[90vh] overflow-y-auto  mt-16">
            <div className="relative">
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-20"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    className={`w-full h-[40vh] ${selectedRoom.name === "Dunas de Oro"? 'bg-[#fade84c6]' :  selectedRoom.name === 'Manglar'? 'bg-[#6baaa2]' : 'bg-[#91ccf9]'}`} aria-label="Carrusel de tours disponibles">

                    {selectedRoom.images?.map((image, index) => (
                        <SwiperSlide key={index} className="w-full h-fullflex items-center justify-center ">
                          <img src={image} alt={`Imagen ${index + 1}`} className="w-auto h-[95%] object-cover mx-auto mt-2 rounded-xl"/>
                        </SwiperSlide>
                    ))}   

              </Swiper>
              
            </div>
            <div className="p-3">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-hotel-darkBlue mb-2">{selectedRoom.name}</h2>
                  {locale === 'es' ? 
                   <p className="text-hotel-grayBlue mb-4">Cama {selectedRoom.bedType}</p> 
                    : 
                  <p className="text-hotel-grayBlue mb-4">{selectedRoom.bedType} Bed</p>
                  }
                </div>
                <p className="text-2xl font-bold text-hotel-darkBlue">{selectedRoom.price}</p>
              </div>
              <p className="text-gray-600 mb-6">{selectedRoom.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {selectedRoom?.amenities?.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-hotel-beige rounded-lg p-3">
                    {amenity === "WiFi" && <FaWifi className="w-5 h-5 text-hotel-darkBlue mr-2" />}
                    {amenity === "Smart TV" && <FaTv className="w-5 h-5 text-hotel-darkBlue mr-2" />}
                    {amenity === "A/C" && <FaSnowflake className="w-5 h-5 text-hotel-darkBlue mr-2" />}
                    {amenity === "Baño privado" && <FaBath className="w-5 h-5 text-hotel-darkBlue mr-2" />}
                    <span className="text-hotel-darkBlue font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
        </>
    )
}

export default DetailRoom;