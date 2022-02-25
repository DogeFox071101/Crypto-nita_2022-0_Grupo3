import Footer from "../components/footer.component";
import Header from "../components/header.component";
import LoginField from "../components/login.component";
import React, { useEffect, useState } from "react";

export default function Home() {
    
    const [errorLogin, setErrorLogin] = useState(false)
        
    useEffect(() => {
        document.title = "¡Compra y vende BTC aquí en Crypto-nita!"
    })

    const loginHandler = async (email, password) => {
        let response = await fetch(`/api/login/${email}/${password}`)
        const data = await response.json()
        if(data.result == "approved") {
            if(data.mode == "user") {
                location.href = "/panelCliente"
            }
            else if (data.mode == "admin") {
                location.href = "/panelAdmin"
            }
        }
        else {
            setErrorLogin(true)
        }
    }

    return <div>
        <Header index="1"></Header>
        <main className="row p-lg-2">
            <picture className="col-lg-8 text-center">
                <img className="col-12 col-lg-9" src="/media/Criptomoneda.png" alt="" />
            </picture>
            <div className="col-lg-4">
                <LoginField onLogin={ loginHandler } error={ errorLogin }></LoginField>
            </div>
        </main>
        <Footer></Footer>
    </div>




}
