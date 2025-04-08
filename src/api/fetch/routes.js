import Swal from "sweetalert2";
const apiUrl = process.env.NEXT_PUBLIC_PUBLIC_API_URL;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const toursReservation = async () => {
  try {
    const response = await fetch(`${apiUrl}/tours/toursReservations/`);
    
    // Verifica si la respuesta es exitosa (status 200)
    if (!response.ok) {
      throw new Error('error al obtener los datos');
    }

    // Convierte la respuesta a JSON
    const data = await response.json();

    return data.data; // Devuelve los datos
    

  } catch (error) {
    console.error('Error:', error);
  }
};

export const hotelReservation = async () => {
  try {
    const response = await fetch(`${apiUrl}/hospedaje/ReservationsHotel/`);
    
    // Verifica si la respuesta es exitosa (status 200)
    if (!response.ok) {
      throw new Error('error al obtener los datos');
    }

    // Convierte la respuesta a JSON
    const data = await response.json();

    return data.data; // Devuelve los datos
    

  } catch (error) {
    console.error('Error:', error);
  }
};



export const enviarFormularioContact = async (data , idioma) => {

    try {


      let loadingToast = Swal.fire({
        title: idioma === "es" ? "Enviando mensaje..." : "Sending message...",
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
      });


        const response = await fetch(`${apiUrl}/admin/enviarMensajeContacto`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json" // Especificamos que enviamos JSON
            },
            body: JSON.stringify(data) // Convertimos el objeto a JSON
        });

        Swal.close();

        if (response.ok) {
            const responseData = await response.json();
            Swal.fire({
              title: idioma === "es" ? "Tu mensaje fue enviado!" : "Messagge successfully sent!",
              text: idioma === "es" ? "Te responderemos a la brevedad" : "We will get back to you shortly.",
              icon: "success"
                      })
            
        }else{
            const errorData = await response.json();
                Swal.fire({
                    title: "Oops!",
                    text: errorData.msg,
                    icon: "error",
                });
        }

    
    } catch (error) {
        console.error("Error al enviar la solicitud:", error.message);
    }
};

export const reservationTour = async (data,idioma) => {

  let loadingToast;

  try {

    loadingToast = Swal.fire({
      title: idioma === "es" ? "Creando reservación..." : "Creating reservation...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false, // Deshabilitar clic fuera del modal
      timerProgressBar: true,
      showConfirmButton: false,
    });

      const response = await fetch(`${apiUrl}/tours/createReservationTour`, {
          method: "POST", 
          headers: {
              "Content-Type": "application/json" // Especificamos que enviamos JSON
          },
          body: JSON.stringify(data) // Convertimos el objeto a JSON
      });

      Swal.close();

      if (response.ok) {
          const responseData = await response.json();
          
        return { success: true, message: responseData.msg };
            
      }else{
          const errorData = await response.json();
              
              return { success: false, message: errorData.message };
      }

  
  } catch (error) {
      console.error("Error al enviar la solicitud:", error.message);
  }
};



export const reservationHotel = async (data, idioma) => {
  try {
      Swal.fire({
          title: idioma === "es" ? "Creando reservación..." : "Creating reservation...",
          didOpen: () => Swal.showLoading(),
          allowOutsideClick: false,
          timerProgressBar: true,
          showConfirmButton: false,
      });

      const response = await fetch(`${apiUrl}/hospedaje/crearReservaHospedaje`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });

      Swal.close();

      if (response.ok) {
          const responseData = await response.json();
          Swal.fire({
              title: idioma === "es" ? "¡Listo!" : "Done!",
              text: responseData.mensaje,
              icon: "success",
          });
      } else {
          const contentType = response.headers.get("content-type");
          let errorMessage = idioma === "es" ? "Hubo un error al procesar tu reservación." : "There was an error processing your reservation.";

          if (contentType && contentType.includes("application/json")) {
              const errorData = await response.json();
              errorMessage = errorData.mensaje || errorMessage;
          } else {
              const errorText = await response.text();
              console.error("Respuesta no JSON:", errorText);
          }

          Swal.fire({
              title: idioma === "es" ? "Oops!" : "Oops!",
              text: errorMessage,
              icon: "error",
          });
      }

  } catch (error) {
      console.error("Error al enviar la solicitud:", error.message);
      Swal.fire({
          title: idioma === "es" ? "Error" : "Error",
          text: idioma === "es" ? "No se pudo completar la solicitud." : "Request failed.",
          icon: "error",
      });
  }
};


export const tourByID = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/tours/tourByID/${id}`);
      
      // Verifica si la respuesta es exitosa (status 200)
      if (!response.ok) {
        throw new Error('error al obtener los datos');
      }
  
      // Convierte la respuesta a JSON
      const data = await response.json();
      
      return data.data; // Devuelve los datos
    } catch (error) {
      console.error('Error:', error);
    }
  };

  export const tourByIDEn = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/tours/tourByIDEn/${id}`);
      
      // Verifica si la respuesta es exitosa (status 200)
      if (!response.ok) {
        throw new Error('error al obtener los datos');
      }
  
      // Convierte la respuesta a JSON
      const data = await response.json();
      
      return data.data; // Devuelve los datos
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  export const allTours = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/tours/allTours/`);
      
      // Verifica si la respuesta es exitosa (status 200)
      if (!response.ok) {
        throw new Error('error al obtener los datos');
      }
  
      // Convierte la respuesta a JSON
      const data = await response.json();

      const tours = data.data.filter(tour => 
        tour._id !== id 
      );

      return tours; // Devuelve los datos
      

    } catch (error) {
      console.error('Error:', error);
    }
  };

  export const allToursEn = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/tours/allToursEn/`);
      
      // Verifica si la respuesta es exitosa (status 200)
      if (!response.ok) {
        throw new Error('error al obtener los datos');
      }
  
      // Convierte la respuesta a JSON
      const data = await response.json();

      const tours = data.data.filter(tour => 
        tour._id !== id 
        
      );

      return tours; // Devuelve los datos
      

    } catch (error) {
      console.error('Error:', error);
    }
  };


  export const login = async (data, locale) => {

    try {
      let loadingToast = Swal.fire({
        title:"Iniciado Sesion",
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
      });

        const response = await fetch(`${apiUrl}/admin/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json" // Especificamos que enviamos JSON
            },
            body: JSON.stringify(data) // Convertimos el objeto a JSON
        });

        if (response.ok) {

            const data = await response.json();
            localStorage.setItem("jwtToken", data.data);
            window.location.href = `/${locale}/admin`;
            Swal.close();
            
        }else{
            const errorData = await response.json();
                Swal.fire({
                    title: "Oops!",
                    text: errorData.msg,
                    icon: "error",
                });
        }

    
    } catch (error) {
        console.error("Error al hacer login:", error.message);
    }
};


export const verifyCredentials = async (token, locale) => {

  if(!token){
    window.location.href = `/${locale}`;
  }

  try {
    let loadingToast = Swal.fire({
      title:"Revisando credenciales",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    const response = await fetch(`${apiUrl}/admin/verifyCredentials`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`  // Pasa el token en el header
      }
    });

    Swal.close();

      if (response.ok) {
          const data = await response.json();
          localStorage.setItem("jwtToken", token);
          Swal.fire({
            title: "Listo sesion iniciada",
            text: data.msg,
            icon: "success",
        });
                   
      }else{
          const errorData = await response.json();
              Swal.fire({
                  title: "Oops!",
                  text: errorData.msg,
                  icon: "error",
              });
              window.location.href = `/${locale}`;
      }

  
  } catch (error) {
      console.error("Error al hacer login:", error.message);
  }
};




export const deleteReservationTour = async ( id, token) => {

  // Mostrar la alerta de confirmación
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  });

  // Si el usuario confirma, continuar con la eliminación
  if (result.isConfirmed) {
    let loadingToast = Swal.fire({
      title:"Eliminando reservacion",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      const response = await fetch(`${apiUrl}/tours/deteleReservationTour/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Pasamos el token aquí
        }
      });

      Swal.close();

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      Swal.fire('Eliminado!', 'La reserva ha sido eliminada con éxito.', 'success');
      console.log('Reserva eliminada con éxito:', data);
      return data;

    } catch (error) {
      Swal.fire('Error', `Hubo un error al eliminar la reserva: ${error.message}`, 'error');
      console.error('Error al eliminar:', error.message);
      throw error;
    }
  } else {
    Swal.fire('Cancelado', 'La acción ha sido cancelada', 'info');
  }
};


export const deleteReservationHotel = async ( id, token) => {

  // Mostrar la alerta de confirmación
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  });

  // Si el usuario confirma, continuar con la eliminación
  if (result.isConfirmed) {
    let loadingToast = Swal.fire({
      title:"Eliminando reservacion",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      const response = await fetch(`${apiUrl}/hospedaje/deleteReservaHospedaje/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Pasamos el token aquí
        }
      });

      Swal.close();

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      Swal.fire('Eliminado!', 'La reserva ha sido eliminada con éxito.', 'success');
      console.log('Reserva eliminada con éxito:', data);
      return data;

    } catch (error) {
      Swal.fire('Error', `Hubo un error al eliminar la reserva: ${error.message}`, 'error');
      console.error('Error al eliminar:', error.message);
      throw error;
    }
  } else {
    Swal.fire('Cancelado', 'La acción ha sido cancelada', 'info');
  }
};
  

export const updateReservHotel = async (id, token, updateData) => {

  // console.log(id, token, updateData)
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, actualizar',
    cancelButtonText: 'Cancelar'
  });

  if (result.isConfirmed) {
    let loadingToast = Swal.fire({
      title:"Actualizando reservacion",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      const response = await fetch(`${apiUrl}/hospedaje/editarReservaHospedaje/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Pasamos el token aquí
        },
        body: JSON.stringify(updateData)
      });

      Swal.close();

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.msg}`);
      }

      const data = await response.json();
      Swal.fire('Actualizada!', 'La reserva ha sido actualizada con exito.', 'success');
      return data;

    } catch (error) {
      Swal.fire('Error', `Hubo un error al actualizar la reserva: ${error.message}`, 'error');
      console.error('Error al actualizar:', error.message);
      throw error;
    }
  } else {
    Swal.fire('Cancelado', 'La acción ha sido cancelada', 'info');
  }
};


export const updateReservTour = async (id, token, updateData) => {

  // console.log(id, token, updateData)
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, actualizar',
    cancelButtonText: 'Cancelar'
  });

  if (result.isConfirmed) {
    let loadingToast = Swal.fire({
      title:"Actualizando reservacion",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      const response = await fetch(`${apiUrl}/tours/updateReservationTour/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Pasamos el token aquí
        },
        body: JSON.stringify(updateData)
      });

      Swal.close();

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.msg}`);
      }

      const data = await response.json();
      Swal.fire('Actualizada!', 'La reserva ha sido actualizada con exito.', 'success');
      return data;

    } catch (error) {
      Swal.fire('Error', `Hubo un error al actualizar la reserva: ${error.message}`, 'error');
      console.error('Error al actualizar:', error.message);
      throw error;
    }
  } else {
    Swal.fire('Cancelado', 'La acción ha sido cancelada', 'info');
  }

};


export const updateAnticipoTour = async (id, token, anticipo) => {

  // console.log(id, token, updateData)
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, actualizar',
    cancelButtonText: 'Cancelar'
  });

  if (result.isConfirmed) {
    let loadingToast = Swal.fire({
      title:"Creando Link de pago espere...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      const response = await fetch(`${apiUrl}/tours/updateAnticipoTour/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Pasamos el token aquí
        },
        body: JSON.stringify({anticipo})
      });

      Swal.close();

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.msg}`);
      }

      const data = await response.json();
      Swal.fire('Listo!', 'Link creado con exito.', 'success');
      return data;

    } catch (error) {
      Swal.fire('Error', `Hubo un error al crear el metodo de pago: ${error.message}`, 'error');
      console.error('Error al crear:', error.message);
      throw error;
    }
  } else {
    Swal.fire('Cancelado', 'La acción ha sido cancelada', 'info');
  }
};


export const updateAnticipoHotel = async (id, token, anticipo) => {

  // console.log(id, token, updateData)
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, actualizar',
    cancelButtonText: 'Cancelar'
  });

  if (result.isConfirmed) {
    let loadingToast = Swal.fire({
      title:"Creando Link de pago espere...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      const response = await fetch(`${apiUrl}/hospedaje/updateAnticipoHotel/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Pasamos el token aquí
        },
        body: JSON.stringify({anticipo})
      });

      Swal.close();

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.msg}`);
      }

      const data = await response.json();
      Swal.fire('Listo!', 'Link creado con exito.', 'success');
      return data;

    } catch (error) {
      Swal.fire('Error', `Hubo un error al crear el metodo de pago: ${error.message}`, 'error');
      console.error('Error al crear:', error.message);
      throw error;
    }
  } else {
    Swal.fire('Cancelado', 'La acción ha sido cancelada', 'info');
  }
};

  
 
  



