import { getUsuario, getUsuarios } from "../../../../dao/usuario"

const usuarioHandler = async (req, res) => {
    if (req.method = "GET") {
        const id = req.query.id
        console.log(id)
        if (id == "group"){
            const usuarios = await getUsuarios()
            const usuariosEnLista = []
            for (let usuario of usuarios) {
                usuariosEnLista.push({
                    id : usuario.id,
                    nombre : usuario.nombre,
                    apellidos : usuario.apellidos,
                    dni : usuario.dni,
                    email : usuario.email,
                    telefono : usuario.telefono,
                    createdAt : usuario.createdAt,
                    updatedAt : usuario.updatedAt
                })
            }
            res.json({
                msg : "",
                usuarios : usuarios
            })
        }
        else {
            const numId = parseInt(id)
            const usuario = await getUsuario(numId)
            res.json({
                msg : "",
                usuario : usuario
            })
        }
    }
}

export default usuarioHandler