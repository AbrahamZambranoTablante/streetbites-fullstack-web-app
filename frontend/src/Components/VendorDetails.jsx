import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const API = import.meta.env.VITE_API_URL

export default function VendorDetails () {

    const { id } = useParams()

    const [vendor, setVendor] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/vendors/details/${id}`)
        .then((res) => res.json())
        .then((resJSON) => setVendor(resJSON))
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }, [id, navigate])

    function handleDelete() {
        fetch(`${API}/vendors/details/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            navigate(`/vendors/bycuisine`)
        })
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }

    function updateLikes() {
        
    }

    return (
        <>
            <div className="vendor__details">
                <div className="vendor__details-image">
                <img src="" alt="" />
                </div>
                <div className="vendor__details-info">
                <h1>{vendor.name}</h1>
                <h2 className="">{vendor.cuisine}</h2>
                <h2 className="">{vendor.address}</h2>
                </div>
                <div className="vendor__details-menu">
                <img src="" alt="" />
                </div>
            </div>
            <div className="vendor__buttons">
            <button onClick={()=>(navigate(`/vendors/details/${id}/edit`))}>Update</button>
            <button onClick={updateLikes}>Like</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}