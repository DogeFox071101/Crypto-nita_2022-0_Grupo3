import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect } from "react";

const CompraBtcSeg = () => {
    useEffect(() => {
        document.title = "Paso 2 de 3 | Compra de BTC"
    })
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
                    <input className="form-control" type="text" placeholder="Ejemplo: 192-11303551-0-27" />
                    <div className="px-0 mt-4">
                        <label className="form-label" htmlFor="">(2) Ingresa aquí el código de transacción:</label>
                    </div>
                    <input className="form-control mb-4" type="text" placeholder="Ejemplo: 564154d5we4f5egsefw"/>
                </div>
                <div className=" row col-5 mx-auto mb-5">
                    <div className="col-6 pe-1 ps-0">
                        <button className="btn btn-success col-12">Regresar</button>
                    </div>
                    <div className="col-6 ps-1 pe-0">
                        <button className="btn btn-success col-12">Continuar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default CompraBtcSeg