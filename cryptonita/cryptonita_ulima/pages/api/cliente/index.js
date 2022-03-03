const { getUsuarios, setUsuario } = require("../../../dao/usuario")

const usuarioHandler = async (req, res) => {
    if (req.method == "GET") {
        const usuarios = await getUsuarios()
        const usuariosEnLista = []
        for (let usuario of usuarios) {
            usuariosEnLista.push({
                id : usuario.id,
                nombre : usuario.nombre,
                apellidos : usuario.apellidos,
                dni : usuario.dni,
                email : usuario.email,
                password : usuario.password,
                telefono : usuario.telefono,
                usuario : usuario.estado
            })
        }
        res.json({
            msg : "",
            usuarios : usuariosEnLista
        })
        
    }
    else if(req.method == "PUT") {
        const data = JSON.parse(req.body)
        await setUsuario(data)
        res.json({
            msg : ""
        })
    }
}

export default usuarioHandler