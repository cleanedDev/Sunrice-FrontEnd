import React from "react";
import { FaWifi, FaTv, FaSnowflake, FaBath, FaTimes } from 'react-icons/fa';

function DetailRoom({selectedRoom,setSelectedRoom}){
    return(
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  p-4 z-40 ">
          <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh]  lg:max-h-[90vh] overflow-y-auto  mt-16">
            <div className="relative">
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <img 
                src={selectedRoom.image} 
                alt={selectedRoom.name} 
                className="w-full h-[40vh] object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-hotel-darkBlue mb-2">{selectedRoom.name}</h2>
                  <p className="text-xl text-hotel-grayBlue">{selectedRoom.bedType} Bed</p>
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