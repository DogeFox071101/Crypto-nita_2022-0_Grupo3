import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect, useState } from "react";

const CompraBtcSeg = () => {
    const [txtCuentaBancaria, setTxtCuentaBancaria] = useState("")
    const [txtCodigoTransaccion, setTxtCodigoTransaccion] = useState("")
    const [operacion, setOperacion] = useState(null)

    const txtCodigoTransaccionOnChange = (event) => {
        const txtCodigoTransaccionIngresado = event.target.value
        setTxtCodigoTransaccion(txtCodigoTransaccionIngresado)
    }

    const txtCuentaBancariaOnChange = (event) => {
        const txtCuentaBancariaIngresado = event.target.value
        setTxtCuentaBancaria(txtCuentaBancariaIngresado)
    }

    const obtenerOperacionIncompleta = async () => {
        const resp = await fetch(`/api/operacion/incomplete/${localStorage.getItem("idCliente")}`)
        const data = await resp.json()
        setOperacion(data.operacion)
        console.log(data.operacion)
    }

    const actualizarOperacionCompraDos = () => {
        const operacionActual = operacion
        operacionActual.codigoTransaccion = txtCodigoTransaccion
        operacionActual.cuentaBancaria = txtCuentaBancaria
        operacionActual.estado = "Pendiente"
        setOperacion(operacionActual)
    }

    const subirOperacionPendiente = async () => {
        localStorage.setItem("ultimaOperacion", operacion.id)
        const resp = await fetch("/api/operacion", {
            method : "PUT",
            body : JSON.stringify(operacion)
        })
        const data = await resp.json()
    }

    const buttonNextHandler = async () => {
        actualizarOperacionCompraDos()
        await subirOperacionPendiente()
        location.href = "/compraBtcTer"
    }

    const cancelOp = () => {
        location.href = "/compraVenta"
    }

    useEffect(() => {
        document.title = "Paso 2 de 3 | Compra de BTC"
        obtenerOperacionIncompleta()
    },[])
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div>
                <div className="text-center mb-4">
                    <i className="bi bi-circle-fill mx-1"></i>
                    <i className="bi bi-circle-half mx-1"></i>
                    <i className="bi bi-circle mx-1"></i>
                </div>
                <div className="text-center my-4">
                    <h2>Paso 2 de 3</h2>
                </div>
                <div className="text-center my-4">
                    <h2>¡Ya casi terminamos!</h2>
                </div>
                <div className="row col-5 mx-auto">
                    <div className="px-0">
                        <label className="form-label" htmlFor="">(1) Número de cuenta bancaria: </label>
                    </div>
                        <input className="form-control" type="text" defaultValue={ txtCuentaBancaria } onChange={ txtCuentaBancariaOnChange } />
                    <div className="px-0 mt-4">
                        <label className="form-label" htmlFor="">(2) Ingresa aquí el código de transacción:</label>
                    </div>
                        <input className="form-control mb-4" type="text" defaultValue={ txtCodigoTransaccion } onChange={ txtCodigoTransaccionOnChange } />
                </div>
                <div className=" row col-5 mx-auto mb-5">
                    <div className="col-6 pe-1 ps-0">
                        <button className="btn btn-success col-12" onClick={ cancelOp }>Cancelar</button>
                    </div>
                    <div className="col-6 ps-1 pe-0">
                        <button className="btn btn-success col-12" onClick={ buttonNextHandler }>Continuar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default CompraBtcSeg