import db from "../sequelize/models"

const genCliente = async (tipoCambio, montoBtc, tipoOperacion, idCliente) => {
    const nuevaOperacion = await db.Operacion.create({
        nombre : nombre,
        apellidos : apellidos,
        dni : dni,
        email : email,
        constraseña : constraseña,
        telefono : telefono,
        estado : "pendiente",
    })
    return nuevaOperacion
}
const getCliente = async (nombre) => {
    return await db.Operacion.findOne({
        where : {
            nombre : nombre
        },
    })
}
const getClientePendiente = async (nombre) => {
    return await db.Operacion.findOne({
        where : {
            nombre : nombre,
            estado : "pendiente"
        }
    })
}
const getClientes = async () => {
    return await db.Operacion.findAll({
        order : [
            [ 'nombre', 'DESC' ]
        ]
    })
}
const getOpClientes = async (nombre) => {
    return await db.Operacion.findAll({
        where : {
            nombre : nombre
        },
        order : [
            [ '', 'DESC' ]
        ]
    })
}
const setOpClientes = async (operacion) => {
    const operacionAModificar = await getOpClientes(operacion.id)
    console.log(OpClientes)
    operacionAModificar.nombre = operacion.nombre
    operacionAModificar.apellidos = operacion.apellidos
    operacionAModificar.dni = operacion.dni
    operacionAModificar.email = operacion.email
    operacionAModificar.telefono = operacion.telefono
    operacionAModificar.estado = operacion.estado
    await operacionAModificar.save()

}
const delCliente = async (nombre) => {
    await db.Operacion.destroy({
        where : {
            nombre : nombre
        }
    })
}

export { genCliente, getCliente, getClientes, getOpClientes, setOpClientes, delCliente, getClientePendiente }