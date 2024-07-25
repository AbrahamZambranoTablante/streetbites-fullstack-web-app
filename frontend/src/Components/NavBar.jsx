import { Link } from "react-router-dom"
import "../CSS/NavBar.css"

export default function NavBar () {

    return (
        <nav>
            <div className="navbar__links">
                <Link to="/">
                    <p className="navbar__links-logo">StreetBites</p>
                </Link>
                <Link to="/vendors/topfavorites">
                    <p className="navbar__links-topfavorites">Top Favorites</p>
                </Link>
                <Link to="/vendors/cheapest">
                    <p className="navbar__links-cheapest">Cheapest</p>
                </Link>
                <Link to="/vendors/bycuisine">
                    <p className="navbar__links-bycuisine">Find By Cuisine</p>
                </Link>
                <Link to="/vendors/new">
                    <p className="navbar__links-new">New Vendor</p>
                </Link>
            </div>
        </nav>
    )
}