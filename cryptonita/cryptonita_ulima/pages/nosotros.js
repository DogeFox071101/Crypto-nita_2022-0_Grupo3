import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";
import Link from "next/link"

const Nosotros = () => {
    useEffect(() => {
        document.title = "Nosotros | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="container">

            <div className="row">
                <div className="col-1">
                    <Link href="/">
                        <img src="/back.png" alt="Vercel Logo" width={40} height={40} />
                    </Link>
                </div>
                <h1 className="col-8">Nosotros</h1>
            </div>
            

            <div className="col-6 mx-auto text-center">

                <div className="{styles.column2}">
                    <img src="/Leonardo.jpg" alt="Vercel Logo" width={200} height={300} />
                    <p>Leonardo Guillermo Falcón Choque</p>
                </div>

                <div className="{styles.column2}">
                    <img src="/LuisManuel.jpg" alt="Vercel Logo" width={200} height={300} />
                    <p>Luis Manuel Mondoñedo Cabanillas</p>
                </div>

                <div className="{styles.column2}">
                    <img src="/JuanDiego.jpg" alt="Vercel Logo" width={200} height={300} />
                    <p>Juan Diego Rojas Saldarriaga</p>
                </div>

                <div className="{styles.column2}">
                    <img src="/Rodrigo.jpg" alt="Vercel Logo" width={200} height={300} />
                    <p>Rodrigo Salazar Vega</p>    
                </div>

            </div>
        </main>
        <Footer></Footer>
    </div>

}

export default Nosotros

