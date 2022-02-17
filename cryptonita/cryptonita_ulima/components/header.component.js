const Header = (props) => {
    if (props.index == "1") {
        return <header className="row p-2">
            <figure className="logo col-4">
                <img className="picture" src="/media/cryptonita.png" alt="" />
            </figure>
            <div className="col-5">
            </div>
            <div className="col-3 text-center py-4">
                <button className="login-btn">¡Crea tu Cuenta Aquí!</button>
            </div>
        </header>
    }
    else {
        return <header className="row p-2">
            <figure className="logo col-4">
                <img className="picture" src="/media/cryptonita.png" alt="" />
            </figure>
            <div className="col-5">
            </div>
            <div className="col-3 text-center py-4">
            </div>
        </header>

    }
}

export default Header