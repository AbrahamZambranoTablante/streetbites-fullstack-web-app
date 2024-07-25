import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
import Vendor from './Vendor'


export default function Vendors () {
    const { selection } = useParams();
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        fetch(`${API}/vendors/${selection}`)
        .then(res => res.json())
        .then(resJSON => setVendors(resJSON))
        .catch(error => {
            console.error(error)
        })
    }, [selection])

    return (
        <>
            <div className="vendors">
                {
                    vendors.map(vendor => {
                        return <Vendor key={vendor.id} vendor={vendor}/>
                    })
                }
            </div>
        </>
    )
}