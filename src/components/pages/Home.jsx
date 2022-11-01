import React, { useContext } from "react";
import { UserContext } from "../../routes/Router";

function Home() {

    const { user } = useContext(UserContext);

    return (
        <div>Pagina Home</div>
    )
}

export default Home;
