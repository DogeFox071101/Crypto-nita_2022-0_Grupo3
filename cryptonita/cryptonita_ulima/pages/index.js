import Footer from "../components/footer.component";
import Header from "../components/header.component";
import LoginField from "../components/login.component";


export default function Home() {
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
