import db from "../sequelize/models"
import operacion from "../sequelize/models/operacion"

const getUsuarioByEmail = async (email) => {
    return await db.Usuario.findOne({
        where : {
            email : email
        },
        raw : true
    })
}

const getAdminByEmail = async (email) => {
    return await db.Admin.findOne({
        where : {
            email : email
        },
        raw : true
    })
}

const getUsuario = async (id) => {
    return await db.Usuario.findOne({
        where : {
            id : id
        }
    })
}

const getUsuarioEmail = async (email) => {
    return await db.Usuario.findOne({
        where : {
            email : email
        },
    })
}

const getUsuarios = async () => {
    return await db.Usuario.findAll({
        order : [
            [ 'nombre', 'DESC' ]
        ]
    })
}

const setUsuario = async (usuario) => {
    const usuarioAModificar = await getUsuario(usuario.id)
    usuarioAModificar.nombre = usuario.nombre
    usuarioAModificar.apellidos = usuario.apellidos
    usuarioAModificar.dni = usuario.dni
    usuarioAModificar.password = usuario.password
    usuarioAModificar.email = usuario.email
    usuarioAModificar.telefono = usuario.telefono
    usuarioAModificar.estado = usuario.estado
    await usuarioAModificar.save()
}

const genUsuario = async (nombre, apellidos, dni) => {
    const nuevoUsuario = await db.Usuario.create({
        nombre : nombre,
        apellidos : apellidos,
        dni : dni,
        email : null,
        password : null,
        telefono : null,
        estado : "Incompleto"
    })
    return nuevoUsuario
}

const getUsuarioDni = async (dni) => {
    return await db.Usuario.findOne({
        where : {
            dni : dni
        },
    })
}

export { getUsuarioByEmail, getAdminByEmail, getUsuario, getUsuarioDni, getUsuarios, getUsuarioEmail, setUsuario, genUsuario }