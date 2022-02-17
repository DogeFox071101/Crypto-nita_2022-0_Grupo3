import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const EditarOperacion = () => {
    useEffect(() => {
        document.title = "Editar Operación | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="mt-2 mb-4 text-center">
                <h2 className="">Editar Operación:</h2>
            </div>
            <div className="col-5 mx-auto my-2">
                <div className="row my-2">
                    <label className="col-4" for="">ID de Operación:</label>
                    <input className="col-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-4" for="">Fecha y Hora:</label>
                    <input className="col-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-4" for="">Cliente:</label>
                    <input className="col-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-4" for="">Tipo de Operación:</label>
                    <input className="col-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-4" for="">Tipo de Cambio:</label>
                    <input className="col-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-4" for="">Monto:</label>
                    <input className="col-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-4" for="">Estado:</label>
                    <input className="col-8" type="text" />
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-6 pf-0 pe-1">
                        <button className="btn btn-success col-12">Cancelar</button>
                    </div>
                    <div className="col-6 pe-1 pf-0">
                        <button className="btn btn-success col-12">Aplicar Cambios</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default EditarOperacion