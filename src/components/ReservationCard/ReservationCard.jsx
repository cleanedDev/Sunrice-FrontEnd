import React from "react";


function ReservationCard({reservation, openDetail, setOpenDetail,handleClick}){
    return(
        <>
        <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-transform  duration-900 hover:scale-105"
           onClick={()=>{setOpenDetail(!openDetail),  handleClick(reservation); }}
          >

      
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-600">Folio</p>
          <p className="font-semibold">{reservation.folio}</p>
        </div>
        <span        
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              reservation.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' :
              reservation.estado === 'confirmado' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}
          >
            {reservation.estado}         
        </span>
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-600">Client Name</p>
        <p className="font-semibold">{reservation.nombre}</p>
      </div>

      {reservation.hasOwnProperty("tourElegido")? (
        <div>
          <p className="text-sm text-gray-600">Tour Name</p>
          <p className="font-semibold">{reservation.tourElegido}</p>
        </div>
      ) : (
        <div>
          <div className="mb-2">
            <p className="text-sm text-gray-600">Check-in Date</p>
            <p className="font-semibold">{reservation.fechaInicio}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Check-out Date</p>
            <p className="font-semibold">{reservation.fechaInicio}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">huspedes</p>
            <p className="font-semibold">{reservation.cantidadPersonas}</p>
          </div>
        </div>
      )}
    </div>
        </>
    )
}

export default ReservationCard;