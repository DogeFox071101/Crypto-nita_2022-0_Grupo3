import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const ListaOperaciones = () => {
    useEffect(() => {
        document.title = "Lista de Operaciones | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-sm-4">
            <div className="row mb-4">
                <h2 className="col-12 col-sm-8 text-center text-sm-start list-title">Listado de Operaciones</h2>
                <h2 className="col-12 col-sm-4 text-center text-sm-end my-auto list-size mt-2 mt-sm-0">Monto Total (BTC): <i class="bi bi-currency-bitcoin"></i>542</h2>
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
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-link">Editar</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-link">Editar</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-link">Editar</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-link">Editar</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-link">Editar</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-link">Editar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default ListaOperaciones