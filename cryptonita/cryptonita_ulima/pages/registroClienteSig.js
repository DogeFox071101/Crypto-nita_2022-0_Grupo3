import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const RegistroClienteSig = () => {
    const [usuario, setUsuario] = useState(null)
    const [txtEmail, setTxtEmail] = useState("")
    const [txtNuevaContrasena, setTxtNuevaContrasena] = useState("")
    const [txtConfirmarContrasena, setTxtConfirmarContrasena] = useState("")
    const [txtTelefono, setTxtTelefono] = useState("")
    
    const txtEmailOnChange = (event) => {
        setTxtEmail(event.target.value)
    }

    const txtNuevaContrasenaOnChange = (event) => {
        setTxtNuevaContrasena(event.target.value)
    }

    const txtConfirmarContrasenaOnChange = (event) => {
        setTxtConfirmarContrasena(event.target.value)
    }

    const txtTelefonoOnChange = (event) => {
        setTxtTelefono(event.target.value)
    }

    const hashPassword = (txtPassword) => {
        const utf8 = new TextEncoder().encode(txtPassword)
        return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer))
            const hashHex = hashArray
                .map((bytes => bytes.toString(16).padStart(2,'0')))
                .join('')
            return hashHex
        })
    }

    const obtenerUsuarioIncompleto = async () => {   
        const resp = await fetch(`/api/cliente/${localStorage.getItem("newUser")}`)
        const data = await resp.json()
        console.log(data)
        setUsuario(data.usuario)
        console.log(data.usuario)
    }

    const gotoRegistro1 = () => {
        location.href = "/registroCliente"
    }

    const gotoValidacion = async () => {
        if (txtNuevaContrasena == txtConfirmarContrasena) {
            const contrasena = await hashPassword(txtNuevaContrasena)
            const mensaje = {
                id : usuario.id,
                nombre : usuario.nombre,
                apellidos : usuario.apellidos,
                dni : usuario.dni,
                email : txtEmail,
                password : contrasena,
                telefono : txtTelefono,
                estado : "Pendiente"
            }
            const resp = await fetch("/api/cliente", {
                method : "PUT",
                body : JSON.stringify(mensaje)
            })
            const loginData = JSON.stringify({
                email : txtEmail,
                password : contrasena
            })
            localStorage.setItem("lastDataLogin", loginData)
            location.href = "/validacion1"

        }
        

    }

    useEffect(() => {
        document.title = "Página Principal | Crypto-nita"
        obtenerUsuarioIncompleto()
    },[])
    return <div>
        <Header></Header>
        <main className="row p-2">
            <h2 className="text-center my-4">
                Registro
            </h2>
            <div className="text-center my-4">
            <div className="container-fluid mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Correo Electrónico*" onChange={txtEmailOnChange}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Nueva Contraseña</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nueva Contraseña*" onChange={txtNuevaContrasenaOnChange}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Confirmar Contraseña</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Confirmar Contraseña*" onChange={txtConfirmarContrasenaOnChange}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Número Telefónico</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Número Telefónico*" onChange={txtTelefonoOnChange}/>
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

export default RegistroClienteSig