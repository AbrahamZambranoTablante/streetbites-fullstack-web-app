import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../CSS/New.css"

export default function NewVendorForm () {

    const navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;
    const [newVendor, setNewVendor] = useState({
        name: "",
        phone: "",
        cuisine: "",
        address: "",
        neighborhood: "",
        borough: "",
        description: "",
        price_range: "",
        menu_photo: "/default-menu.png",
        vendor_photo: "/default-profile-pic.jpeg",
        vegan: false,
        likes: 0
    })

    function handleTextChange (e) {
        setNewVendor({...newVendor, [e.target.id]: e.target.value});
    }

    function handleCheckBox () {
        setNewVendor({...newVendor, vegan: newVendor.vegan ? false : true})
    }

    function createNewVendor () {
        fetch(`${API}/vendors/new`, {
            method: "POST",
            body: JSON.stringify(newVendor),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate(`/vendors/details/${newVendor.id}`)
        })
        .catch(error => console.error(error))
    }

    function handleSubmit (e) {
        e.preventDefault()
        createNewVendor()
    }

    return (
        <>
            <h1>Create A New Vendor</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form__inputs">
                    <div className="form__inputs-info">
                        <label htmlFor="name" className="">Name:</label><br/>
                            <input id="name" type="text" value={newVendor.name} onChange={handleTextChange} className="form__input-field" required/><br/>
                        <label htmlFor="phone" className="">Phone:</label><br/>
                            <input id="phone" type="text" value={newVendor.phone} onChange={handleTextChange} className="form__input-field" /><br/>
                        <label htmlFor="cuisine" className="">Cuisine:</label><br/>
                            <input id="cuisine" type="text" value={newVendor.cuisine} onChange={handleTextChange} className="form__input-field" required/><br/>
                        <label htmlFor="vegan" className="form__inputs-info-vegan">Vegan:</label><br />
                            <input id="vegan" type="checkbox" value={newVendor.vegan} onChange={handleCheckBox} className="form__input-field" /><br/>
                    </div>
                    <div className="form__inputs-area">
                        <label htmlFor="address" className="">Address:</label><br/>
                            <input id="address" type="text" value={newVendor.address} onChange={handleTextChange} className="form__input-field" required/><br/>
                        <label htmlFor="borough" className="">Borough:</label><br/>
                            <select id="borough" type="text" value={newVendor.borough} onChange={handleTextChange} className="form__input-field" required>
                                <option></option>
                                <option value="Bronx">Bronx</option>
                                <option value="Brooklyn">Brooklyn</option>
                                <option value="Manhattan">Manhattan</option>
                                <option value="Queens">Queens</option>
                                <option value="Staten Island">Staten Island</option>
                            </select><br/>
                        <label htmlFor="neighborhood" className="">Neighborhood:</label><br/>
                            <input id="neighborhood" type="text" value={newVendor.neighborhood} onChange={handleTextChange} className="form__input-field" required/><br/>
                        <button type="submit">Add</button>
                    </div>
                    <div className="form__inputs-data">
                        <label htmlFor="price_range" className="">Price Range:</label><br/>
                        <select id="price_range" type="text" value={newVendor.price_range} onChange={handleTextChange} className="form__input-field" required>
                            <option></option>
                            <option value="$1-5">$1-5</option>
                            <option value="$1-10">$1-10</option>
                            <option value="$5-10">$5-10</option>
                            <option value="$10-20">$10-20</option>
                            <option value="$20-50">$20-50</option>
                            <option value="$20-100">$20-100</option>
                        </select><br/>
                        <label htmlFor="menu_photo" className="">Menu Photo:</label><br/>
                            <input id="menu_photo" type="text" value={newVendor.menu_photo} onChange={handleTextChange} className="form__input-field" /><br/>
                        <label htmlFor="vendor_photo" className="">Vendor Photo:</label><br/>
                            <input id="vendor_photo" type="text" value={newVendor.vendor_photo} onChange={handleTextChange} className="form__input-field" /><br/>
                        <label htmlFor="description" className="">Vendor Description:</label><br/>
                            <textarea id="description" value={newVendor.description} rows="3" cols="30" onChange={handleTextChange} className="form__input-field" /><br/>
                    </div>
                    </div>
                </form>
        </>
    )
}