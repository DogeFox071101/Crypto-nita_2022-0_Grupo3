const { getUsuarios, setUsuario } = require("../../../../../dao/usuario")

const usuarioHandler = async (req, res) => {
    if (req.method == "GET") {
        const text = req.query.text.toLowerCase()

        
        const usuarios = await getUsuarios()
        const usuariosEnLista = []
        for (let usuario of usuarios) {
            const nombreMin = usuario.nombre.toLowerCase()
            const apellidosMin = usuario.apellidos.toLowerCase()
            const dni = usuario.dni
            const emailMin = usuario.email.toLowerCase()
            if (nombreMin.includes(text) || apellidosMin.includes(text) || dni.includes(text) || emailMin.includes(text) || text == "everyone") {
                usuariosEnLista.push({
                    id : usuario.id,
                    nombre : usuario.nombre,
                    apellidos : usuario.apellidos,
                    dni : usuario.dni,
                    email : usuario.email,
                    password : usuario.password,
                    telefono : usuario.telefono,
                    estado : usuario.estado
                })
            }
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