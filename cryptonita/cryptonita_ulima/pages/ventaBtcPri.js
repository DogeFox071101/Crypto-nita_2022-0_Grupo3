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

    const obtenerOperacionIncompleta = async () => {   
        const resp = await fetch(`/api/operacion/incomplete/${localStorage.getItem("idCliente")}`)
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
        
        actualizarOperacionVentaUno()
        await subirOperacionIncompleta()
        location.href = "/ventaBtcSeg"
    }

    const cancelOp = () => {
        location.href = "/compraVenta"
    }
    
    useEffect(() => {
        document.title = "Paso 1 de 3 | Venta de BTC"
        obtenerOperacionIncompleta()
    },[])
    return <div>
        <Header></Header>
        <main className="p-2">
            <div>
                <div className="text-center mb-4">
                    <i className="bi bi-circle-half mx-1"></i>
                    <i className="bi bi-circle mx-1"></i>
                    <i className="bi bi-circle mx-1"></i>
                </div>
                <div className="text-center my-4">
                    <h2>Paso 1 de 3</h2>
                </div>
                <div className="text-center my-4">
                    <h2>¿Donde quieres recibir tu dinero?</h2>
                </div>
                <div className="row col-10 col-sm-8 col-lg-6 mx-auto">
                    <div className="px-0">
                        <label className="form-label">Número de Cuenta:</label>
                    </div>
                    <input className="form-control" type="text" defaultValue={ txtCuentaBancaria } onChange={ txtCuentaBancariaOnChange } />
                    <div className="alert alert-danger mt-2">
                        Aviso: Temporalmente solo aceptamos transferencias a cuentas BCP.
                    </div>
                </div>
                <div className=" row row col-10 col-sm-8 col-lg-6 mx-auto mb-5">
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

export default VentaBtcPri