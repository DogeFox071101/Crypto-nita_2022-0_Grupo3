import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect, useState } from "react";

const VentaBtcSeg = () => {
    const [txtCodigoTransaccion, setTxtCodigoTransaccion] = useState("")
    const [operacion, setOperacion] = useState(null)

    const txtCodigoTransaccionOnChange = (event) => {
        const txtCodigoTransaccionIngresado = event.target.value
        setTxtCodigoTransaccion(txtCodigoTransaccionIngresado)
    }

    const obtenerOperacionIncompleta = async () => {
        const dataOnLocal = {
            email : "lgfalconch@gmail.com",
            password : "2f4f13561f3e031d1b5a489627c170df87a132245feb64582e50880995f9c230",
            id : "1"
        }
        const resp = await fetch(`/api/operacion/incomplete/${dataOnLocal.id}`)
        const data = await resp.json()
        setOperacion(data.operacion)
    }

    const actualizarOperacionVentaDos = () => {
        const operacionActual = operacion
        console.log(operacionActual)
        operacionActual.codigoTransaccion = txtCodigoTransaccion
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
        //await crearOperacion()
        await obtenerOperacionIncompleta()
        actualizarOperacionVentaDos()
        await subirOperacionPendiente()
        location.href = "/ventaBtcTer"
    }

    useEffect(() => {
        document.title = "Paso 2 de 3 | Venta de BTC"
    })
    return <div>
        <Header></Header>
        <main class="p-2 mt-4">
            <div>
                <div class="text-center mb-4">
                    <i class="bi bi-circle-fill mx-1"></i>
                    <i class="bi bi-circle-half mx-1"></i>
                    <i class="bi bi-circle mx-1"></i>
                </div>
                <div class="text-center my-4">
                    <h2>Paso 2 de 3</h2>
                </div>
                <div class="text-center my-4">
                    <h2>¡Ya casi terminamos!</h2>
                </div>
                <div class="row col-10 col-sm-8 col-lg-6 mx-auto">
                    <div class="px-0">
                        <label class="form-label">(1) Realiza el depósito en Bitcoins a nuestro monedero:</label>
                    </div>
                    <div>
                        bc1qrdguxfracak6x36hs70j7zyx7vrdy4x0vgwcpq
                    </div>
                    <div class="px-0 mt-4">
                        <label class="form-label">(2) Ingresa aquí el código de transacción:</label>
                    </div>
                    <input class="form-control mb-4" type="text" defaultValue={ txtCodigoTransaccion } onChange={ txtCodigoTransaccionOnChange } />
                </div>
                <div class=" row col-10 col-sm-8 col-lg-6 mx-auto mb-5">
                    <div class="col-6 pe-1 ps-0">
                        <button class="btn btn-success col-12">Regresar</button>
                    </div>
                    <div class="col-6 ps-1 pe-0">
                        <button class="btn btn-success col-12" onClick={ buttonNextHandler }>Continuar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default VentaBtcSeg