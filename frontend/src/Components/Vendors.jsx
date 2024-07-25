import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
import Vendor from './Vendor'


export default function Vendors () {
    const { selection } = useParams();
    const [vendors, setVendors] = useState([]);

    let navigate = useNavigate();

    const [byCuisine, setByCuisine] = useState("");



    useEffect(() => {
        fetch(`${API}/vendors/${selection}`)
        .then(res => res.json())
        .then(resJSON => setVendors(resJSON))
        .catch(error => {
            console.error(error)
        })
    }, [selection])

    useEffect(() => {
        fetch(`${API}/vendors/bycuisine/${byCuisine}`)
        .then(res => res.json())
        .then(resJSON => setVendors(resJSON))
        .catch(error => {
            console.error(error)
        })
    }, [byCuisine])

    function handleCuisineChange (e) {
        setByCuisine(e.target.value)
    }

    return (
        <>
            <div className="vendors">
                {
                    vendors.map(vendor => {
                        return <Vendor key={vendor.id} vendor={vendor}/>
                    })
                }
            </div>
            {
                selection === "bycuisine" ?
                <div className="dropdown">
                    <label htmlFor="cuisine" className=""></label>
                    <select id="cuisine" name='cuisine' onChange={handleCuisineChange}>
                        <option></option>
                        <option value='mexican'>Mexican</option>
                        <option value='chinese'>Chinese</option>
                    </select>
                </div> 
            : 
            null
            }
        </>
    )
}