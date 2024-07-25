import Vendors from "../Components/Vendors"
import { useParams } from "react-router-dom";

export default function Index () {
    const { selection } = useParams();
    console.log(selection)
    return (
        <>
            <Vendors />
        </>
    )
}