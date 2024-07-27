import { Link } from "react-router-dom";

export default function Vendor ({vendor}) {

    const { name, cuisine, address, id } = vendor;

    return (
        <Link to={`/vendors/details/${id}`}>
            <div className="vendor">
                <h1 className="">{name}</h1>
                <h2 className="">{cuisine}</h2>
                <h2 className="">{address}</h2>
            </div>
        </Link>
    )
}