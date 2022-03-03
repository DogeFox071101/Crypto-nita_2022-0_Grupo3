import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const EditarOperacion = () => {
    const [usuario, setUsuario] = useState(null)
    const [txtNombre, setTxtNombre] = useState("")
    const [txtApellidos, setTxtApellidos] = useState("")
    const [txtDni, setTxtDni] = useState("")
    const [txtEmail, setTxtEmail] = useState("")
    const [txtNumero, setTxtNumero] = useState("")
    const [txtEstado, setTxtEstado] = useState("")

    const txtNombreOnChange = (event) => {
        setTxtNombre(event.target.value)
    }

    const txtApellidosOnChange = (event) => {
        setTxtApellidos(event.target.value)
    }

    const txtDniOnChange = (event) => {
        setTxtDni(event.target.value)
    }

    const txtEmailOnChange = (event) => {
        setTxtEmail(event.target.value)
    }

    const txtNumeroOnChange = (event) => {
        setTxtNumero(event.target.value)
    }

    const txtEstadoOnChange = (event) => {
        setTxtEstado(event.target.value)
    }

    const actualizarUsuario = () => {
        const usuarioActual = usuario
        usuarioActual.nombre = txtNombre
        usuarioActual.apellidos = txtApellidos
        usuarioActual.dni = txtDni
        usuarioActual.email = txtEmail
        usuarioActual.telefono = txtNumero
        usuarioActual.usuario = txtEstado
        setUsuario(usuarioActual)
    }

    const subirUsuarioActualizado = async () => {
        const resp = await fetch("/api/cliente", {
            method : "PUT",
            body : JSON.stringify(usuario)
        })
        const data = await resp.json()
        localStorage.removeItem("idUsuarioEdit")
    }

    const buttonUpdateHandler = async () => {
        actualizarUsuario()
        await subirUsuarioActualizado()
        location.href = "/listaClientes"
    }

    const buttonAbort = () => {
        localStorage.removeItem("idUsuarioEdit")
        location.href = "/listaClientes"
    }

    const obtenerUsuario = async () => {
        const resp = await fetch(`/api/cliente/${localStorage.getItem("idClienteEdit")}`)
        const data = await resp.json()
        setUsuario(data.usuario)
    }
    
    useEffect(() => {
        document.title = "Editar Operación | Crypto-nita"
        obtenerUsuario()
    },[])
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="mt-2 mb-4 text-center">
                <h2 className="">Editar Cliente:</h2>
            </div>
            <div className="col-5 mx-auto my-2">
                <div className="row my-2">
                    <label className="col-4">Nombres:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.nombre : "" } onChange={txtNombreOnChange}  />
                </div>
                <div className="row my-2">
                    <label className="col-4">Apellidos:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.apellidos : "" } onChange={txtApellidosOnChange} />
                </div>
                <div className="row my-2">
                    <label className="col-4">DNI:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.dni : "" } onChange={txtDniOnChange}/>
                </div>
                <div className="row my-2">
                    <label className="col-4">Correo Electrónico:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.email : "" } onChange={txtEmailOnChange}/>
                </div>
                <div className="row my-2">
                    <label className="col-4">Número de teléfono:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.telefono : "" } onChange={txtNumeroOnChange} />
                </div>
                <div className="row my-2">
                    <label className="col-4">Estado:</label>
                    <select className="col-8" type="text" defaultValue={ usuario != null ? usuario.usuario : "Pendiente" } onChange={txtEstadoOnChange}>
                        <option value={"Pendiente"}>Pendiente</option>
                        <option value={"Validado"}>Validado</option>
                    </select>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-6 pf-0 pe-1">
                        <button className="btn btn-success col-12" onClick={buttonAbort}>Cancelar</button>
                    </div>
                    <div className="col-6 pe-1 pf-0">
                        <button className="btn btn-success col-12" onClick={buttonUpdateHandler}>Aplicar Cambios</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default EditarOperacion