import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect } from "react";

const VentaBtcPri = () => {
    useEffect(() => {
        document.title = "Paso 1 de 3 | Venta de BTC"
    })
    return <div>
        <Header></Header>
        <main class="p-2 mt-4">
            <div>
                <div class="text-center mb-4">
                    <i class="bi bi-circle-half mx-1"></i>
                    <i class="bi bi-circle mx-1"></i>
                    <i class="bi bi-circle mx-1"></i>
                </div>
                <div class="text-center my-4">
                    <h2>Paso 1 de 3</h2>
                </div>
                <div class="text-center my-4">
                    <h2>¿Donde quieres recibir tu dinero?</h2>
                </div>
                <div class="row col-5 mx-auto">
                    <div class="px-0">
                        <label class="form-label" for="">Número de Cuenta:</label>
                    </div>
                    <input class="form-control" type="text" />
                    <div class="alert alert-danger mt-2">
                        Aviso: Temporalmente solo aceptamos transferencias a cuentas BCP.
                    </div>
                </div>
                <div class=" row col-5 mx-auto mb-5">
                    <div class="col-6 pe-1 ps-0">
                        <button class="btn btn-success col-12">Regresar</button>
                    </div>
                    <div class="col-6 ps-1 pe-0">
                        <button class="btn btn-success col-12">Continuar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default VentaBtcPri