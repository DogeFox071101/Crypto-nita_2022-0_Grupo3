import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const CompraVenta = () => {
    const SolicitarCV = () => {
        if (id == "Comprar")
    }

    useEffect(() => {
        document.title = "Comprar o Vender | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="text-center mt-2 mb-5">
                <h2>¡Vamos a realizar una operación!</h2>
            </div>
            <div className="col-4 mx-auto my-2 mb-3">
                <h6>¿Qué operación desea realizar?</h6>
            </div>
            <div className="col-4 mx-auto my-2">
                <select className="container">
                    <option id="Comprar">Comprar</option>
                    <option id="Vender">Vender</option>
                </select>
            <div className="col-9 mx-auto my-2 mt-4">
                <p>Tipo de Cambio: 1 BTC = 152,795.82 PEN</p>
            </div>
            </div>
            <div className="col-4 mx-auto my-2 mt-4">
                <div className="my-2">
                    <h6>Monto en Bitcoins</h6>
                </div>
                <input className="form-control" type="text" />
                <div className="my-2">
                    <h6>Monto en Soles</h6>
                </div>
                <input className="form-control" type="text" />
                <div className="my-4 row">
                    <div className="col-6 pe-1">
                        <button className="btn btn-success m-2 admin">Solicitar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default CompraVenta