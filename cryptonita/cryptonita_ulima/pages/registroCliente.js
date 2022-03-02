import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const registroCliente = () => {
    const gotoLogin = () => {
        location.href = "/"
    }

    const gotoRegistro2 = () => {
        location.href = "/registroClienteSig"
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
            <label for="exampleFormControlInput1" class="form-label">Nombres</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombres*"/>
            <label for="exampleFormControlInput1" class="form-label">Apellidos</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Apellidos*"/>
            <label for="exampleFormControlInput1" class="form-label">Número de DNI</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Número de DNI*"/>
            </div>
                <div>
                    <button className="btn btn-success m-2 admin" onClick={ gotoRegistro2 }>Siguiente</button>
                </div>
                <div>
                    <button className="btn btn-success m-2 admin" onClick={ gotoLogin }>Anterior</button>
                </div>              
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default registroCliente