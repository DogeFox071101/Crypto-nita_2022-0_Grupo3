import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect, useState } from "react";

const CompraBtcPri = () => {
    const [txtMonedero, setTxtMonedero] = useState("")
    const[operacion, setOperacion] = useState(null)

    const txtMonederoOnChange = (event) => {
        const txtMonederoIngresado = event.target.value
        setTxtMonedero(txtMonederoIngresado)
    }

    const obtenerOperacionIncompleta = async () => {   
        const resp = await fetch(`/api/operacion/incomplete/${localStorage.getItem("idCliente")}`)
        const data = await resp.json()
        setOperacion(data.operacion)
        console.log(data.operacion)
    }

    const actualizarOperacionCompraUno = () => {
        const operacionActual = operacion
        operacionActual.monedero = txtMonedero
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
        actualizarOperacionCompraUno()
        await subirOperacionIncompleta()
        location.href = "/compraBtcSeg"
    }

    const cancelOp = () => {
        location.href = "/compraVenta"
    }

    useEffect(() => {
        document.title = "Paso 1 de 3 | Compra de BTC"
        obtenerOperacionIncompleta()
    },[])
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
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
                <div className="row col-5 mx-auto">
                    <div className="px-0">
                        <label className="form-label" htmlFor="">Recibe tu cambio en bitcoins en tu monedero:</label>
                    </div>
                    <input className="form-control" type="text" defaultValue={ txtMonedero } onChange={ txtMonederoOnChange } />
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

export default CompraBtcPri