import { getUsuario, setUsuario } from "../../../../dao/usuario"

const getSpecifiedUsuarioHandler = async (req, res) => {
    if (req.method == "GET") {
        const id = parseInt(req.query.id)
        const usuario = await getUsuario(id)
        res.json({
            msg : "",
            usuario : usuario
        })
    }    
}

export default getSpecifiedUsuarioHandler