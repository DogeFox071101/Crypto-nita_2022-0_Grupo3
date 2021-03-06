import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const ListaClientes = () => {
    const [listaClientes, setListaClientes] = useState([])
    const [txtField, setTxtField] = useState("")

    const editarCliente = (cliente) => {
        localStorage.setItem("idClienteEdit", cliente.id)
        location.href = "/editarCliente"
    }

    const txtFieldOnChange = (event) => {
        setTxtField(event.target.value)
    }

    const obtenerListaClientes = async() => {
        if (txtField == "") {
            const resp = await fetch(`/api/cliente/all/everyone`)
            const data = await resp.json()
            setListaClientes(data.usuarios)
            console.log(data.usuarios)
        }
        else {
            const resp = await fetch(`/api/cliente/all/${txtField}`)
            const data = await resp.json()
            setListaClientes(data.usuarios)
            console.log(data.usuarios)
        }
    }

    useEffect(() => {
        document.title = "Lista de Usuarios | Crypto-nita"
        obtenerListaClientes()
    },[txtField])
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="row mt-2 mb-4">
                <h2 className="col-8">Lista de Clientes</h2>

            </div>
            <div>
                <input className="form-control" placeholder="Filtrar por Nombres, Apellidos, DNI, o Email" onChange={txtFieldOnChange}></input>
            </div>
            <div className="col-12 mx-auto my-2">
                <table className="table table-stripped table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>DNI</th>
                            <th>Correo</th>
                            <th>Número Telefónico</th>
                            <th>Estado</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            listaClientes.map((cliente) => {
                                return <tr key={cliente.nombre}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.dni}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.estado}</td>
                                    <td><button className="btn btn-link" onClick={ () => {
                                        editarCliente(cliente)
                                    } }>Editar</button></td>
                                    </tr>
                            })
                        }
                        

                    </tbody>
                </table>
            </div>
        </main>
        <Footer></Footer>
    </div>
}

export default ListaClientes