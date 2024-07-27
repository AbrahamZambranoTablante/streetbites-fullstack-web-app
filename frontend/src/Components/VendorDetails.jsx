import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const API = import.meta.env.VITE_API_URL

export default function VendorDetails () {

    const { id } = useParams()

    const [vendor, setVendor] = useState({})
    const [like, setLikes] = useState(false)

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

    function handleUpdateLikes() {
        console.log(vendor.likes)
        setLikes(true)
        setVendor({...vendor, likes : vendor["likes"] + 1});
    }

    useEffect(() => {
        fetch(`${API}/vendors/details/${id}/edit`, {
            method: "PUT",
            body: JSON.stringify(vendor),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate(`/vendors/details/${id}`)
        })
        .catch(error => console.error(error))
    },[vendor.likes])

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
                {like ? <i className="fa-solid fa-thumbs-up"></i> : <i className="fa-regular fa-thumbs-up"></i>}
                <p>{vendor.likes}</p>
                </div>
                <div className="vendor__details-menu">
                <img src="" alt="" />
                </div>
            </div>
            <div className="vendor__buttons">
            <button onClick={()=>(navigate(`/vendors/details/${id}/edit`))}>Update</button>
            <button onClick={handleUpdateLikes} id="likes">Like</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}