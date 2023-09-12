import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <navbar className="navbar navbar-header">
                <Link to='/integrantes'>Integrantes</Link>
                <Link to='/materias'>Máterias</Link>
                <span>|</span>
                <Link to='/chatbot'>Chatbot</Link>
                <Link to='/'>Home</Link>
            </navbar>
        </>
    )
}