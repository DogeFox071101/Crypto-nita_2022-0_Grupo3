import Footer from "../components/footer.component"
import Header from "../components/header.component"
import React, { useEffect } from "react";

const Nosotros = () => {
    useEffect(() => {
        document.title = "Nosotros | Crypto-nita"
    })
    return <div>
        <Header></Header>
        <main className="container">

            <div className="row">
                <div className="col-1">

                    <img src="/back.png" alt="Vercel Logo" width={40} height={40} />

                </div>
                <h1 className="col-8">Nosotros</h1>
            </div>
            

            <div className="col-6 mx-auto text-center">

                <div className="{styles.column2}">
                    <a href="https://nextjs.org/docs" className="{styles.card}">
                        <img src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

                        <p>Rodrigo Salazar Vega

                        </p>
                    </a>
                </div>
                <div className="{styles.column2}">
                    <img src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

                    <a href="https://nextjs.org/docs" className="{styles.card}">
                        <p>Juan Diego Rojas Saldarriaga

                        </p>
                    </a>
                </div>
                <div className="{styles.column2}">
                    <img src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

                    <a href="https://nextjs.org/docs" className="{styles.card}">
                        <p>Luis Manuel Mondoñedo Cabanillas

                        </p>
                    </a>
                </div>

                <div className="{styles.column2}">
                    <img src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

                    <a href="https://nextjs.org/docs" className="{styles.card}">
                        <p>Leonardo Guillermo Falcón Choque

                        </p>
                    </a>
                </div>



            </div>
        </main>
        <Footer></Footer>
    </div>

}

export default Nosotros

