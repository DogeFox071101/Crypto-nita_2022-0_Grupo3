import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const CompraVenta = () => {
    const [idCliente, setIdCliente] = useState("")
    const [tipoCambio, setTipoCambio] = useState(null)
    const [txtTipoOperacion, setTxtTipoOperacion] = useState("")
    const [txtMontoBtc, setTxtMontoBtc] = useState("")
    const [txtMontoSoles, setTxtMontoSoles] = useState("")
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    const txtTipoOperacionOnChange = (event) => {
        setTxtTipoOperacion(event.target.value)
    }

    const obtenerTipoCambio = async () => {
        const resp = await fetch("/api/btc")
        const data = await resp.json()
        setTipoCambio(data.tipoCambio[0])
    }

    let toAmount, fromAmount
    if (txtTipoOperacion == "Compra") {
        if (amountInFromCurrency) {
            fromAmount = amount
            toAmount = amount * tipoCambio.valueBuy
            //setTxtMontoSoles(toAmount)
        }
        else {
            toAmount = amount
            fromAmount = amount / tipoCambio.valueBuy
            //setTxtMontoBtc(fromAmount)
        }
    }
    else if (txtTipoOperacion == "Venta") {
        if (amountInFromCurrency) {
            fromAmount = amount
            toAmount = amount * tipoCambio.valueSell
            //setTxtMontoSoles(toAmount)
        }
        else {
            toAmount = amount
            fromAmount = amount / tipoCambio.valueSell
            //setTxtMontoBtc(fromAmount)
        }
    }

    const handleFromAmountChange = (e) => {
        setAmount(e.target.value)
        setTxtMontoBtc(e.target.value)
        setAmountInFromCurrency(true)
    }

    const handleToAmountChange = (e) => {
        setAmount(e.target.value)
        setTxtMontoSoles(e.target.value)
        setAmountInFromCurrency(false)
    }

    const valorMontoBtc = () => {
        if (amountInFromCurrency) {
            return (amount)
        }
        else{
            if (txtTipoOperacion == "Venta") {
                return (amount*1.0/tipoCambio.valueSell)
            }
            else {
                return (amount*1.0/tipoCambio.valueBuy)
            }
        }
    }

    const tipoCambioActual = () => {
        if (txtTipoOperacion == "Compra") {
            return tipoCambio.valueBuy
        }
        else {
            return tipoCambio.valueSell
        }
    }

    const obtenerIdCliente = async () => {
        const loginData = JSON.parse(localStorage.getItem("lastDataLogin"))
        const emailCliente = loginData.email
        const res = await fetch(`/api/obtenerCliente/${emailCliente}`)
        const data = await res.json()
        setIdCliente(data.cliente.id)
        localStorage.setItem("idCliente", data.cliente.id)
    }

    const crearOperacion = async () => {
        const mensaje = {
            tipoCambio : tipoCambioActual(),
            montoBtc : valorMontoBtc(),
            tipoOperacion : txtTipoOperacion,
            idCliente : idCliente
        }
        console.log(mensaje)
        const resp = await fetch("/api/operacion", {
            method: "POST",
            body: JSON.stringify(mensaje)
        })
        if (txtTipoOperacion == "Compra") {
            location.href = "/compraBtcPri"
        }
        else {
            location.href = "/ventaBtcPri"
        }
    }

    const buttonIniciarOperacion = () => {
        crearOperacion()
    }

    useEffect(() => {
        document.title = "Comprar o Vender | Crypto-nita"
        obtenerTipoCambio()
        obtenerIdCliente()
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
                <select className="container" defaultValue={0} onClick={txtTipoOperacionOnChange} >
                    <option value={0}> ------ Seleccione una opción ------</option>
                    <option value={"Compra"}>Comprar</option>
                    <option value={"Venta"}>Vender</option>
                </select>
                <div className="col-9 mx-auto my-2 mt-4">
                    <p>Tipo de Cambio: 1 BTC =
                        {
                            (() => {
                                if (txtTipoOperacion == "Compra") {
                                    return " S/ " + tipoCambio.valueBuy
                                }
                                else if (txtTipoOperacion == "Venta") {
                                    return " S/ " + tipoCambio.valueSell
                                }
                            })()
                        }
                    </p>
                </div>
            </div>
            <div className="col-4 mx-auto my-2 mt-4">
                <div className="my-2">
                    <h6>Monto en Bitcoins</h6>
                </div>
                <input className="form-control" type="number" value={fromAmount} onChange={handleFromAmountChange} />
                <div className="my-2">
                    <h6>Monto en Soles</h6>
                </div>
                <input className="form-control" type="number" value={toAmount} onChange={handleToAmountChange} />
                <div className="my-4 row">
                    <div className="col-6 pe-1">
                        <button className="btn btn-success m-2 admin" onClick={ buttonIniciarOperacion }>Solicitar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default CompraVenta