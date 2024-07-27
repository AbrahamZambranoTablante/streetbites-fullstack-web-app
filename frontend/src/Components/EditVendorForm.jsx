import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditVendorForm () {

    const { id } = useParams();
    const navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;

    const [editVendor, setEditVendor] = useState({
        name: "",
        phone: "",
        cuisine: "",
        address: "",
        neighborhood: "",
        borough: "",
        description: "",
        price_range: "",
        menu_photo: "",
        vendor_photo: "",
        vegan: false,
        likes: 0
    });

    useEffect(() => {
        fetch(`${API}/vendors/${id}`)
        .then(res => res.json())
        .then(resJSON => setEditVendor(resJSON))
        .catch(error => console.error(error))
    }, [])

    function handleTextChange (e) {
        setEditVendor({...editVendor, [e.target.id]: e.target.value});
    }

    function handleCheckBox () {
        setEditVendor({...editVendor, vegan: editVendor.vegan ? false : true})
    }

    function updateVendor () {
        fetch(`${API}/vendors/${id}/edit`, {
            method: "PUT",
            body: JSON.stringify(editVendor),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate(`/vendors/${id}`)
        })
        .catch(error => console.error(error))
    }

    function handleSubmit (e) {
        e.preventDefault()
        updateVendor()
    }


    return (
        <>
           <h1>Edit Vendor</h1>
            <div className="form__inputs">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="">Name:</label><br/>
                    <input id="name" type="text" value={editVendor.name} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="phone" className="">Phone:</label><br/>
                    <input id="phone" type="text" value={editVendor.phone} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="cuisine" className="">Cuisine:</label><br/>
                    <input id="cuisine" type="text" value={editVendor.cuisine} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="address" className="">Address:</label><br/>
                    <input id="address" type="text" value={editVendor.address} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="neighborhood" className="">Neighborhood:</label><br/>
                    <input id="neighborhood" type="text" value={editVendor.neighborhood} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="borough" className="">Borough:</label><br/>
                    <input id="borough" type="text" value={editVendor.borough} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="price_range" className="">Price Range:</label><br/>
                    <select id="price_range" type="text" value={editVendor.price_range} onChange={handleTextChange} className="form__input-field"><br/>
                        <option></option>
                        <option value="$1-5">$1-5</option>
                        <option value="$1-10">$1-10</option>
                        <option value="$5-10">$5-10</option>
                        <option value="$10-20">$10-20</option>
                        <option value="$20-50">$20-50</option>
                        <option value="$20-100">$20-100</option>
                    </select><br/>
                    <label htmlFor="menu_photo" className="">Menu Photo:</label><br/>
                    <input id="menu_photo" type="text" value={editVendor.menu_photo} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="vendor_photo" className="">Vendor Photo:</label><br/>
                    <input id="vendor_photo" type="text" value={editVendor.vendor_photo} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="vegan" className="">Vegan:</label>
                    <input id="vegan" type="checkbox" value={editVendor.vegan} onChange={handleCheckBox} className="form__input-field" /><br/>
                    <label htmlFor="description" className="">Product Description:</label><br/>
                    <textarea id="description" value={editVendor.description} rows="3" cols="50" onChange={handleTextChange} className="form__input-field" /><br/>
                    <input type="submit" className="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}