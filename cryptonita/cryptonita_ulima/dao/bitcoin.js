import db from "../sequelize/models"

const getTipoCambio = async () => {
    return await db.TipoCambio.findAll({
        limit : 1,
        order : [
            [ 'createdAt', 'DESC' ]
        ]
    }).then(function(entries){

    })
}

const setTipoCambio = async (compra, venta) => {
    const nuevoTipoCambio = await db.TipoCambio.create({
        valueBuy : compra,
        valueSell : venta
    })
    return nuevoTipoCambio
}

const getHistorialTipoCambio = async () => {
    const tipoCambios = await db.TipoCambio.findAll({
        order : [
            [ 'createdAt', 'ASC' ]
        ]
    })
}

export { getTipoCambio, setTipoCambio }