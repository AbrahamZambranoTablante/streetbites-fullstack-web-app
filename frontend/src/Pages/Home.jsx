import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Home () {

    const [display, setDisplay] = useState("none")
    const [neighborhoods, setNeighborhoods] = useState({})
    const [neighborhoodsArray, setNeighborhoodsArray] = useState([])

    useEffect(() => {
        fetch(`${API}/vendors/bycuisine`)
        .then(res => res.json())
        .then(resJSON => {
            let neighborhoodsData = {}
            for (let i = 0; i < resJSON.length; i++) {
                    let currentBorough = resJSON[i]["borough"]
                    let currentNeighborhood = resJSON[i]["neighborhood"]
                    if (neighborhoodsData[currentBorough]) {
                        if (neighborhoodsData[currentBorough].includes(currentNeighborhood)){
                        } else {
                            neighborhoodsData[currentBorough].push(currentNeighborhood)
                        }
                    } else {
                        neighborhoodsData[currentBorough] = [currentNeighborhood]
                    }
            }
            setNeighborhoods({...neighborhoodsData})
    })
        .catch(error => {
            navigate("/notfound")
            console.error(error)
        })
    }, [])

    let navigate = useNavigate();

    function handleBoroughChange(event) {
        const borough = event.target.value
        if (borough) {
            setNeighborhoodsArray(neighborhoods[borough])
            setDisplay("block")
        } else {
            setDisplay("none")
        } 
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (event.target.neighborhood.value === "All Neighborhoods") {
            navigate(`/vendors/location/${event.target.borough.value}`)
        } else {
            navigate(`/vendors/location/${event.target.borough.value}/${event.target.neighborhood.value}`)
        }
    }

    return (
        <>
            <div className="home-container">
                <div className="home__title">
                    <h1>Street Bites</h1>
                </div>
                <div className="home__logo">
                    <img src="https://yt3.googleusercontent.com/bcuWJYLswS-Xks91LsWiboQLQt1vPATQ7HybqU-oajLvGQ6fC0EbICgF5XlOst0VXh_lNYus_HE=s900-c-k-c0x00ffffff-no-rj
" alt="logo" />
                </div>
                <div className="home__locationForm">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="borough">
                            Select A Borough
                        </label>
                        <select 
                            name="borough" 
                            id="borough"
                            onChange={handleBoroughChange}
                            required
                        >
                            <option></option>
                            <option value="Manhattan">Manhattan</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Queens">Queens</option>
                            <option value="Bronx">Bronx</option>
                            <option value="Statenisland">Staten Island</option>
                        </select>
                        <div style={{display: display}}>
                            <label htmlFor="neighborhood">
                                Select A Neighborhood
                            </label>
                            <select name="neighborhood" id="neighborhood">
                                <option value="All Neighborhoods">All Neighborhoods</option>
                                {neighborhoodsArray.length? neighborhoodsArray.map(neighborhood => {
                                    return <option key={neighborhood} value={neighborhood}>{neighborhood}</option> 
                                }) : ""}
                            </select>
                        </div>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}