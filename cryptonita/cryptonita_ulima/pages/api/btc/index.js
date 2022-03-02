import { getTipoCambio, setTipoCambio, getHistorialTipoCambio } from "../../../dao/bitcoin";

const btcHandler = async (req, res) => {
    if (req.method == "GET") {
        const tipoCambioGroup = await getTipoCambio()
        res.json({
            msg : "a",
            tipoCambio : tipoCambioGroup
        })
    }
    else if (req.method == "POST") {
        const data = JSON.parse(req.body)
        await setTipoCambio(data.precioCompra, data.precioVenta)
        res.json({
            msg : ""
        })
    }
}

export default btcHandler