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

    return (
        <>
            <div className="vendor__details">
                <div className="vendor__details-image">
                <img src="" alt="" />
                </div>
                <div className="vendor__details-info">
                <p>{vendor.name}</p>
                </div>
                <div className="vendor__details-menu">
                <img src="" alt="" />
                </div>
            </div>
            <div className="vendor__buttons">
            <button>Update</button>
            <button>Like</button>
            <button>Delete</button>
            </div>
        </>
    )
}