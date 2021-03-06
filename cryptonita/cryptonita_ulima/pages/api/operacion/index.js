import { genOperacion, getOperacion, getOperaciones, getOperacionesUsuario, setOperacion, delOperacion } from "../../../dao/operacion";
import { getUsuario } from "../../../dao/usuario";

const operacionHandler = async (req, res) => {
    if (req.method == "GET") {
        var totalBtc = 0.0
        const operaciones = await getOperaciones()
        const operacionesEnLista = []
        for (let operacion of operaciones) {
            totalBtc = totalBtc + parseFloat(operacion.montoBtc)            
            const usuario = await getUsuario(parseInt(operacion.idCliente))
            operacionesEnLista.push({
                id : operacion.id,
                tipoCambio : operacion.tipoCambio,
                montoBtc : operacion.montoBtc,
                tipoOperacion : operacion.tipoOperacion,
                estado : operacion.estado,
                billeteraBtc : operacion.billeteraBt,
                cuentaBancaria : operacion.cuentaBancaria,
                codigoTransaccion : operacion.codigoTransaccion,
                idCliente : operacion.idCliente,
                createdAt: operacion.createdAt,
                updatedAt: operacion.updatedAt,
                nombre : usuario.nombre,
                apellidos : usuario.apellidos,
            })
        }
        res.json({
            msg : "",
            operaciones : operacionesEnLista,
            total : totalBtc
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