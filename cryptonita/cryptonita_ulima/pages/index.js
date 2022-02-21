import Footer from "../components/footer.component";
import Header from "../components/header.component";
import LoginField from "../components/login.component";
import React, { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "¡Compra y vende BTC aquí en Crypto-nita!"
    })
    return <div>
        <Header index="1"></Header>
        <main className="row p-lg-2">
            <picture className="col-lg-8 text-center">
                <img className="col-12 col-lg-9" src="/media/Criptomoneda.png" alt="" />
            </picture>
            <div className="col-lg-4">
                <LoginField></LoginField>
            </div>
        </main>
        <Footer></Footer>
    </div>




}
