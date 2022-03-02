import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const CompraVenta = () => {
    const [tipoCambio, setTipoCambio] = useState(null)
    const [txtTipoOperacion, setTxtTipoOperacion] = useState("")
    const [txtMontoBtc, setTxtMontoBtc] = useState("")
    const [txtMontoSoles, setTxtMontoSoles] = useState("")

    const txtTipoOperacionOnChange = (event) => {
        setTxtTipoOperacion(event.target.value)
    }

    const txtMontoBtcOnChange = (event) => {
        setTxtMontoBtc(event.target.value)
    }

    const txtMontoSolesOnChange = (event) => {
        setTxtMontoSoles(event.target.value)
    }

    const obtenerTipoCambio = async () => {
        const resp = await fetch("/api/btc")
        const data = await resp.json()
        setTipoCambio(data.tipoCambio[0])
        console.log(data.tipoCambio[0])
    }

    const crearOperacion = async () => {

    }


    useEffect(() => {
        document.title = "Comprar o Vender | Crypto-nita"
        obtenerTipoCambio()
    }, [])
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
                <select className="container" defaultValue={ 0 } onClick={ txtTipoOperacionOnChange } >
                    <option value={ 0 }> ------ Seleccione una opción ------</option>
                    <option value={ "Compra" }>Comprar</option>
                    <option value={ "Venta" }>Vender</option>
                </select>
            <div className="col-9 mx-auto my-2 mt-4">
                <p>Tipo de Cambio: 1 BTC = { (() => {
                    if (txtTipoOperacion == "Compra") {
                        return tipoCambio.valueBuy
                    }
                    else if (txtTipoOperacion == "Venta") {
                        return tipoCambio.valueSell
                    }
                })() } PEN</p>
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