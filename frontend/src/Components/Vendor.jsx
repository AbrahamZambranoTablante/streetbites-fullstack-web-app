export default function Vendor ({vendor}) {
    const {name, cuisine, address } = vendor;
    return (
        <>
            <div className="vendor">
                <h1 className="">{name}</h1>
                <h2 className="">{cuisine}</h2>
                <h2 className="">{address}</h2>
            </div>
        </>
    )
}