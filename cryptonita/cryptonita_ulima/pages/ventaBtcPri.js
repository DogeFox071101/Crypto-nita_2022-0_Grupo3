import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect, useState } from "react";

const VentaBtcPri = () => {
    const [txtCuentaBancaria, setTxtCuentaBancaria] = useState("")
    const [operacion, setOperacion] = useState(null)

    const txtCuentaBancariaOnChange = (event) => {
        const txtCuentaBancariaIngresado = event.target.value
        setTxtCuentaBancaria(txtCuentaBancariaIngresado)
    }
    
    const crearOperacion = async () => {
        // Data on LocalStorage
        const dataOnLocal = {
            email : "lgfalconch@gmail.com",
            password : "2f4f13561f3e031d1b5a489627c170df87a132245feb64582e50880995f9c230",
            id : "1"
        }
        // Generación de Operación Temporal
        const mensaje1 = {
            tipoCambio : "12345",
            montoBtc : "0.005",
            tipoOperacion : "Venta",
            idCliente : dataOnLocal.id
        }
        const resp1 = await fetch("/api/operacion", {
            method : "POST",
            body : JSON.stringify(mensaje1)
        })
        const data1 = await resp1.json()
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
        console.log(data.operacion)
    }

    const actualizarOperacionVentaUno = () => {
        const operacionActual = operacion
        console.log(operacionActual)
        operacionActual.cuentaBancaria = txtCuentaBancaria
        setOperacion(operacionActual)
    }

    const subirOperacionIncompleta = async () => {
        console.log(operacion)
        const resp = await fetch("/api/operacion", {
            method : "PUT",
            body : JSON.stringify(operacion)
        })
        const data = await resp.json()
    }
    const buttonNextHandler = async () => {
        //await crearOperacion()
        await obtenerOperacionIncompleta()
        actualizarOperacionVentaUno()
        await subirOperacionIncompleta()
        location.href = "/ventaBtcSeg"
    }
    
    useEffect(() => {
        document.title = "Paso 1 de 3 | Venta de BTC"
    })
    return <div>
        <Header></Header>
        <main class="p-2">
            <div>
                <div class="text-center mb-4">
                    <i class="bi bi-circle-half mx-1"></i>
                    <i class="bi bi-circle mx-1"></i>
                    <i class="bi bi-circle mx-1"></i>
                </div>
                <div class="text-center my-4">
                    <h2>Paso 1 de 3</h2>
                </div>
                <div class="text-center my-4">
                    <h2>¿Donde quieres recibir tu dinero?</h2>
                </div>
                <div class="row col-10 col-sm-8 col-lg-6 mx-auto">
                    <div class="px-0">
                        <label class="form-label">Número de Cuenta:</label>
                    </div>
                    <input class="form-control" type="text" defaultValue={ txtCuentaBancaria } onChange={ txtCuentaBancariaOnChange } />
                    <div class="alert alert-danger mt-2">
                        Aviso: Temporalmente solo aceptamos transferencias a cuentas BCP.
                    </div>
                </div>
                <div class=" row row col-10 col-sm-8 col-lg-6 mx-auto mb-5">
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

export default VentaBtcPri