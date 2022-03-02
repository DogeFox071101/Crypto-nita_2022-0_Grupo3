import { getUsuarioEmail } from "../../../../dao/usuario"

const obtenerClienteHandler = async (req, res) => {
    if (req.method = "GET") {
        const email = req.query.email
        const cliente = await getUsuarioEmail(email)
        res.json({
            msg : "",
            cliente : cliente
        })
    }
}

export default obtenerClienteHandler