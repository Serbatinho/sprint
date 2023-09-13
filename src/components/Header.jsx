import { Link } from "react-router-dom";
import '../styles/Header.css'

export default function Header() {
    return (
        <>
            <navbar className="navbar-header">
                <Link to='/integrantes'>Integrantes</Link>
                <Link to='/materias'>Máterias</Link>
                <span>|</span>
                <Link to='/chatbot' className="dynamic-border btn btn-chatbot">Chatbot</Link>
                <Link to='/' className="home-button">Home</Link>
            </navbar>
        </>
    )
}