import { useEffect, useState } from "react";
import Link from "next/link"

const Header = (props) => {
    const newClient = () => {
        location.href="/registroCliente";
    }
    
    if (props.index == "1") {
        return <header className="row p-2 mb-4 text-center text-lg-start">
            <figure className="col-lg-9 m-0">
                <Link href="/">
                    <img className="logo" src="/media/cryptonita.png" alt="" />
                </Link>
            </figure>
            <div className="col-lg-3 text-center py-sm-4">
                <button className="register-btn" onClick={ newClient }>¡Crea tu Cuenta Aquí!</button>
            </div>
        </header>
    }
    else {
        return <header className="p-2 mb-4 text-center text-lg-start">
        <figure className="">
            <Link className="" href="/">
                <img className="logo" src="/media/cryptonita.png" alt="" />
            </Link>
        </figure>
    </header>

    }
}

export default Header