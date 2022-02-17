import Header from "../components/header.component"
import Footer from "../components/footer.component"
import React, { useEffect } from "react";

const VentaBtcTer = () => {
    useEffect(() => {
        document.title = "Paso 3 de 3 | Venta de BTC"
    })
    return <div>
        <Header></Header>
        <main class="p-2 mt-4">
            <div>
                <div class="text-center mb-4">
                    <i class="bi bi-circle-fill mx-1"></i>
                    <i class="bi bi-circle-fill mx-1"></i>
                    <i class="bi bi-circle-half mx-1"></i>
                </div>
                <div class="text-center my-4">
                    <h2>Paso 3 de 3</h2>
                </div>
                <div class="text-center my-4">
                    <h2>¡Ahora es nuestro turno!</h2>
                </div>
                <div class="row col-6 mx-auto">
                    <div class="px-0 mb-4">
                        Puedes revisar los datos de tu transacción. Dentro de breve verificaremos la operación y transferiremos el monto correspondiente.
                    </div>
                    <div class="px-0">
                        <label class="form-label" for="">Número de transacción: </label>
                    </div>
                    <input class="form-control" type="text" />
                    <div class="px-0 mt-4">
                        <label class="form-label" for="">Monto en soles operado:</label>
                    </div>
                    <input class="form-control mb-4" type="text" />
                </div>
                <div class=" row col-6 mx-auto mb-5">
                    <div class="col-12 px-0">
                        <button class="btn btn-success col-12">Finalizar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default VentaBtcTer