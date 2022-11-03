import React, { useContext } from "react";
import { UserContext } from "../../routes/Router";
import './home.scss'

function Home() {

    const { user } = useContext(UserContext);

    return (
        <>
            <div className="container">
                <ul className="container__card">
                    <li className="card">
                        <>
                            <img src="https://pizzium.com/wp-content/uploads/2022/02/MARGHERITA-1-300x300.jpg" alt="Pizza image" className="pizzaCard" />
                            <div className="infoProduct">
                                <h3>
                                    Pizza súper especial para Frontends
                                </h3>
                                <button><span>$99</span> MOON</button>
                            </div>
                        </>
                    </li>
                    <li className="card">
                        <>
                            <img src="https://pizzium.com/wp-content/uploads/2022/02/MARGHERITA-1-300x300.jpg" alt="Pizza image" className="pizzaCard" />
                            <div className="infoProduct">
                                <h3>
                                    Pizza súper especial para Frontends
                                </h3>
                                <button><span>$99</span> MOON</button>
                            </div>
                        </>
                    </li>
                    <li className="card">
                        <>
                            <img src="https://pizzium.com/wp-content/uploads/2022/02/MARGHERITA-1-300x300.jpg" alt="Pizza image" className="pizzaCard" />
                            <div className="infoProduct">
                                <h3>
                                    Pizza súper especial para Frontends
                                </h3>
                                <button><span>$99</span> MOON</button>
                            </div>
                        </>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Home;
