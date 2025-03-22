import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";

function FiltersReserv({allreservations}){
    return(
        <>
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reservation Type
            </label>
            <select
            //   value={filters.type}
            //   onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="all">All Reservations</option>
              <option value="tour">Tour Reservations</option>
              <option value="hotel">Hotel Reservations</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
            //   value={filters.status}
            //   onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="all">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By Date
            </label>
            <select
            //   value={filters.sort}
            //   onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="newest">Most Recent</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
            //   onClick={() => setFilters({ type: 'all', status: 'all', sort: 'newest' })}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allreservations?.map((item) => (
                <ReservationCard key={item._id} />
            ))}
      </div>
      </div>
        </>
    )
}


export default FiltersReserv;