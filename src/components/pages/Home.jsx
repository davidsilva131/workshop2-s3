import React, { useContext, useEffect, useState } from "react";
import { PizzasContext } from "../../routes/Router";
import { getPizzas } from "../../services/getApiInfo";
import './home.scss'
import cupon from '../images/cupon.png'

function Home() {

    const { pizzas, setPizzas } = useContext(PizzasContext);

    useEffect(() => {
        getPizzasInfo()
    }, []);

    const [load, setLoad] = useState(false)

    const getPizzasInfo = async () => {
        const [response] = await Promise.all([getPizzas()])
        setPizzas(response)
        setLoad(true)
    }

    return (
        <>
        <div className="contenedor__cupon">
        <img src={cupon} alt="" className="home__cupon"/>
        <img src={cupon} alt="" className="home__cupon" />
        <img src={cupon} alt="" className="home__cupon"/>
        </div>
            <div className="container">
                {
                    load ?
                        (
                            <ul className="container__card">
                                {
                                    pizzas.map((pizza, index) =>
                                        <li key={index} className="card">
                                            <img src={pizza.image} alt="Pizza image" className="pizzaCard" />
                                            <div className="infoProduct">
                                                <h3>
                                                    {pizza.description}
                                                </h3>
                                                <button><span>${pizza.price}</span></button>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        ) :
                        (
                            <div>Cargando</div>
                        )
                }

            </div>
        </>

    )
}

export default Home;
