import Swal from "sweetalert2";
const apiUrl = process.env.NEXT_PUBLIC_PUBLIC_API_URL;


export const enviarFormularioContact = async (data) => {

    try {
        const response = await fetch(`${apiUrl}/admin/enviarMensajeContacto`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json" // Especificamos que enviamos JSON
            },
            body: JSON.stringify(data) // Convertimos el objeto a JSON
        });

        if (response.ok) {
            const responseData = await response.json();
            Swal.fire({
                title: "Listo!",
                text: responseData.msg,
                icon: "success",  
              });
            
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
        tour._id !== id &&
        tour.title !== "Sport Fishing OffShore" && 
        tour.title !== "Sport Fishing InShore" && 
        tour.title !== "Nado con Marlin"
      );


      console.log(tours)
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
        tour._id !== id &&
        tour.title !== "Sport Fishing OffShore" && 
        tour.title !== "Sport Fishing InShore" && 
        tour.title !== "Swim with Marlin"
      );


      console.log(tours)
      return tours; // Devuelve los datos
      

    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
 
  



