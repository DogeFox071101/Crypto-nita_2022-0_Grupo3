import { genOperacion, getOperacion, getOperaciones, getOperacionesUsuario, setOperacion, delOperacion } from "../../../dao/operacion";

const operacionHandler = async (req, res) => {
    if (req.method == "GET") {
        const operaciones = await getOperaciones()
        const operacionesEnLista = []
        for (let operacion of operaciones) {
            operacionesEnLista.push({
                id : operacion.id,
                tipoCambio : operacion.tipoCambio,
                montoBtc : operacion.montoBtc,
                tipoOperacion : operacion.tipoOperacion,
                estado : operacion.estado,
                billeteraBtc : operacion.billeteraBt,
                cuentaBancaria : operacion.cuentaBancaria,
                codigoTransaccion : operacion.codigoTransaccion,
                createdAt: operacion.createdAt,
                updatedAt: operacion.updatedAt
            })
        }
        res.json({
            msg : "",
            operaciones : operacionesEnLista
        })
    }
    else if (req.method == "POST") {
        const data = JSON.parse(req.body)
        await genOperacion(data.tipoCambio, data.montoBtc, data.tipoOperacion, data.idCliente)
        res.json({
            msg : ""
        })
    }
    else if (req.method == "PUT") {
        const data = JSON.parse(req.body)
        await setOperacion(data)
        res.json({
            msg : ""
        })
    }
    else {
        res.status(400).json({
            msg : "Método no definido"
        })
    }
}
export default operacionHandler