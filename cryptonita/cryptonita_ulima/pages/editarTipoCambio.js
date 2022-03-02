import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const EditarTipoCambio = () => {
    const [precioCompraNotMinor, setPrecioCompraNotMinor] = useState(false)
    const [txtPrecioCompra, setTxtPrecioCompra] = useState("")
    const [txtPrecioVenta, setTxtPrecioVenta] = useState("")
    const [numPrecioCompra, setNumPrecioCompra] = useState(0)
    const [numPrecioVenta, setNumPrecioVenta] = useState(0)

    const gotoPadmin = () => {
        location.href = "/panelAdmin"
    }
    
    const txtPrecioCompraOnChange = (event) => {
        const txtPrecioCompraIngresado = event.target.value
        setTxtPrecioCompra(txtPrecioCompraIngresado)
        setNumPrecioCompra(parseFloat(txtPrecioCompraIngresado))
    }

    const txtPrecioVentaOnChange = (event) => {
        const txtPrecioVentaIngresado = event.target.value
        setTxtPrecioVenta(txtPrecioVentaIngresado)
        setNumPrecioVenta(parseFloat(txtPrecioVentaIngresado))
    }
/*
    const precioCompraVSprecioVenta = () => {
        if (txtPrecioCompra != "" || txtPrecioVenta != "") {
            const intPC = parseFloat(txtPrecioCompra)
            const intPV = parseFloat(txtPrecioVenta)
            if (intPC > intPV) {
                setPrecioCompraNotMinor(true)
            }
            else {
                setPrecioCompraNotMinor(false)
            }
        }
    }
*/
    const aplicarCambios = async () => {
        if (numPrecioCompra < numPrecioVenta) {
            const mensaje = {
                precioCompra : txtPrecioCompra,
                precioVenta : txtPrecioVenta
            }
            const resp = await fetch("/api/btc", {
                method : "POST",
                body : JSON.stringify(mensaje)
            })
            const data = await resp.json()
        }
        else {
            setPrecioCompraNotMinor(true)
        }
    }

    useEffect(() => {
        document.title = "Editar Tipo de Cambio | Crypto-nita"
        
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="text-center mt-2 mb-4">
                <h2>Editar Tipo de Cambio</h2>
            </div>
            <div className="col-10 col-sm-7 col-lg-4 mx-auto my-2">
                <div className="my-2">
                    <label className="form-label">Precio de Compra: (1 BTC)</label>
                </div>
                <input className="form-control" type="text" defaultValue={ txtPrecioCompra } onChange={ txtPrecioCompraOnChange } />
                <div className="my-2">
                    <label className="form-label">Precio de Venta: (1 BTC)</label>
                </div>
                <input className="form-control" type="text" defaultValue={ txtPrecioVenta } onChange={ txtPrecioVentaOnChange } />
                {
                    (() => {
                        if (precioCompraNotMinor) {
                            return <div className="alert alert-danger mt-3">Error: El precio de venta debe ser mayor al precio de compra.</div>
                        }
                    })()
                }
                <div className="my-4 row">
                    <div className="col-sm-6 pe-sm-1 mb-1 mb-sm-0">
                        <button className="btn btn-success col-12" onClick={ gotoPadmin }>Cancelar</button>
                    </div>
                    <div className="col-sm-6 ps-sm-1 mt-1 mt-sm-0">
                        <button className="btn btn-success col-12" onClick={ aplicarCambios }>Aplicar Cambios</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default EditarTipoCambio