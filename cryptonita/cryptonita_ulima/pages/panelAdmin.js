import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const PanelAdmin = () => {
    const goToEditTC = () => {
        location.href = "/editarTipoCambio"
    }
    
    useEffect(() => {
        document.title = "Página Principal | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="p-2">
            <h2 className="text-center my-4 col-12">
                Bienvenido Administrador: ¿Qué quieres hacer hoy?
            </h2>
            <div className="text-center my-4 col-12 col-lg-8 mx-auto">
                <div className="col-12">
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2">Administrar Clientes</button>
                </div>
                <div className="col-12">
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2" onClick={ goToEditTC }>Editar Tipo de Cambio</button>
                </div>
                <div className="col-12">
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2">Administrar Operaciones</button>
                </div>
                <div className="col-12">
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2">Cerrar Sesión</button>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default PanelAdmin