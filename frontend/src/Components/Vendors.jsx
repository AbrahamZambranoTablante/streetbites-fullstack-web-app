import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Vendor from './Vendor'
import "../CSS/Vendors.css"

const API = import.meta.env.VITE_API_URL;

export default function Vendors () {

    const { selection, cuisine, neighborhood, borough } = useParams();

    const [vendors, setVendors] = useState([]);

    let navigate = useNavigate();

    let URL;

    if (neighborhood) {
        URL = `${API}/vendors/location/${borough}/${neighborhood}`
    } else if (borough) {
        URL = `${API}/vendors/location/${borough}`
    } else if (cuisine) {
        if (cuisine === "allcuisine") {
            URL = `${API}/vendors/${selection}`
        } else {
            URL = `${API}/vendors/${selection}/${cuisine}`
        }
    } else {
            URL = `${API}/vendors/${selection}`
    }

    const uniqueCuisine = [... new Set(vendors.map(vendor => vendor.cuisine))]

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(resJSON => setVendors(resJSON))
        .catch(error => {
            navigate("/notfound")
            console.error(error)
        })
    }, [URL])

    function handleCuisineChange (e) {
        navigate(`/vendors/${selection}/${e.target.value}`)
    }

    return (
        <>
                {
                    selection === "bycuisine" ?
                    <div className="dropdown">
                        <h3>Choose A Cuisine</h3>
                        <label htmlFor="cuisine" className=""></label>
                        <select id="cuisine" name='cuisine' onChange={handleCuisineChange}>
                            <option></option>
                            {uniqueCuisine.length? uniqueCuisine.map(cuisine => {
                                    return <option key={cuisine} value={cuisine}>{cuisine}</option> 
                                }) : ""}
                        </select>
                    </div> 
                : 
                null
                }
            <div className="vendors">
                {vendors.length ?
                    vendors.map(vendor => {
                        return <Vendor key={vendor.id} vendor={vendor}/>
                    })
                : <h1>No Vendors Found</h1>}
            </div>
        </>
    )
}