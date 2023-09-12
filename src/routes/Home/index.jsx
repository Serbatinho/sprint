import { Link } from "react-router-dom";

import '../../styles/Home.css'

import carro from '../../images/homecar.png'

export default function Home() {
    return (
        <>
            <main className="full-container">
                <div className="mid-container mid-container-home">
                    <h1>Um aplicativo de acionamento de seguro para veículos pesados de forma rápida e efetiva</h1>
                    <Link to='/saiba-mais' className="dynamic-border btn">SAIBA MAIS</Link>
                    <img src={carro} alt="Carro Proteção Pesada" />
                </div>
            </main>
        </>
    )
}