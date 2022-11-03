import React from 'react'
import '../payment/procesado.scss'
import { useNavigate } from "react-router-dom";

const Procesado = () => {
  const navigate = useNavigate()
    const home = () => {
        navigate("/home");
      }; 
  return (
    <>
    <div className='contenedor__procesado'>
    <div>
    <img src="https://i.pinimg.com/originals/27/f2/62/27f262313d1cf187b3a7d19e1ee1f523.gif" alt="" className='prueba'/>
    </div>
    
    <p className='titulo__procesado'>Tu pedido esta en proceso</p>
    <p>Seras notificado cuando llegue el repartidor</p>
    <button type="submit" className="boton__procesado" onClick={home}>
            Aceptar
          </button>
    </div>
    
    </>
  )
}
export default Procesado;