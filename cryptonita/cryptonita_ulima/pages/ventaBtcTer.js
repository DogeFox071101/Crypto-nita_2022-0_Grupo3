import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { Component, useEffect, useState } from "react";

const VentaBtcTer = () => {
    const [ultimaOperacion, setUltimaOperacion] = useState("")
    const [resultadoSoles, setResultadoSoles] = useState(0.0)
    
    const calcularOperacionSoles = async () => {
        
        const resp = await fetch(`/api/operacion/id/${ultimaOperacion}`)
        const data = await resp.json()
        const montoBtc = parseFloat(data.operacion.montoBtc)
        const tipoCambio = parseFloat(data.operacion.tipoCambio)
        const resultado = montoBtc*tipoCambio
        setResultadoSoles(resultado)
    }

    const buttonFinalizar = () => {
        localStorage.removeItem("ultimaOperacion")
        location.href = "/panelCliente"
    }

    useEffect(() => {
        document.title = "Paso 3 de 3 | Venta de BTC"
        const lastOperation = localStorage.getItem("ultimaOperacion")
        setUltimaOperacion(lastOperation)
        calcularOperacionSoles()
    })
    return <div>
        <Header></Header>
        <main className="p-2">
            <div>
                <div className="text-center mb-4">
                    <i className="bi bi-circle-fill mx-1"></i>
                    <i className="bi bi-circle-fill mx-1"></i>
                    <i className="bi bi-circle-half mx-1"></i>
                </div>
                <div className="text-center my-4">
                    <h2>Paso 3 de 3</h2>
                </div>
                <div className="text-center my-4">
                    <h2>¡Ahora es nuestro turno!</h2>
                </div>
                <div className="row col-10 col-sm-8 col-lg-6 mx-auto">
                    <div className="px-0 mb-4">
                        Puedes revisar los datos de tu transacción. Dentro de breve verificaremos la operación y transferiremos el monto correspondiente.
                    </div>
                    <div className="px-0">
                        <label className="form-label">Número de transacción: </label>
                    </div>
                    <div className="mb-3 px-0">
                    {
                        (() => {
                            return ultimaOperacion
                        })()
                    }
                    </div>
                    <div className="px-0 mt-4">
                        <label className="form-label">Monto en soles operado:</label>
                    </div>
                    <div className="mb-3 px-0">
                    {
                        (() => {
                            
                            return "S/ " + resultadoSoles
                        })()
                    }
                    </div>
                </div>
                <div className=" row col-10 col-sm-8 col-lg-6 mx-auto mb-5">
                    <div className="col-12 px-0">
                        <button className="btn btn-success col-12" onClick={ buttonFinalizar }>Finalizar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default VentaBtcTer