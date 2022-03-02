import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const registroClienteSig = () => {
    const gotoRegistro1 = () => {
        location.href = "/registroCliente"
    }

    const gotoValidacion = () => {
        location.href = "/validacion1"
    }



    useEffect(() => {
        document.title = "Página Principal | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="row p-2">
            <h2 className="text-center my-4">
                Registro
            </h2>
            <div className="text-center my-4">
            <div class="container-fluid mb-3">
            <label for="exampleFormControlInput1" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo Electrónico*"/>
            <label for="exampleFormControlInput1" class="form-label">Nueva Contraseña</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nueva Contraseña*"/>
            <label for="exampleFormControlInput1" class="form-label">Confirmar Contraseña</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Confirmar Contraseña*"/>
            <label for="exampleFormControlInput1" class="form-label">Número Telefónico</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Número Telefónico*"/>
            </div>
                <div>
                    <button className="btn btn-success m-2 admin" onClick={ gotoValidacion }>Siguiente</button>
                </div>
                <div>
                    <button className="btn btn-success m-2 admin" onClick={ gotoRegistro1 }>Anterior</button>
                </div>                
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default registroClienteSig