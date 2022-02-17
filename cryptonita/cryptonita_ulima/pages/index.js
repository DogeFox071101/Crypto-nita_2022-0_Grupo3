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
        <main className="row p-2">
            <picture className="col-8 text-center">
                <img className="picture2" src="/media/Criptomoneda.png" alt="" />
            </picture>
            <div className="col-4">
                <LoginField></LoginField>
            </div>
        </main>
        <Footer></Footer>
    </div>




}
