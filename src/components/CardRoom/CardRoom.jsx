import React from "react";
import { useLocale } from "next-intl";
import { FaWifi, FaTv, FaSnowflake, FaBath, FaParking, FaTimes } from 'react-icons/fa';


function CardRoom({room, setSelectedRoom}){
    const locale = useLocale()
    return(
    <>  
    <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]  cursor-pointer"
        onClick={() => setSelectedRoom(room)}
    >
        <div className="h-64 overflow-hidden">
            <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
            <h3 className="text-xl font-semibold text-hotel-darkBlue mb-2">{room.name}</h3>
            {locale === 'es' ? 
                <p className="text-hotel-grayBlue mb-4">Cama {room.bedType}</p> 
                : 
                <p className="text-hotel-grayBlue mb-4">{room.bedType} Bed</p>
            }
            {/* <p className="text-hotel-grayBlue mb-4">{room.bedType} Bed</p> */}
                <div className="grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-hotel-grayBlue">
                        {amenity === "WiFi" && <FaWifi className="mr-2" />}
                        {amenity === "Smart TV" && <FaTv className="mr-2" />}
                        {amenity === "A/C" && <FaSnowflake className="mr-2" />}
                        {amenity === "Baño privado" && <FaBath className="mr-2" />}
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                </div>
        </div>
    </div>

    </>
    )
}

export default CardRoom;