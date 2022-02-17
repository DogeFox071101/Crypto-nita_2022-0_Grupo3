const Footer = () => {
    return <footer className="row p-2 txt_min mt-4">
        <div className="col-2">
            Logo Equipo
        </div>
        <div className="col-2">
            <div className="">
                <button className="btn btn-link btn-block col-12 link-style">Nosotros</button>
            </div>
            <div className="">
                <button className="btn btn-link col-12 link-style">Términos y Condiciones</button>
            </div>
        </div>
        <div className="col-5 text-center py-5 bold link-style">
            2022 - Crypto-nita® - Todos los derechos reservados
        </div>
        <div className="col-3 integrantes bold px-0 py-3 link-style">
            Integrantes:
            <ul>
                <li>Falcón Choque, Leonardo Guillermo (DogeFox071101)</li>
                <li>Mondoñedo Cabanillas, Luis Manuel (LuisMondonedo)</li>
                <li>Rojas Saldarriaga, Juan Diego (jdrojass)</li>
                <li>Salazar Vega, Rodrigo (rodrigosalazarvega)</li>
            </ul>
        </div>
    </footer>
}

export default Footer