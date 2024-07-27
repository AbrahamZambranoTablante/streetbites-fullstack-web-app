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
        fetch(`${API}/vendors/details/${id}`)
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
        fetch(`${API}/vendors/details/${id}/edit`, {
            method: "PUT",
            body: JSON.stringify(editVendor),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate(`/vendors/details/${id}`)
        })
        .catch(error => console.error(error))
    }

    function handleSubmit (e) {
        e.preventDefault()
        updateVendor()
    }


    return (
        <>
            <h1>Update A Vendor</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form__inputs">
                    <div className="form__inputs-info">
                        <label htmlFor="name" className="">Name:</label><br/>
                            <input id="name" type="text" value={editVendor.name} onChange={handleTextChange} className="form__input-field" /><br/>
                        <label htmlFor="phone" className="">Phone:</label><br/>
                            <input id="phone" type="text" value={editVendor.phone} onChange={handleTextChange} className="form__input-field" /><br/>
                        <label htmlFor="cuisine" className="">Cuisine:</label><br/>
                            <input id="cuisine" type="text" value={editVendor.cuisine} onChange={handleTextChange} className="form__input-field" /><br/>
                        <label htmlFor="vegan" className="form__inputs-info-vegan">Vegan:</label><br />
                            <input id="vegan" type="checkbox" value={editVendor.vegan} onChange={handleCheckBox} className="form__input-field-vegan" /><br/>
                    </div>
                    <div className="form__inputs-area">
                        <label htmlFor="address" className="">Address:</label><br/>
                            <input id="address" type="text" value={editVendor.address} onChange={handleTextChange} className="form__input-field" /><br/>
                        <label htmlFor="borough" className="">Borough:</label><br/>
                            <select id="borough" type="text" value={editVendor.borough} onChange={handleTextChange} className="form__input-field" >
                                <option></option>
                                <option value="Bronx">Bronx</option>
                                <option value="Brooklyn">Brooklyn</option>
                                <option value="Manhattan">Manhattan</option>
                                <option value="Queens">Queens</option>
                                <option value="Staten Island">Staten Island</option>
                            </select><br/>
                        <label htmlFor="neighborhood" className="">Neighborhood:</label><br/>
                            <input id="neighborhood" type="text" value={editVendor.neighborhood} onChange={handleTextChange} className="form__input-field" /><br/>
                        <button type="submit">Add</button>
                    </div>
                    <div className="form__inputs-data">
                        <label htmlFor="price_range" className="">Price Range:</label><br/>
                        <select id="price_range" type="text" value={editVendor.price_range} onChange={handleTextChange} className="form__input-field">
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
                        <label htmlFor="description" className="">Vendor Description:</label><br/>
                            <textarea id="description" value={editVendor.description} rows="3" cols="30" onChange={handleTextChange} className="form__input-field" /><br/>
                    </div>
                    </div>
                </form>
        </>
    )
}