import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const PanelAdmin = () => {
    const goToEditTC = () => {
        location.href = "/editarTipoCambio"
    }

    const goToEditC = () => {
        location.href = "/listaClientes"
    }
    

    const goToEditOP = () => {
        location.href = "/listaOperaciones"
    }
    

    const goToHome = () => {
        localStorage.removeItem("lastDataLogin")
        location.href = "/"
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
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2" onClick={ goToEditC } >Administrar Clientes</button>
                </div>
                <div className="col-12">
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2" onClick={ goToEditTC }>Editar Tipo de Cambio</button>
                </div>
                <div className="col-12">
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2" onClick={ goToEditOP } >Administrar Operaciones</button>
                </div>
                <div className="col-12">
                    <button className="col-12 col-lg-7 btn btn-success my-2 m-lg-2" onClick={ goToHome }>Cerrar Sesión</button>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default PanelAdmin