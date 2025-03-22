import React from "react";


function ReservationCard(){
    return(
        <>
        <div 
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
    //   onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-600">Folio</p>
          <p className="font-semibold">null</p>
        </div>
        <select
        //   value={reservation.status}
        //   onChange={handleStatusChange}
        //   onClick={(e) => e.stopPropagation()}
        //   className={`rounded-md px-3 py-1 text-sm font-medium ${
        //     reservation.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
        //     reservation.status === 'Accepted' ? 'bg-green-100 text-green-800' :
        //     'bg-red-100 text-red-800'
        //   }`}
        >
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-600">Client Name</p>
        <p className="font-semibold">null</p>
      </div>

      {/* {reservation.type === 'tour' ? (
        <div>
          <p className="text-sm text-gray-600">Tour Name</p>
          <p className="font-semibold">null</p>
        </div>
      ) : (
        <div>
          <div className="mb-2">
            <p className="text-sm text-gray-600">Check-in Date</p>
            <p className="font-semibold">null</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Check-out Date</p>
            <p className="font-semibold">null</p>
          </div>
        </div>
      )} */}
    </div>
        </>
    )
}

export default ReservationCard;