import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const PanelAdmin = () => {
    useEffect(() => {
        document.title = "Página Principal | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="row p-2">
            <h2 className="text-center my-4">
                Bienvenido Administrador: ¿Qué quieres hacer hoy?
            </h2>
            <div className="text-center my-4">
                <div>
                    <button className="btn btn-success m-2 admin">Administrar Clientes</button>
                </div>
                <div>
                    <button className="btn btn-success m-2 admin">Editar Tipo de Cambio</button>
                </div>
                <div>
                    <button className="btn btn-success m-2 admin">Administrar Operaciones</button>
                </div>
                <div>
                    <button className="btn btn-success m-2 admin">Cerrar Sesión</button>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default PanelAdmin