import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <main>
                <div>
                    <h1>Um aplicativo de acionamento de seguro para veículos pesados de forma rápida e efetiva</h1>
                    <Link to='/saiba-mais'>SAIBA MAIS</Link>
                </div>
            </main>
        </>
    )
}