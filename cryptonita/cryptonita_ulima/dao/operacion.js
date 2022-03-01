import db from "../sequelize/models";

const genOperacion = async (tipoCambio, montoBtc, tipoOperacion, idCliente) => {
    const nuevaOperacion = await db.Operacion.create({
        tipoCambio : tipoCambio,
        montoBtc : montoBtc,
        tipoOperacion : tipoOperacion,
        estado : "Incompleto",
        billeteraBtc : null,
        cuentaBancaria : null,
        codigoTransaccion : null,
        idCliente : idCliente,
    })
    return nuevaOperacion
}
const getOperacion = async (id) => {
    return await db.Operacion.findOne({
        where : {
            id : id
        },
    })
}
const getOperacionIncompleta = async (idCliente) => {
    return await db.Operacion.findOne({
        where : {
            idCliente : idCliente,
            estado : "Incompleto"
        }
    })
}
const getOperaciones = async () => {
    return await db.Operacion.findAll({
        order : [
            [ 'id', 'DESC' ]
        ]
    })
}
const getOperacionesUsuario = async (idCliente) => {
    return await db.Operacion.findAll({
        where : {
            idCliente : idCliente
        },
        order : [
            [ 'createdAt', 'DESC' ]
        ]
    })
}
const setOperacion = async (operacion) => {
    const operacionAModificar = await getOperacion(operacion.id)
    console.log(operacion)
    operacionAModificar.tipoCambio = operacion.tipoCambio
    operacionAModificar.montoBtc = operacion.montoBtc
    operacionAModificar.tipoOperacion = operacion.tipoOperacion
    operacionAModificar.estado = operacion.estado
    operacionAModificar.billeteraBtc = operacion.billeteraBtc
    operacionAModificar.cuentaBancaria = operacion.cuentaBancaria
    operacionAModificar.codigoTransaccion = operacion.codigoTransaccion
    await operacionAModificar.save()

}
const delOperacion = async (id) => {
    await db.Operacion.destroy({
        where : {
            id : id
        }
    })
}

export { genOperacion, getOperacion, getOperaciones, getOperacionesUsuario, setOperacion, delOperacion, getOperacionIncompleta }