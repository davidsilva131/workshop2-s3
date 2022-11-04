import { Avatar, Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { PizzasContext, ShopContext } from "../../routes/Router";
import './pizza.scss'


const Pizza = () => {
  const [load, setLoad] = useState(false)
  const { name } = useParams()
  const { setShop } = useContext(ShopContext)
  const { pizzas } = useContext(PizzasContext)
  const [pizza, setPizza] = useState({})
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    getPizzaInfo()
  }, []);

  const pago = () => {
    let temp = {
      ...pizza,
      quantity: count
    }
    setShop(temp)
    navigate("/payment");
  };

  const getPizzaInfo = () => {
    let tempPizza = pizzas.find((pizza) => pizza.name === name.toUpperCase())
    setLoad(true)
    setPizza(tempPizza)
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleLess = () => {
    if (count > 1) {
      let temp = count;
      setCount(temp - 1)
    }
  }

  const handlePlus = () => {
    let temp = count;
    setCount(temp + 1)
  }


  return (
    <>
      {load && (
        <div className="body">
          <div className="main">
            <section className="main__header" style={{ backgroundImage: `url(${pizza.image})` }}>
              <div className="main__goBack" onClick={handleGoBack}>
                <span><img src="https://qualityhomescostacalida.com/assets/layout/chevron-left.png" width="35px" /></span>Todas las pizzas
              </div>
            </section>
            <div className="main__contentContainer">
              <section className="main__info container">
                <h1>{pizza.name}</h1>
                <div className="main__chips">
                  <button className="main__chips1">${pizza.price} </button>
                  <button className="main__chips2">⭐ {pizza.review.length} Reviews</button>
                </div>
                <h3>Descripción</h3>
                <p>
                  {pizza.description}
                </p>
              </section>
              <section className="main__reviews container">
                {
                  pizza.review.map((review, index) =>
                    <article key={index} className="main__review">
                      <div className="main__avatarContainer"><Avatar alt="Remy Sharp" src={pizza.review.userImage} /></div>
                      <div className="main__reviewInfo">
                        <span>{review.userName}</span>
                        <Rating name="read-only" value={review.rating} size="small" readOnly />
                        <p>{review.comment}</p>
                      </div>
                    </article>
                  )
                }
              </section>
            </div>
          </div>
          <div className="buySection">
            <div className="buySection__container container">
              <div className="buySection__counter">
                <button onClick={handleLess}>-</button>
                <span>{count}</span>
                <button onClick={handlePlus}>+</button>
              </div>
              <button className="buySection__cartButton">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie2UMVLDMBBF9zOcIQVpoYMiNTAcD07DFQIToMBQQgMtLkKZ9I8CMSMrayIc2QNMfqPxSvufdi3JbKvfKGAEPLCqChiVAIyBS2DhQHK1CB7jXKiAx28MG9WFLlRr1isHPAkJNbC3Ydfq4DVJ53ecnKMwTiXVXcGS3szsOnwe5oD3w/jaFRrpJYwHBbz+i4DbzhcnX7MvniIwQxQoSWb+4RpEMfhmAN7MjQJXPf7facxKW/3UstNjMzvtGHO9d5PJZy9D0p2ZWXz+cmNt3mnFLriQGhXntrqE2iuWNDez9x6gc0kNX+8e99HuFc/0cJl9tvssDgAnFr1yP4lFnmvBXsXexc+NuZ5eq6uW5E10n7UKuACWBV6rJXDeQyFb/QF9ALYLHHR5OwtgAAAAAElFTkSuQmCC"
                  alt="cart icon"
                />
              </button>
              <button className="buySection__buyButton" onClick={pago}>Pagar</button>
            </div>
          </div>
        </div>
      )

      }
    </>
  );
};

export default Pizza;
