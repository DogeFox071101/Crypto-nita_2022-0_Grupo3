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
            <div className="col-10 col-sm-8 col-lg-6 mx-auto my-2">
                <div className="row my-2">
                    <label className="col-sm-4 px-0 pb-2" for="">ID de Operación:</label>
                    <input className="col-sm-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-sm-4 px-0 pb-2" for="">Fecha y Hora:</label>
                    <input className="col-sm-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-sm-4 px-0 pb-2" for="">Cliente:</label>
                    <input className="col-sm-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-sm-4 px-0 pb-2" for="">Tipo de Operación:</label>
                    <input className="col-sm-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-sm-4 px-0 pb-2" for="">Tipo de Cambio:</label>
                    <input className="col-sm-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-sm-4 px-0 pb-2" for="">Monto:</label>
                    <input className="col-sm-8" type="text" />
                </div>
                <div className="row my-2">
                    <label className="col-sm-4 px-0 pb-2" for="">Estado:</label>
                    <input className="col-sm-8" type="text" />
                </div>
                <div className="my-4 row">
                    <div className="col-sm-6 pe-sm-1 mb-1 mb-sm-0 g-0">
                        <button className="btn btn-success col-12">Cancelar</button>
                    </div>
                    <div className="col-sm-6 pe-sm-1 mt-1 mb-sm-0 g-0">
                        <button className="btn btn-success col-12">Aplicar Cambios</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default EditarOperacion