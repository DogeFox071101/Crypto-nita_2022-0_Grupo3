const Footer = () => {
    return <footer className="row p-2 txt_min mt-5">
        <div className="col-lg-2 order-3 order-lg-1 text-center">
            <img className="footer-image" src="/media/prograJS.png"></img>
        </div>
        <div className="col-lg-2 order-1 order-sm-2">
            <div className="">
                <a className="btn btn-link btn-block col-12 link-style" href="/nosotros">Nosotros</a>
            </div>
            <div className="">
                <a className="btn btn-link col-12 link-style" href="/terminosCondiciones">Términos y Condiciones</a>
            </div>
        </div>
        <div className="col-lg-5 text-center py-5 bold link-style order-2 order-lg-3">
            2022 - Crypto-nita® - Todos los derechos reservados
        </div>
        <div className="col-lg-3 integrantes bold px-0 py-3 link-style order-4 text-center text-lg-start mt-4">
            Integrantes:
                <ul className="text-start mt-2">
                    <li>Falcón Choque, Leonardo Guillermo (DogeFox071101)</li>
                    <li>Mondoñedo Cabanillas, Luis Manuel (LuisMondonedo)</li>
                    <li>Rojas Saldarriaga, Juan Diego (jdrojass)</li>
                    <li>Salazar Vega, Rodrigo (rodrigosalazarvega)</li>
                </ul>
        </div>
    </footer>
}

export default Footer