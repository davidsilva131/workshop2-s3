import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../payment/payment.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Avatar, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../routes/Router";
import { postShop } from "../../services/postShop";

const Payment = () => {
  const navigate = useNavigate();
  const { shop } = useContext(ShopContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateCart = () => {
    if (JSON.stringify(shop) == '{}') {
      navigate('/home')
    }
  }
  useEffect(() => {
    validateCart()
  }, [])

  const onSubmit = async (data) => {
    validateCart()
    let temp = {
      userName: data.name,
      userAddress: data.direccion,
      pizzaId: shop.id,
      quantity: shop.quantity,
      totalPrice: shop.price * shop.quantity
    }
    const response = await postShop(temp)
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
  const total = Math.round((shop.price) * (shop.quantity));
  console.log(total)
  const atras = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="contenedor__todo">
      <div className="boton__salir">
          <button className="boton__salir__pago" onClick={atras}>
                <img src="https://cdn-icons-png.flaticon.com/512/3502/3502452.png" alt="" className="boton__atras"/>
              </button>
              <h2>Carrito de compras</h2>
          </div>
        <form onSubmit={handleSubmit(onSubmit)} className="containerformulario">
          
          
          <div className="card__compra">
            <img src={shop.image} alt="" className="imagen__shop" />
            <div className="contenedor__shop">
              <div className="name__shop">{shop.name}</div>
              <div className="cantidad__shop">x{shop.quantity}</div>
            </div>
            <div>
              <div className="price__shop">${total}</div>
            </div>
          </div>
          <h2>Informacion de pago</h2>
          <label>
            Nombre completo
            <input
              className="form-control my-2"
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("name", { required: true })}
            />
            {errors.name && <span>falta el nombre</span>}
          </label>

          <label>
            Numero de tarjeta
            <input
              className="form-control my-2"
              type="number"
              placeholder="1234 1234 1234 1234"
              {...register("tarjeta", {
                required: true,
                validate: ValidateTarjeta,
              })}
            />
            {errors.tarjeta && (
              <span>El numero ingresado no pertenece a ninguna tarjeta</span>
            )}
          </label>

          <div className="contenedor__fecha">
            <div>
              <label>
                Fecha de vencimiento
                <input
                  className="form-control my-2"
                  type="number"
                  placeholder="MMYY"
                  {...register("fecha", {
                    required: true,
                    validate: ValidateFecha,
                  })}
                />
                {errors.fecha && <span>la fecha ingresada es invalida</span>}
              </label>
            </div>
            <div>
              <label>
                CVV
                <input
                  className="form-control my-2"
                  type="password"
                  placeholder="CVV"
                  {...register("cvv", {
                    required: true,
                    validate: ValidateCvv,
                  })}
                />
                {errors.cvv && <span>El codigo ingresado es incorrecto</span>}
              </label>
            </div>
          </div>
          <label>
            Direccion
            <input
              className="form-control my-2"
              type="street-address"
              placeholder="Direccion"
              {...register("direccion", { required: true })}
            />
            {errors.direccion && <span>falta la direccion</span>}
          </label>

          <button type="submit" className="boton__form">
            Pagar ahora
          </button>
        </form>
      </div>
    </>
  );
};
export default Payment;
