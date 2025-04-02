import React, { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"




function FormEditReservationTour({openEdit, setOpenEdit, setOpenDetail, selectedReserv, handleUpdate}){

    const today = new Date().toISOString().split("T")[0]; 
    const token = localStorage.getItem("jwtToken");
    
    const[hospedaje, setHospedaje]= useState(false);
    const[reservationType, setReservationType] =  useState('');

    const haveHospedaje = (selectedReserv) => {
        if (selectedReserv && selectedReserv.hospedaje) {
          setHospedaje(!!selectedReserv.hospedaje.fechaInicio); 
        } else {
          setHospedaje(false);
        }
      };

      const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        const year = d.getUTCFullYear(); // Usar getUTCFullYear() para evitar la zona horaria local
        const month = String(d.getUTCMonth() + 1).padStart(2, "0"); // getUTCMonth() devuelve valores de 0 a 11, por lo que sumamos 1
        const day = String(d.getUTCDate()).padStart(2, "0"); // getUTCDate() devuelve el día en UTC
        return `${year}-${month}-${day}`;
    };
    
      
      useEffect(() => {
        if (selectedReserv) {
          haveHospedaje(selectedReserv);
        }
      }, [selectedReserv]);

      useEffect(() => {
        selectedReserv?.hasOwnProperty("tourElegido")? setReservationType('tour') : setReservationType('hotel');

      },[selectedReserv] )

    
          
        const { setValue } = useForm();
        const { register, getValues, handleSubmit, reset, watch, formState: { errors },} = useForm({
            defaultValues: {
                contactMethod: selectedReserv.contactPref,  // Valor inicial por defecto
                fechaInicioH: selectedReserv?.hospedaje?.fechaInicio ? formatDate(selectedReserv.hospedaje.fechaInicio) : "",
                fechaFinH: selectedReserv?.hospedaje?.fechaFin ? formatDate(selectedReserv.hospedaje.fechaFin) : "",
                cantidadPersonasH: selectedReserv?.hospedaje?.cantidadPersonasH || "",
                fechaInicio: selectedReserv?.fechaInicio ? formatDate(selectedReserv.fechaInicio) : "",
                fechaFin: selectedReserv?.fechaFin ? formatDate(selectedReserv.fechaFin) : "",
                cantidadPersonas: selectedReserv?.cantidadPersonas || "",
            }
        })

       
            
        
    
        const fechaInicio = watch("fechaInicio"); // Observar la fecha de inicio
        const fechaFin = watch("fechaFin");
        const fechaInicioH = watch("fechaInicioH");
        const fechaFinH = watch("fechaFinH");
        
        
        const handleToggleHospedaje = () => {
            setHospedaje((prev) => {
               
                if (prev) {
                    // Si se desactiva hospedaje, limpia los valores específicos de hospedaje
                    setValue("fechaInicioH", "");
                    setValue("fechaFinH", "");
                    setValue("cantidadPersonasH", "");
        
                    // Resetear solo los campos de hospedaje, no todo el formulario
                    reset({
                        ...getValues(),  // Mantener todos los valores actuales
                        fechaInicioH: "",
                        fechaFinH: "",
                        cantidadPersonasH: ""
                    });
                }
                return !prev; 
               
            });
        };

        const onSubmit = async (id, reservationType, token, data) => {

          await handleUpdate(id, reservationType, token, data)
          setOpenEdit(false)
          setOpenDetail(false)
            
           
          };
          
    return(
        <>
        <div className="fixed inset-0 bg-[#0a1047a2] bg-opacity-80 backdrop-blur-md w-full rounded-xl ">
                    <button className=" absolute top-3 right-3 text-white hover:text-red-700 transition-colors " onClick={()=>setOpenEdit(!openEdit)}><IoMdCloseCircleOutline className="w-8 h-8" /></button>

             <form onSubmit={handleSubmit((data) => onSubmit(selectedReserv._id, reservationType, token, data))} className="w-[90%] lg:w-[60%] mt-[6rem] md:mt-[7rem]  flex flex-col gap-4 mx-auto bg-[#0a1047a2] rounded-2xl   ">
                                  <h1 className=" mx-auto text-white text-4xl font-semibold p-1 text-center">Editar reservacion</h1>
                                 
                                 {selectedReserv?.tourElegido && (
                                    <>
                                    <input className="p-2 bg-white rounded-2xl w-[85%] lg:w-[60%] mx-auto text-center" defaultValue={selectedReserv.tourElegido}  
                                    {...register("tourElegido",{ required: true})}/>
                                    {errors.tourElegido?.type === "required" && ( <p className="text-red-500" role="alert">este campo es obligatorio</p>)}
                                    </>
                                 )}
                                 
                                  
                                  <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[85%] lg:w-[60%]">
                    
                                    <div className="w-full lg:w-[50%]  flex flex-col gap-1 items-center">
                                      <label className="text-white font-semibold" htmlFor="inicio" >Inicio</label>
                                      <input id="inicio" type="date" className="p-1 w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" defaultValue={formatDate(selectedReserv.fechaInicio)} min={ today}
                                      {...register("fechaInicio",{ required: true, min: today})}/> 
                                      {errors.fechaInicio?.type === "required" && ( <p className="text-red-500" role="alert">este campo es obligatorio</p>)}
                                    </div>
                    
                                    <div className="w-full lg:w-[50%] gap-4] flex flex-col gap-1 items-center   ">
                                      <label className="text-white font-semibold" htmlFor="fin">Fin</label>
                                      <input id="fin" type="date" className="p-1  w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" defaultValue={formatDate(selectedReserv.fechaFin)} min={fechaInicio || today}
                                      {...register("fechaFin",{ required: true,  validate: value => (new Date(value) >= new Date(fechaInicio)) ||"debe ser mayor a fecha inicio"})}/> 
                                      {errors.fechaFin && <p className="text-red-500 text-center">{errors.fechaFin.message}</p>}
                                    </div> 
                    
                                  </div>
                    
                                  <div className="w-[85%] lg:w-[60%] flex flex-col items-center mx-auto ">
                                    <label className="text-white font-semibold" htmlFor="personas" >pasajeros</label>
                                    <input id="personas" type="number" className="w-[50%] p-2 text-center rounded-2xl" defaultValue={selectedReserv.cantidadPersonas}
                                    {...register("cantidadPersonas",{ required: true, min: 1, max: 6})}/> 
                                    {errors.cantidadPersonas?.type === "required" && ( <p className="text-red-500" role="alert">este campo es obligatorio</p>)}
                                  </div>
                    
                                  {selectedReserv?.tourElegido && ( 
                                    <>
                                    <div className="w-[85%] h-auto lg:w-[60%] flex flex-col items-center mx-auto">
                                        {/* <label className="text-white mx-auto font-semibold" htmlFor="peticion">{t('extras')}</label> */}
                                
                                        <label className="text-white mx-auto font-semibold" htmlFor="peticion">
                                        {selectedReserv?.tourElegido?.includes("Sport Fishing")
                                            ? "edita arte de pesca u items de clientes"
                                            : "edita los extras de clientes"}
                                        </label>
                                        
                                        <textarea id="peticion" className="w-[90%] h-[9rem]   mx-auto resize-none rounded-xl text-center  placeholder:italic" defaultValue={selectedReserv.extras}
                                        {...register("extras",{ maxLength: 700})}/>
                                    </div>
                                  </>
                                   )}
                    
                                  <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[85%] lg:w-[60%]">
                                    
                                    <div className=" w-full md:w-[70%] lg:w-[50%] flex flex-col mx-auto">
                                      <input className="w-full  rounded-2xl p-2 text-center  placeholder:italic" placeholder="nombre cliente" defaultValue={selectedReserv.nombre}
                                      {...register("nombre",{required:true, maxLength:50})}/> 
                                      {errors.nombre?.type === "required" && ( <p className="text-red-500 text-center" role="alert">este campo es obligatorio</p>)}
                                    </div>
                                      
                                    <div className=" w-full md:w-[70%] lg:w-[50%] flex flex-col mx-auto">
                                      <input type="tel" className="w-full    rounded-2xl p-2 text-center  placeholder:italic" placeholder="numero celular cliente" defaultValue={selectedReserv.telefono} 
                                      {...register("telefono",{required:true, maxLength:10})}/> 
                                      {errors.telefono?.type === "required" && ( <p className="text-red-500 text-center" role="alert">este campo es obligatorio</p>)}
                                    </div>
                    
                                  </div>
                                  
                                  <input type="email" className="p-2 bg-white rounded-2xl w-[85%] md:w-[60%]  lg:w-[60%] mx-auto text-center" placeholder="ingresa el nuevo correo del cliente"  defaultValue={selectedReserv.correo}
                                   {...register("email",{required:true })}/>
                                   {errors.nombre?.type === "required" && ( <p className="text-red-500 mx-auto" role="alert">Ingresa un correo electronico</p>)}
                                   
                                   {selectedReserv?.tourElegido && (<> 
                                    <div className="mt-6 flex flex-col items-center justify-center gap-2 ">
                                        <p className="text-white font-semibold text-center">seccion agregar hospedaje</p>
                                        <button type="button" className={`px-4 py-2 rounded-md text-white font-semibold transition-all ${hospedaje ? "bg-red-500" : "bg-blue-500"}`}
                                          onClick={handleToggleHospedaje}
                                         
                                        >
                                          {!hospedaje ? "agregar hospedaje": "retirar opcion hospedaje"}
                                          
                                        </button>
                                  </div>
                    
                                  { hospedaje && (
                                   <motion.div  className="w-[85%] lg:w-[60%] flex flex-col mx-auto"
                                   initial={{ opacity: 0, height: 0 }} 
                                   animate={{ opacity: 1, height: "auto" }} 
                                   exit={{ opacity: 0, height: 0 }} 
                                   transition={{ duration: 0.3 }} >
                    
                                      <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-full">
                                        <div className="w-full lg:w-[50%]  flex flex-col gap-1 items-center">
                                            <label className="text-white font-semibold" htmlFor="inicioH">Check in</label>
                                            <input id="inicioH" type="date" className="p-1 w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center" min={ today}
                                            {...register("fechaInicioH",{ required: hospedaje, min: today})}/> 
                                            {errors.fechaInicioH?.type === "required" && ( <p className="text-red-500" role="alert">este campo es obligatorio</p>)}
                                        </div>
                                        <div className="w-full lg:w-[50%] gap-4] flex flex-col gap-1 items-center">
                                            <label className="text-white font-semibold" htmlFor="fechafinH">Check Out</label>
                                            <input id="fechafinH" type="date" className="p-1  w-[70%] lg:w-full bg-white rounded-2xl full mx-auto text-center"  min={ fechaInicioH || today} 
                                            {...register("fechaFinH",{ required: hospedaje,  validate: value => (value > fechaInicioH) || "La fecha de fin debe ser posterior a la de inicio"})}/> 
                                            {errors.fechaFinH && <p className="text-red-500 text-center">{errors.fechaFinH.message}</p>}
                                        </div> 
                                      </div>
                    
                                      <div className="w-full flex flex-col items-center mx-auto ">
                                        <label className="text-white font-semibold" htmlFor="numberH">huspedes</label>
                                        <input id="numberH" type="number" className="w-[50%] p-2 text-center rounded-2xl" 
                                         {...register("cantidadPersonasH",{ required: hospedaje, min: 1})}/>
                                         {errors.cantidadPersonasH?.type === "required" && ( <p className="text-red-500" role="alert">este campo es obligatorio</p>)}
                                      </div>
                    
                                  </motion.div> 
                    
                                )};
                                   </>)}    
                                    
                    
                                  <h2 className="mx-auto text-white font-semibold text-center">metodo de contacto prefereido</h2>
                                  <div className=" mx-auto flex flex-col lg:flex-row gap-4 w-[85%] lg:w-[60%] ">
                    
                                    <div className="w-full md:w-[70%] lg:w-[50%]  flex gap-1 items-center justify-center bg-white p-1 rounded-2xl mx-auto   ">
                                      <input  type="radio" value="whatsapp" id="whatsapp"
                                      {...register("contactMethod", { required: "selecciona una opcion" })}/>
                                      <label htmlFor="whatsapp">Whatsapp</label><br/>
                                    </div>
                    
                                    <div className="w-full md:w-[70%] lg:w-[50%]  flex gap-1 items-center justify-center bg-white p-1 rounded-2xl mx-auto   ">
                                      <input type="radio" value="email" id="email"
                                      {...register("contactMethod", { required: "selecciona una opcion" })}/>
                                      <label htmlFor="email">correo electronico</label><br/>
                                    </div>
                                                  
                                  </div>
                                  {errors.contactMethod && <p className="text-red-500 mx-auto">{errors.contactMethod.message}</p>}
                    
                                  <input type="submit" value="Guardar cambios" className="w-[30%] bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md transition-all mb-5 mx-auto"/>
                    </form>


        </div>
        </>
    )
}

export default FormEditReservationTour;