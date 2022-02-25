import { useState } from "react"

const LoginField = (props) => {
    const [txtUsername, setTxtUsername] = useState("")
    const [txtPassword, setTxtPassword] = useState("")

    const txtUsernameOnChange = (event) => {
        const txtUsernameIngresado = event.target.value
        setTxtUsername(txtUsernameIngresado)
    }

    const txtPasswordOnChange = (event) => {
        setTxtPassword(event.target.value)
    }

    const butLoginOnClick = async () => {
        const hashPw = await hashPassword(txtPassword)
        console.log(hashPw)
        props.onLogin(txtUsername, hashPw)
    }

    const hashPassword = (txtPassword) => {
        const utf8 = new TextEncoder().encode(txtPassword)
        return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer))
            const hashHex = hashArray
                .map((bytes => bytes.toString(16).padStart(2,'0')))
                .join('')
            return hashHex
        })
    }
    
    return <div className="col-12 pt-5 p-lg-5">
        <div className="">
            <div className="txt_max link-style">
                Iniciar Sesión
            </div>
            <div className="mt-4">
                <div className="">
                    <label className="form-label">Correo:</label>
                </div>
                <input className="form-control" type="text" defaultValue={ txtUsername } onChange={ txtUsernameOnChange } />
                <div className="mt-2">
                    <label className="form-label">Contraseña: </label>
                </div>
                <input className="form-control" type="password" defaultValue={ txtPassword } onChange={ txtPasswordOnChange } />
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success" type="button" onClick={ butLoginOnClick }>Ingresar</button>
            </div>
            {
                (() => {
                    if (props.error) {
                        return <div className="alert alert-danger mt-2">Error en login</div>
                    }
                })()
            }
            <div className="mt-4">
                <button className="link-style btn btn-link">Olvidé mi contraseña</button>
            </div>
        </div>
    </div>
}

export default LoginField