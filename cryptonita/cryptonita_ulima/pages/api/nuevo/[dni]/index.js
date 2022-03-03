import { getUsuarioDni } from "../../../../dao/usuario"

const newUserHandler = async (req, res) => {
    if (req.method == "GET") {
        const resp = await getUsuarioDni(req.query.dni)
        res.json({
            usuario : resp
        })
    }
}

export default newUserHandler