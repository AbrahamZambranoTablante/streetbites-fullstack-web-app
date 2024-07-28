import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import '../CSS/Home.css'

const API = import.meta.env.VITE_API_URL;

export default function Home () {

    const [display, setDisplay] = useState("none")
    const [neighborhoods, setNeighborhoods] = useState({})
    const [neighborhoodsArray, setNeighborhoodsArray] = useState([])
    const [haveVendors, setHaveVendors] = useState("none")

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
        if (neighborhoods[borough]) {
            setNeighborhoodsArray(neighborhoods[borough])
            setDisplay("block")
            setHaveVendors("none")
        } else {
            setHaveVendors("block")
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
                <div className="home__logo">
                    <img src="/Street-Bites.png" alt="logo" className="logo-img"/>
                </div>
                <div className="home__locationForm">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="borough">
                            Select A Borough
                        </label><br/>
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
                        </select><br/>
                        <div style={{display: display}}>
                            <label htmlFor="neighborhood">
                                Select A Neighborhood
                            </label><br/>
                            <select name="neighborhood" id="neighborhood">
                                <option value="All Neighborhoods">All Neighborhoods</option>
                                {neighborhoodsArray.length? neighborhoodsArray.map(neighborhood => {
                                    return <option key={neighborhood} value={neighborhood}>{neighborhood}</option> 
                                }) : ""}
                            </select><br/>
                        </div>
                        <span style={{display:haveVendors}}>
                            <p>No vendors found in this Borough</p>
                        </span>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}