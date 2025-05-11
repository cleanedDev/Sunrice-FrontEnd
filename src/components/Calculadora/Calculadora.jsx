import React, { useState } from 'react';



function Calculadora({openCalc, setOpenCalc}){
    const [anticipo, setAnticipo] = useState('');
  const [montoTotal, setMontoTotal] = useState(0);
  const [comision, setComision] = useState(0);
  const [montoCentavos, setMontoCentavos] = useState(0);

  const TASA_COMISION = 4.1 / 100;
  const TARIFA_FIJA = 4;
  const IMPUESTO_FIJO = 16 / 100;

  const calcularMonto = (valor) => {
    const anticipoNum = Number(valor);
    if (isNaN(anticipoNum) || anticipoNum <= 0) {
      setMontoTotal(0);
      setComision(0);
      setMontoCentavos(0);
      return;
    }

    let total = (anticipoNum + TARIFA_FIJA) / (1 - (TASA_COMISION * (1 + IMPUESTO_FIJO)));
    total = parseFloat(total.toFixed(2));
    const comisionStripe = parseFloat((total * TASA_COMISION + TARIFA_FIJA).toFixed(2));
    const totalCentavos = Math.round(total * 100);

    setMontoTotal(total);
    setComision(comisionStripe);
    setMontoCentavos(totalCentavos);
  };


    return(
        <>


      <div className="  w-[100%] h-[80%] p-12 mt-10 text-white overflow-auto border">
        <div className=' flex flex-col  md:flex md:justify-around'>
        <h2 className="text-2xl mb-6 font-bold">Calculadora</h2>
        <button className='bg-red-500 p-2 rounded-xl' onClick={() => setOpenCalc(!openCalc)}>Cerrar</button>

        </div>
        
        <div className="mb-4">
          <label htmlFor="anticipo" className="block text-sm font-medium mb-2">
            Anticipo
          </label>
          <input
            type="number"
            id="anticipo"
            value={anticipo}
            onChange={(e) => {
              const val = e.target.value;
              setAnticipo(val);
              calcularMonto(val);
            }}
            className="w-full p-2 rounded text-black"
            placeholder="Ingresa el anticipo"
          />
        </div>

        <div className="mt-6 ">
          <p><strong>Monto total a cobrar:</strong> ${montoTotal}</p>
          {/* <p><strong>Comisión Stripe estimada:</strong> ${comision}</p> */}
          {/* <p><strong>Monto total en centavos:</strong> {montoCentavos} ¢</p> */}
        </div>
      </div>
    


        </>
    )
}


export default Calculadora;