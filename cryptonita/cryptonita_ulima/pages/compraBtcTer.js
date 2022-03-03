import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect, useState } from "react";

const CompraBtcTer = () => {
    const [ultimaOperacion, setUltimaOperacion] = useState("")
    const [fechaOperacion, setFechaOperacion] = useState("")

    const buttonFinalizar = () => {
        localStorage.removeItem("ultimaOperacion")
        location.href = "/panelCliente"
    }

    useEffect(() => {
        document.title = "Paso 3 de 3 | Compra de BTC"
        const lastOperation = localStorage.getItem("ultimaOperacion")
        setUltimaOperacion(lastOperation)
        setFechaOperacion()
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
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
                <div className="row col-6 mx-auto">
                    <div className="px-0 mb-4">
                        ¡Operación realizada exitosamente!
                    </div>
                    <div className="px-0">
                        <label className="form-label" htmlFor="">Número de operación: </label>
                    </div>
                    <div className="mb-3 px-0">
                    {
                        (() => {
                            return ultimaOperacion
                        })()
                    }
                    </div>
                    <div className="px-0 mt-4">
                        <label className="form-label" htmlFor="">Fecha de operación:</label>
                    </div>
                    <div className="mb-3 px-0">
                    {
                        (() => {
                            return fechaOperacion
                        })()
                    }
                    </div>
                </div>
                <div className=" row col-6 mx-auto mb-5">
                    <div className="col-12 px-0">
                        <button className="btn btn-success col-12" onClick={ buttonFinalizar }>Finalizar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default CompraBtcTer