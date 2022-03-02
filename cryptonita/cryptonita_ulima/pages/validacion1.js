import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const validacion = () => {
    const gotoLogin = () => {
        location.href = "/"
    }


    useEffect(() => {
        document.title = "Página Principal | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="row p-2">

            <div className="text-center my-4">
                <div class="container-fluid mb-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <h2 class="card-title">Su cuenta está en proceso de Validación</h2>
                        </div>
                    </div>
                    <div class="card text-center">
                        <div class="card-body">
                            <h6 class="card-title">Una vez validado podrá acceder a nuestros servicios</h6>
                        </div>
                    </div>


                </div>
                <div>
                    <button className="btn btn-success m-2 admin" onClick={ gotoLogin }>Cerrar Sesión</button>
                </div>


            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default validacion