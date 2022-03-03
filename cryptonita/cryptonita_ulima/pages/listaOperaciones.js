import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const ListaOperaciones = () => {
    const [listaOperaciones, setListaOperaciones] = useState([])
    const [totalOperaciones, setTotalOperaciones] = useState(0.0)

    const editarOperacion = (operacion) => {
        localStorage.setItem("idOperacionEdit", operacion.id)
        location.href = "/editarOperacion"
    }

    const obtenerListaDeOperaciones = async () => {
        const resp = await fetch("/api/operacion")
        const data = await resp.json()
        setListaOperaciones(data.operaciones)
        setTotalOperaciones(data.total)
        console.log(data.operaciones)
    }
    
    useEffect(() => {
        document.title = "Lista de Operaciones | Crypto-nita"
        obtenerListaDeOperaciones()
    }, [])
    return <div>
        <Header></Header>
        <main className="p-2 mt-sm-4">
            <div className="row mb-4">
                <h2 className="col-12 col-sm-8 text-center text-sm-start list-title">Listado de Operaciones</h2>
                <h2 className="col-12 col-sm-4 text-center text-sm-end my-auto list-size mt-2 mt-sm-0">Monto Total (BTC): <i className="bi bi-currency-bitcoin"></i>{ totalOperaciones }</h2>
            </div>
            <div className="col-12 mx-auto my-2 table-responsive">
                <table className="table table-stripped table-bordered list-table">
                    <thead>
                        <tr>
                            <th>ID de Operación</th>
                            <th>Fecha y Hora</th>
                            <th>Cliente</th>
                            <th>Tipo de Operación</th>
                            <th>Tipo de Cambio</th>
                            <th>Monto</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaOperaciones.map((operacion) => {
                                return <tr key={ operacion.id }>
                                    <td>{ operacion.id }</td>
                                    <td>{ operacion.createdAt }</td>
                                    <td>{ operacion.idCliente + " - " + operacion.apellidos + ", " + operacion.nombre }</td>
                                    <td>{ operacion.tipoOperacion }</td>
                                    <td>{ operacion.tipoCambio }</td>
                                    <td>{ operacion.montoBtc }</td>
                                    <td><button className="btn btn-link" onClick={ () => {
                                        editarOperacion(operacion)
                                    } }>Editar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default ListaOperaciones