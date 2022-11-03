import React from "react";
import { useForm } from "react-hook-form";
import "../payment/payment.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  const onSubmit = (data) => {
    console.log(data);
    navigate("/procesado");

  };

  const ValidateTarjeta = (value) => {
    if (value.length < 8) {
      return "El numero debería contener al menos 8 caracteres";
    } else if (value.length > 16) {
      return "El numero debe contener menos de 16 de caracteres";
    } else {
      return true;
    }
  };

  const ValidateFecha = (value) => {
    if (value.length < 4) {
      return "El numero debe contener exactamente 4 caracteres";
    } else {
      return true;
    }
  };
  const ValidateCvv = (value) => {
    if (value.length < 3) {
      return "El numero debe contener exactamente 3 caracteres";
    } else {
      return true;
    }
  };



  return (
    <>
      <div className="contenedor__todo">
        <form onSubmit={handleSubmit(onSubmit)} className="containerformulario" >
          <h2>Carrito de compras</h2>
          <div className="card__compra"></div>
          <h2>Informacion de compra</h2>
          <label>
            Nombre completo
            <input
              className="form-control my-2"
              type="text"
              placeholder="Nombre completo"
              {...register("name", { required: true })}
            />
            {errors.name && <span>falta el nombre</span>}
          </label>

          <label>
            Numero de tarjeta
            <input
              className="form-control my-2"
              type="number"
              placeholder="Numero de tarjeta"
              {...register("tarjeta", { required: true, validate: ValidateTarjeta })}
            />
            {errors.tarjeta && <span>El numero ingresado no pertenece a ninguna tarjeta</span>}
          </label>

          <div className="contenedor__fecha">
            <div>
              <label>
                Fecha de vencimiento
                <input
                  className="form-control my-2"
                  type="number"
                  placeholder="Fecha de vencimiento"
                  {...register("fecha", { required: true, validate: ValidateFecha })}

                />
                {errors.fecha && <span>la fecha ingresada es invalida</span>}
              </label>
            </div>
            <div>
              <label>
                CVV
                <input
                  className="form-control my-2"
                  type="number"
                  placeholder="CVV"
                  {...register("cvv", { required: true, validate: ValidateCvv })}
                />
                {errors.cvv && <span>El codigo ingresado es incorrecto</span>}
              </label>
            </div>
          </div>
          <label>
            Direccion
            <input
              className="form-control my-2"
              type="number"
              placeholder="Direccion"
              {...register("direccion", { required: true })}
            />
            {errors.direccion && <span>falta la direccion</span>}
          </label>

          <button type="submit" className="boton__form" >
            Pagar ahora
          </button>
        </form>
      </div>
    </>
  );
};
export default Payment;
