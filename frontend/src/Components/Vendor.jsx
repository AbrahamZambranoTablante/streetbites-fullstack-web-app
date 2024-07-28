import { Link } from "react-router-dom";
import "../CSS/Vendor.css"

export default function Vendor ({vendor}) {

    const { name, cuisine, neighborhood, id, likes, price_range, vendor_photo } = vendor;

    return (
        <Link to={`/vendors/details/${id}`}>
            <div className="vendor">
                <div className="vendor__img">
                    <span>
                        <img src={vendor_photo} alt={name} />
                    </span>
                </div>
                <div className="vendor__details">
                    <p className="vendor__name">{name}</p>
                    <div className="other-info">
                        <p className="vendor__cusine">{cuisine}</p>
                        <p className="">{neighborhood}</p>
                        <p><i className="fa-regular fa-thumbs-up"></i> {likes}</p>
                        <p>{price_range}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}