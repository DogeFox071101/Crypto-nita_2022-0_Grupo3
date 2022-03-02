import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const HistorialOperaciones = () => {
    useEffect(() => {
        document.title = "Historial de Operaciones | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="row mt-2 mb-4">
                <h2 className="col-8">Historial de Operaciones</h2>
                <h4 className="col-4 text-end my-auto">Monto Total (BTC): <i className="bi bi-currency-bitcoin"></i>542</h4>
            </div>
            <div className="col-12 mx-auto my-2">
                <table className="table table-stripped table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th>ID de Operación</th>
                            <th>Fecha y Hora</th>
                            <th>Tipo de Operación</th>
                            <th>Tipo de Cambio</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default HistorialOperaciones