import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const EditarTipoCambio = () => {
    useEffect(() => {
        document.title = "Editar Tipo de Cambio | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="text-center mt-2 mb-4">
                <h2>Editar Tipo de Cambio</h2>
            </div>
            <div className="col-4 mx-auto my-2">
                <div className="my-2">
                    <label className="form-label" for="">Precio de Compra: (1 BTC)</label>
                </div>
                <input className="form-control" type="text" />
                <div className="my-2">
                    <label className="form-label" for="">Precio de Venta: (1 BTC)</label>
                </div>
                <input className="form-control" type="text" />
                <div className="my-4 row">
                    <div className="col-6 pe-1">
                        <button className="btn btn-success col-12">Cancelar</button>
                    </div>
                    <div className="col-6 ps-1">
                        <button className="btn btn-success col-12">Aplicar Cambios</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default EditarTipoCambio