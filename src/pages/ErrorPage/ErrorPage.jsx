import { Link } from "react-router-dom"
import "./ErrorPage.css"

export const ErrorPage = () => (
    <div className="error-page">
        <Link to="/homepage">Domů</Link>
        <h1 className="error-title">404</h1>
        <h2>Tady nic není</h2>
    </div>
)