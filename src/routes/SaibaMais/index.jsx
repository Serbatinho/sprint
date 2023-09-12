import '../../styles/SaibaMais.css'
import carro from '../../images/homecar.png'

export default function SaibaMais() {
    return (
        <>
            <main className="full-container">
                <div className="mid-container mid-container-saiba">
                    <figure>
                        <img className="image-saiba" src={carro} alt="Saiba Mais" />
                        <figcaption>Projeto Proteção Pesada</figcaption>
                    </figure>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
                </div>
            </main>
        </>
    )
}