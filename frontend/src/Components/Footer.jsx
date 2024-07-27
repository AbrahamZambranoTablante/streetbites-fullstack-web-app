import { Link } from "react-router-dom"
import "../CSS/Footer.css"

export default function Footer () {
    return (
        <footer>
            <Link to="https://github.com/AbrahamZambranoTablante/streetbites-fullstack-web-app">
                <a>Source Code</a>
            </Link>
                <p>All Rights Reserved 2024</p>
            <Link to="/about">
                <a>About</a>
            </Link>
        </footer>
    )
}