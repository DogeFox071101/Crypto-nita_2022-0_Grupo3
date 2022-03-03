import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const EditarOperacion = () => {
    const [usuario, setUsuario] = useState(null)
    const [txtEstado, setTxtEstado] = useState("")

    const txtEstadoOnChange = (event) => {
        setTxtEstado(event.target.value)
    }

    const actualizarUsuario = () => {
        console.log(usuario)
        const usuarioActual = usuario
        usuarioActual.estado = txtEstado
        setUsuario(usuarioActual)
        
        console.log(usuarioActual)
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
        console.log(data)
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
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.nombre : 0 } disabled={true}/>
                </div>
                <div className="row my-2">
                    <label className="col-4">Apellidos:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.apellidos : 0 } disabled={true}/>
                </div>
                <div className="row my-2">
                    <label className="col-4">DNI:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.dni : 0 } disabled={true}/>
                </div>
                <div className="row my-2">
                    <label className="col-4">Correo Electrónico:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.email : 0 } disabled={true}/>
                </div>
                <div className="row my-2">
                    <label className="col-4">Número de teléfono:</label>
                    <input className="col-8" type="text" defaultValue={ usuario != null ? usuario.telefono : 0 } disabled={true}/>
                </div>
                <div className="row my-2">
                    <label className="col-4">Estado:</label>
                    <select className="col-8" type="text" onChange={txtEstadoOnChange} defaultValue={ usuario != null ? usuario.estado : 0 } >
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