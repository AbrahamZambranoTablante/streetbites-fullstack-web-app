import { Link } from "react-router-dom"
import "../CSS/Footer.css"

export default function Footer () {
    return (
        <footer>
            <Link to="https://github.com/AbrahamZambranoTablante/streetbites-fullstack-web-app">
                <p>Source Code</p>
            </Link>
                <p>All Rights Reserved 2024</p>
            <Link to="/about">
                <p>About</p>
            </Link>
        </footer>
    )
}