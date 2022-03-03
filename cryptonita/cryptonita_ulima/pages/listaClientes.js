import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect, useState } from "react";

const ListaOperaciones = () => {
    const [listaClientes, setOpClientes] = useState([])

    const editarCliente = (cliente) => {
        localStorage.setItem("EditarCliente", cliente.nombre)
        location.href = "/editarCliente"
    }

    const obtenerListaClientes = async() => {
        const resp = await fetch("")
        const data = await resp.json()
        setListaClientes(data.clientes)
        console.log(data.clientes)

    }

    useEffect(() => {
        document.title = "Lista de Operaciones | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="p-2 mt-4">
            <div className="row mt-2 mb-4">
                <h2 className="col-8">Lista de Clientes</h2>

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
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.estado}</td>
                                    <td><button className="btn btn-link">Editar</button></td>
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

export default ListaOperaciones