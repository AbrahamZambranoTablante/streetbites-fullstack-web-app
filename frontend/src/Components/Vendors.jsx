import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
import Vendor from './Vendor'


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

    console.log(URL)

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
            <div className="vendors">
                {vendors.length ?
                    vendors.map(vendor => {
                        return <Vendor key={vendor.id} vendor={vendor}/>
                    })
                : <h1>No Vendors Found</h1>}
            </div>
            {
                selection === "bycuisine" ?
                <div className="dropdown">
                    <label htmlFor="cuisine" className=""></label>
                    <select id="cuisine" name='cuisine' onChange={handleCuisineChange}>
                        <option></option>
                        <option value='mexican'>Mexican</option>
                        <option value='chinese'>Chinese</option>
                        <option value='colombian'>Colombian</option>
                        <option value='greek'>Greek</option>
                        <option value='peruvian'>Peruvian</option>
                    </select>
                </div> 
            : 
            null
            }
        </>
    )
}