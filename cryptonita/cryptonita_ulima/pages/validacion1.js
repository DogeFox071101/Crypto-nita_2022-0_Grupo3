import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const Validacion = () => {
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
                <div className="container-fluid mb-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 className="card-title">Su cuenta está en proceso de Validación</h2>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <h6 className="card-title">Una vez validado podrá acceder a nuestros servicios</h6>
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

export default Validacion