import { genOperacion, getOperacion, getOperaciones, getOperacionesUsuario, setOperacion, delOperacion, getOperacionIncompleta } from "../../../../../dao/operacion";

const operacionHandlerSec = async (req, res) => {
    if (req.method == "GET") {
        if (req.query.mode == "id") {
            const operacion = await getOperacion(req.query.id)
            res.json({
                operacion: operacion
            })
        }
        else if (req.query.mode == "client") {
            const operaciones = await getOperacionesUsuario(req.query.id)
            const operacionesEnLista = []
            for (let operacion of operaciones) {
                operacionesEnLista.push({
                    id: operacion.id,
                    tipoCambio: operacion.tipoCambio,
                    montoBtc: operacion.montoBtc,
                    tipoOperacion: operacion.tipoOperacion,
                    estado: operacion.estado,
                    billeteraBtc: operacion.billeteraBt,
                    cuentaBancaria: operacion.cuentaBancaria,
                    codigoTransaccion: operacion.codigoTransaccion,
                    createdAt: operacion.createdAt,
                    updatedAt: operacion.updatedAt
                })
            }

            res.json({
                msg: "",
                operaciones: operacionesEnLista
            })
        }
         else if (req.query.mode == "incomplete") {
            const operacion = await getOperacionIncompleta(req.query.id)
            res.json({
                operacion: operacion
            })
        }
    }
    else {
        res.status(400).json({
            msg : "Método no definido"
        })
    }
}
export default operacionHandlerSec