import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const EditarOperacion = () => {
    const [operacion, setOperacion] = useState(null)
    const [usuarios, setUsuarios] = useState([])
    const [txtEstado, setTxtEstado] = useState("")
    
    const obtenerUsuarios = async () => {
        const resp = await fetch("/api/usuario/group")
        const data = await resp.json()
        setUsuarios(data.usuarios)
    }

    const obtenerOperacionEditar = async () => {
        const res = await fetch(`/api/operacion/id/${localStorage.getItem("idOperacionEdit")}`)
        const data = await res.json()
        setOperacion(data.operacion)
        console.log(data.operacion)
    }

    const listaEstadoOnChange = (event) => {
        setTxtEstado(event.target.value)
    }

    const actualizarOperacion = () => {
        const operacionActual = operacion
        operacionActual.estado = txtEstado
        setOperacion(operacionActual)
    }

    const subirOperacionEditada = async () => {
        const resp = await fetch("/api/operacion", {
            method : "PUT",
            body : JSON.stringify(operacion)
        })
        const data = await resp.json()
        localStorage.removeItem("idOperacionEdit")
    }

    const buttonUpdateHandler = async () => {
        await actualizarOperacion()
        await subirOperacionEditada()
        location.href = "/listaOperaciones"
    }

    useEffect(() => {
        document.title = "Editar Operación | Crypto-nita"
        obtenerOperacionEditar()
        obtenerUsuarios()
    },[])

        return <div>
            <Header></Header>
            <main className="p-2 mt-4">
                <div className="mt-2 mb-4 text-center">
                    <h2 className="">Editar Operación:</h2>
                </div>
                <div className="col-10 col-sm-8 col-lg-6 mx-auto my-2">
                    <div className="row my-2">
                        <label className="col-sm-4 px-0 pb-2">ID de Operación:</label>
                        <input className="col-sm-8" type="text" disabled={true} defaultValue={ operacion != null ? operacion.id : 0 } />
                    </div>
                    <div className="row my-2">
                        <label className="col-sm-4 px-0 pb-2">Fecha y Hora:</label>
                        <input className="col-sm-8" type="text" disabled={true} defaultValue={ operacion != null ? operacion.createdAt : 0 } />
                    </div>
                    <div className="row my-2">
                        <label className="col-sm-4 px-0 pb-2">Cliente:</label>
                        <select className="col-sm-8" type="text" disabled={true} value={ operacion != null ? operacion.idCliente : 0 }>
                            <option value={ 0 }> ------ Seleccione una opción ------</option>
                            {
                                usuarios.map((cliente) => {
                                    return <option value={ cliente.id } key={ cliente.id }>
                                        { cliente.id + " - " + cliente.apellidos + ", " + cliente.nombre }
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="row my-2">
                        <label className="col-sm-4 px-0 pb-2">Tipo de Operación:</label>
                        <select className="col-sm-8" disabled={true} value={ operacion != null ? operacion.tipoOperacion : 0 }>
                            <option value={"Compra"}>Compra</option>
                            <option value={"Venta"}>Venta</option>
                        </select>
                    </div>
                    <div className="row my-2">
                        <label className="col-sm-4 px-0 pb-2">Tipo de Cambio:</label>
                        <input className="col-sm-8" type="number" disabled={true} defaultValue={ operacion != null ? operacion.tipoCambio : 0 } />
                    </div>
                    <div className="row my-2">
                        <label className="col-sm-4 px-0 pb-2">Monto:</label>
                        <input className="col-sm-8" type="number" disabled={true} defaultValue={ operacion != null ? operacion.montoBtc : 0 } />
                    </div>
                    <div className="row my-2">
                        <label className="col-sm-4 px-0 pb-2">Estado:</label>
                        <select className="col-sm-8" type="text" onChange={ listaEstadoOnChange } defaultValue={ operacion != null ? operacion.estado : 0 }>
                            <option value={"Incompleto"}>Incompleto</option>
                            <option value={"Pendiente"}>Pendiente</option>
                            <option value={"Finalizado"}>Finalizado</option>
                        </select>
                    </div>
                    <div className="my-4 row">
                        <div className="col-sm-6 pe-sm-1 mb-1 mb-sm-0 g-0">
                            <button className="btn btn-success col-12">Cancelar</button>
                        </div>
                        <div className="col-sm-6 pe-sm-1 mt-1 mt-sm-0 g-0">
                            <button className="btn btn-success col-12" onClick={ buttonUpdateHandler } >Aplicar Cambios</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    }
    
    

    
export default EditarOperacion