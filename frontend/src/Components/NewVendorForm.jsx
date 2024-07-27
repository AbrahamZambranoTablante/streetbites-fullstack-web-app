import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
        menu_photo: "",
        vendor_photo: "",
        vegan: false,
        likes: 0
    })

    function handleTextChange (e) {
        setNewVendor({...newVendor, [e.target.id]: e.target.value});
    }

    function handleCheckBox () {
        setNewVendor({...newVendor, vegan: newVendor.vegan ? false : true})
    }

    function createNewvendor () {
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
        createNewvendor()
    }


    return (
        <>
            <h1>Create A Vendor</h1>
            <div className="form__inputs">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="">Name:</label><br/>
                    <input id="name" type="text" value={newVendor.name} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="phone" className="">Phone:</label><br/>
                    <input id="phone" type="text" value={newVendor.phone} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="cuisine" className="">Cuisine:</label><br/>
                    <input id="cuisine" type="text" value={newVendor.cuisine} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="address" className="">Address:</label><br/>
                    <input id="address" type="text" value={newVendor.address} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="borough" className="">Borough:</label><br/>
                    <select id="borough" type="text" value={newVendor.borough} onChange={handleTextChange} className="form__input-field" > <br/>
                        <option></option>
                        <option value="Bronx">Bronx</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Queens">Queens</option>
                        <option value="Staten Island">Staten Island</option>
                    </select><br/>
                    <label htmlFor="neighborhood" className="">Neighborhood:</label><br/>
                    <input id="neighborhood" type="text" value={newVendor.neighborhood} onChange={handleTextChange} className="form__input-field" /><br/>
                    <label htmlFor="price_range" className="">Price Range:</label><br/>
                    <select id="price_range" type="text" value={newVendor.price_range} onChange={handleTextChange} className="form__input-field"><br/>
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
                    <label htmlFor="vegan" className="">Vegan:</label>
                    <input id="vegan" type="checkbox" value={newVendor.vegan} onChange={handleCheckBox} className="form__input-field" /><br/>
                    <label htmlFor="description" className="">Product Description:</label><br/>
                    <textarea id="description" value={newVendor.description} rows="3" cols="50" onChange={handleTextChange} className="form__input-field" /><br/>
                    <input type="submit" className="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}