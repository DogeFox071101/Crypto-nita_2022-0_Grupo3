import { genUsuario, setUsuario } from "../../../dao/usuario"

const clienteHandler = async (req, res) => {
    if (req.method == "GET") {

    }
    else if (req.method == "POST") {
        const data = JSON.parse(req.body)
        await genUsuario(data.nombre, data.apellidos, data.dni)
        res.json({
            msg : ""
        })
    }
    else if (req.method == "PUT") {
        const data = JSON.parse(req.body)
        await setUsuario(data)
        res.json({
            msg : ""
        })
    }
}
export default clienteHandler