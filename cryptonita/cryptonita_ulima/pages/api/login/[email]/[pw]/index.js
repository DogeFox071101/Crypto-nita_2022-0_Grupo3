import { getUsuarioByEmail, getAdminByEmail } from "../../../../../dao/usuario";
import usuario from "../../../../../sequelize/models/usuario";



const loginSelector = async (user) => {
    var usuario = await getUsuarioByEmail(user)
    if (usuario == null) {
        usuario = await getAdminByEmail(user)
        if (usuario == null) {
            return {
                mode : "none",
                usuario : null
            }
        }
        return {
            mode : "admin",
            usuario : usuario
        }
    }
    else {
        return {
            mode : "user",
            usuario : usuario
        }
    }
    
}

const passwordHandler = (usuario, password) => {
    if (usuario.password == password) {
        return "ok"
    }
    else {
        return "wrong"
    }
    
    
}

const loginHandler = async (req, res) => {
    if (req.method == "GET") {
        const user = req.query.email
        const password = req.query.pw
        const data = await loginSelector(user)

        const usuario = data.usuario

        const pwCheck = passwordHandler(usuario, password)

        if (pwCheck == "ok") {
            res.json({
                result : "approved",
                mode : data.mode,
                msg : ""
            })
        }
        else if (pwCheck == "wrong") {
            res.json({
                result : "rejected",
                mode : "",
                msg : ""
            })
        }
        else {
            res.json({
                result : "problem",
                mode : "",
                msg : ""
            })
        }
        
    }
    else {
        res.status(400).json({
            msg : "ERROR: Método no disponible"
        })
    }
}

export default loginHandler