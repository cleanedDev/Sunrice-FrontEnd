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
              
              return { success: false, message: errorData.msg };
      }

  
  } catch (error) {
      console.error("Error al enviar la solicitud:", error.message);
  }
};

export const reservationHotel = async (data, idioma) => {

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


      const response = await fetch(`${apiUrl}/hospedaje/crearReservaHospedaje/`, {
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
            title: "Listo!",
            text: responseData.msg,
            icon: "success",
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

    const response = await fetch("http://localhost:3001/admin/verifyCredentials", {
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
  
  
 
  



