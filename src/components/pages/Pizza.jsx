import { Avatar, Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { PizzasContext, ShopContext } from "../../routes/Router";
import './pizza.scss'


const Pizza = () => {
  const [load, setLoad] = useState(false)
  const { name } = useParams()
  const { pizzas } = useContext(PizzasContext)
  const { setShop } = useContext(ShopContext)
  const [pizza, setPizza] = useState({})
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    getPizzaInfo()
  }, []);

  const getPizzaInfo = () => {
    let tempPizza = pizzas.find((pizza) => pizza.name === name.toUpperCase())
    tempPizza = {
      ...tempPizza,
      review: [
        {
          id: 1,
          menuId: 1,
          userName: 'Gustavo Silva',
          userImage: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=",
          rating: 1,
          comment: 'taba fea'
        },
        {
          id: 2,
          menuId: 1,
          userName: 'Juan David Silva',
          userImage: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=",
          rating: 1,
          comment: 'lo de arriba x2'
        }
      ]
    }
    setLoad(true)
    setPizza(tempPizza)
    console.log(tempPizza);
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleLess = () => {
    if (count > 1) {
      let tempCount = count;
      setCount(tempCount - 1)
    }
  }

  const handlePlus = () => {
    let tempCount = count;
    setCount(tempCount + 1)
  }

  const handlePay = () => {
    let shop = {
      ...pizza,
      quantity: count
    };
    setShop(shop)
    navigate('payment')
  }

  return (
    <>
      {load && (
        <div className="body">
          <div className="main">
            <section className="main__header" style={{ backgroundImage: `url(${pizza.image})` }}>
              <div className="main__goBack">
                <span onClick={handleGoBack}><img src="https://qualityhomescostacalida.com/assets/layout/chevron-left.png" width="35px" /></span>Todas las pizzas
              </div>
            </section>
            <div className="main__contentContainer">
              <section className="main__info container">
                <h1>{pizza.name}</h1>
                <div className="main__chips">
                  <button className="main__chips1">${pizza.price} </button>
                  <button className="main__chips2">⭐ 2 Reviews</button>
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
              <button onClick={handlePay} className="buySection__buyButton">Pagar</button>
            </div>
          </div>
        </div>
      )

      }
    </>
  );
};

export default Pizza;
