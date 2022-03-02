import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect } from "react";

const CompraBtcPri = () => {
    useEffect(() => {
        document.title = "Paso 1 de 3 | Compra de BTC"
    })
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
                    <input className="form-control" type="text" placeholder="Ejemplo: 3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5" />
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

export default CompraBtcPri