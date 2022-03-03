import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const RegistroCliente = () => {
    const [txtNombre, setTxtNombre] = useState("")
    const [txtApellidos, setTxtApellidos] = useState("")
    const [txtDni, setTxtDni] = useState("")
    
    const txtNombreOnChange = (event) => {
        setTxtNombre(event.target.value)
    }

    const txtApellidosOnChange = (event) => {
        setTxtApellidos(event.target.value)
    }

    const txtDniOnChange = (event) => {
        setTxtDni(event.target.value)
    }

    const subirNuevoUsuario = async () => {
        const mensaje = {
            nombre : txtNombre,
            apellidos : txtApellidos,
            dni : txtDni
        }
        console.log(mensaje)
        const resp = await fetch("/api/cliente", {
            method : "POST",
            body : JSON.stringify(mensaje)
        })
        const resp2 = await fetch(`/api/nuevo/${txtDni}`)
        const data = await resp2.json()
        localStorage.setItem("newUser", data.usuario.id)
    }

    const gotoLogin = () => {
        location.href = "/"
    }

    const gotoRegistro2 = async () => {
        await subirNuevoUsuario()
        location.href = "/registroClienteSig"
    }

    useEffect(() => {
        document.title = "Página Principal | Crypto-nita"
    },[])
    return <div>
        <Header></Header>
        <main className="row p-2">
            <h2 className="text-center my-4">
                Registro
            </h2>
            <div className="text-center my-4">
            <div className="container-fluid mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nombres</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombres*" onChange={txtNombreOnChange}/>
            <label htmlFor="exampleFormControlInput1" className="form-label" >Apellidos</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Apellidos*" onChange={txtApellidosOnChange}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Número de DNI</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Número de DNI*" onChange={txtDniOnChange}/>
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

export default RegistroCliente