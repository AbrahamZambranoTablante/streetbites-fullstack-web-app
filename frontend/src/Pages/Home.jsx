import { useNavigate } from "react-router-dom"
import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

const neighborhoodData = {
    "manhattan" : ["Chinatown", "Wall Street"],
    "brooklyn" : ["Flatbush", "Bushwick"],
    "queens" : ["Astoria", "Jackson Heights"],
    "bronx": ["Harlem", "Washington Heights"],
    "statenisland":["Stapleton", "Brighton Heights"]
}

export default function Home () {

    const [display, setDisplay] = useState("none")
    const [borough, setBorough] = useState("")

    let navigate = useNavigate();

    function handleBoroughChange(event) {
        if (event.target.value) {
            setBorough(event.target.value)
            setDisplay("block")
        } else {
            setDisplay("none")
            setBorough("")
        } 
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.borough.value)
        console.log(event.target.neighborhood.value)
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
                            <option value="manhattan">Manhattan</option>
                            <option value="brooklyn">Brooklyn</option>
                            <option value="queens">Queens</option>
                            <option value="bronx">Bronx</option>
                            <option value="statenisland">Staten Island</option>
                        </select>
                        <div style={{display: display}}>
                            <label htmlFor="neighborhood">
                                Select A Neighborhood
                            </label>
                            <select name="neighborhood" id="neighborhood">
                                <option value="All Neighborhoods">All Neighborhoods</option>
                                {borough ? neighborhoodData[borough].map(neighborhood => {
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