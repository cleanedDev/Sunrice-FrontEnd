import React, {useEffect, useState} from "react";
import { MdDelete } from "react-icons/md";
import FormEditReservationTour from "../FormEditReservation/FormEditReservation";

function DetailTour({selectedReserv, openDetail, setOpenDetail, handlerDelete, handleUpdate}){
  const token = localStorage.getItem("jwtToken");

   
    const [isEditingPayment, setIsEditingPayment] = useState(false);
    const [advancePayment, setAdvancePayment] = useState(null);
    const [paymentLink, setPaymentLink] = useState(null);
    const[openEdit, setOpenEdit]=useState(false)
    const[reservationType, setReservationType] =  useState('');


    const handleAdvancePaymentUpdate = () => {
        if (!advancePayment || advancePayment <= 0) {
          alert('Please enter a valid payment amount');
          return;
        }
        setPaymentLink('https://example.com/payment/123');
        setIsEditingPayment(false);
      };

      useEffect(() => {
        selectedReserv?.hasOwnProperty("tourElegido")? setReservationType('tour') : setReservationType('hotel');

      },[selectedReserv] )

    

    return(
        <>
        <div className=" absolute inset-0 bg-gray-400 bg-opacity-80 backdrop-blur-md w-full  ">

            {openEdit &&(
                <FormEditReservationTour openEdit={openEdit} setOpenEdit={setOpenEdit} setOpenDetail={setOpenDetail} handleUpdate={handleUpdate} selectedReserv={selectedReserv}/>
            )}
            
      

        <div className="min-h-screen bg-gray-100  sm:p-8 rounded-xl">
      <div className="max-w-4xl mx-auto ">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className=" flex flex-col gap-4 md:flex-row md:justify-between items-center mb-6   ">
            <div className="flex items-center gap-4 ">
              <button
                onClick={()=>{setOpenDetail(!openDetail)}}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <h1 className="text-3xl font-bold text-gray-900 ">Detalles reservacion</h1>
            </div>
            <button
              onClick={()=> setOpenEdit(!openEdit)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Edit Reservation 
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-colors"
            onClick={()=>{handlerDelete(selectedReserv._id, reservationType, token)}} >
              <MdDelete  className="w-6 h-6 text-white flex-shrink-0 "/>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 "> 
            <div>
              <h2 className="text-xl font-semibold mb-4">Informacion basica</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Folio</p>
                  <p className="font-semibold">{selectedReserv?.folio}</p>
                </div>
                {selectedReserv.tourElegido && (
                  <div>
                  <p className="text-sm text-gray-600">Tour elegido</p>
                  <p className="font-semibold">{selectedReserv?.tourElegido}</p>
                </div>
                )}
                
                <div>
                  <p className="text-sm text-gray-600"> {selectedReserv.hasOwnProperty("tourElegido") ? "El tour comienza" : "Check-in"}</p>
                  <p className="font-semibold">{selectedReserv.fechaInicio}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{selectedReserv.hasOwnProperty("tourElegido") ? "El tour termina" : "Check-out"}</p>
                  <p className="font-semibold">{selectedReserv.fechaFin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{selectedReserv.hasOwnProperty("tourElegido") ? "Pasajeros" : "Huspedes"}</p>
                  <p className="font-semibold">{selectedReserv.cantidadPersonas}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Extras</p>
                  <p className="font-semibold">{selectedReserv.extras}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status reservacion</p>
                  <span
                   
                    className={`mt-1 rounded-md px-3 py-1 text-sm font-medium ${
                      selectedReserv.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' :
                      selectedReserv.estado === 'confirmado' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {selectedReserv.estado}
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-xl font-semibold mb-4">Informacion de cliente</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Nombre cliente</p>
                  <p className="font-semibold">{selectedReserv.nombre}</p>
                </div>
                <div className=" ">
                  <p className="text-sm text-gray-600 ">Correo</p>
                  <p className="font-semibold max-sm:text-sm">{selectedReserv.correo}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Telefono</p>
                  <p className="font-semibold">{selectedReserv.telefono}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Preferred Contact Method</p>
                  <p className="font-semibold">{selectedReserv.contactPref}</p>
                </div>
              </div>
            </div>
          </div>

          {selectedReserv.hospedaje?.fechaInicio && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Detalles de hospedaje</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Check-in </p>
                  <p className="font-semibold">{selectedReserv.hospedaje.fechaInicio}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Check-out </p>
                  <p className="font-semibold">{selectedReserv.hospedaje.fechaFin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Numero de huspedes</p>
                  <p className="font-semibold">{selectedReserv.hospedaje.cantidadPersonasH}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8  ">
            <h2 className="text-xl font-semibold mb-4 ">Informaccion de pago</h2>
            <div className="bg-gray-50 rounded-lg p-3 md:p-6 ">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
                <div className="">
                  <p className="text-sm text-gray-600 ">Status anticipo</p>
                  <p className={`font-semibold text-center ${
                    selectedReserv.anticipo === 'Pendiente' ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {selectedReserv.anticipo}
                  </p>
                </div>
                {!isEditingPayment && (
                  <button
                    onClick={() => setIsEditingPayment(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Agregar anticipo
                  </button>
                )}
              </div>

              {isEditingPayment ? (
                <div className="space-y-4 ">
                  <div className="">
                    <label className="block text-sm text-gray-600 mb-1 p-2">
                      Establecer link de pago
                    </label>
                    <div className=" flex flex-col md:flex gap-4  ">
                      <input
                        type="number"
                        value={advancePayment || ''}
                        onChange={(e) => setAdvancePayment(Number(e.target.value))}
                        className="flex-1 rounded-md border border-gray-500 shadow-sm p-1 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-center"
                        placeholder="Ingresa la cantidad"
                        min="0"
                        step="0.01"
                      />
                      <button
                        onClick={handleAdvancePaymentUpdate}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors md:w-[45%] mx-auto"
                      >
                        Generar Link de pago
                      </button>
                      <button
                        onClick={() => setIsEditingPayment(false)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors md:w-[45%] mx-auto"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              ) : selectedReserv.advancePayment ? (
                <div>
                  <p className="text-sm text-gray-600">Advance Payment Amount</p>
                  <p className="font-semibold">${selectedReserv.advancePayment.toFixed(2)}</p>
                </div>
              ) : null}

              {paymentLink && (
                <div className="mt-4 p-4 bg-white rounded-md border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Link de pago generado:</p>
                  <a
                    href={paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    {paymentLink}
                  </a>
                </div>
              )}
            </div>
          </div>

          

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Reservacion creada: <span className="font-semibold">{selectedReserv.createdAt}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

      </div>
        </>
    )
}

export default DetailTour;