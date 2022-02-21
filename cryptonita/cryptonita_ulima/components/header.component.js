import { useEffect, useState } from "react";

const Header = (props) => {
    const newClient = () => {
        location.href="/registroCliente";
    }
    
    if (props.index == "1") {
        return <header className="row p-2 mb-4">
            <figure className="col-lg-9 m-0">
                <a href="/">
                    <img className="logo" src="/media/cryptonita.png" alt="" />
                </a>
            </figure>
            <div className="col-lg-3 text-center py-sm-4">
                <button className="register-btn" onClick={ newClient }>¡Crea tu Cuenta Aquí!</button>
            </div>
        </header>
    }
    else {
        return <header className="p-2 mb-4 text-center text-lg-start">
        <figure className="">
            <a className="" href="/">
                <img className="logo" src="/media/cryptonita.png" alt="" />
            </a>
        </figure>
    </header>

    }
}

export default Header