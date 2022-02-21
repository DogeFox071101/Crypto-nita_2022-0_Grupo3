const LoginField = () => {
    return <div className="col-12 pt-5 p-lg-5">
        <div className="">
            <div className="txt_max link-style">
                Iniciar Sesión
            </div>
            <div className="mt-4">
                <div className="">
                    <label className="form-label">Correo:</label>
                </div>
                <input className="form-control" type="text" />
                <div className="mt-2">
                    <label className="form-label">Contraseña: </label>
                </div>
                <input className="form-control" type="password" name="" id="" />
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success">Ingresar</button>
            </div>
            <div className="mt-4">
                <button className="link-style btn btn-link ">Olvidé mi contraseña</button>
            </div>
        </div>
    </div>
}

export default LoginField