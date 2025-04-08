
import React, { useState } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import DetailTour from "../DetailTour/DetailTour";

function FiltersReserv({allreservations, handlerDelete, handleUpdate, openDetail, setOpenDetail, fetchData}){

  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  // const[openDetail, setOpenDetail]= useState(false)
  const [selectedReserv, setSelectedReserv]= useState({})

  

  const resetFilters = () => {
    setFilterType("all")
    setFilterStatus("all")
    setSortOrder("desc")
  };

  console.log(filterStatus)

  const filteredReservations = allreservations
    .filter((reservation) => {
      // Filtrar por tipo
      const typeMatch =
        filterType === "all" ||
        (filterType === "tour" && reservation.hasOwnProperty("tourElegido")) ||
        (filterType === "hotel" && !reservation.hasOwnProperty("tourElegido"));

      // Filtrar por estado
      const statusMatch = filterStatus === "all" || reservation.estado === filterStatus;

      // Filtrar por fecha (createdAt o fechaInicio)
      const reservationDate = new Date(reservation.createdAt || reservation.fechaInicio);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      const dateMatch =
        (!start || reservationDate >= start) &&
        (!end || reservationDate <= end);

      return typeMatch && statusMatch && dateMatch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || a.fechaInicio).getTime();
      const dateB = new Date(b.createdAt || b.fechaInicio).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    const handleClick = (item)=> {
      setSelectedReserv(item)
    }

   
  

    

 
  
    return(
        <>

    
  
    <div className="rounded-xl relative " >

    {openDetail && (
      <DetailTour selectedReserv={selectedReserv} setSelectedReserv={setSelectedReserv} handlerDelete={handlerDelete} handleUpdate={handleUpdate}  openDetail={openDetail} setOpenDetail={setOpenDetail} fetchData={fetchData} />
    )}
      
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8   ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de reservacion
            </label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="tour">Reservaciones Tour</option>
              <option value="hotel">Reservaciones Hotel</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={filterStatus}
              // defaultValue={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="all">Todos</option>
              <option value="pendiente">Pendientes</option>
              <option value="confirmado">Aceptadas</option>
              <option value="cancelado">Canceladas</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filtrar por fecha
            </label>
            <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="desc">Recientes</option>
              <option value="asc">Pasadas</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Reset filtros
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
      {filteredReservations?.map((item) => (
                <ReservationCard handleClick={handleClick} key={item._id} reservation={item} openDetail={openDetail} setOpenDetail={setOpenDetail} />
            ))}
            
      </div>
      </div>
      
        </>
    )
}


export default FiltersReserv;