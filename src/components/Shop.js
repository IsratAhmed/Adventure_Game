import {Link} from "react-router-dom";

const Shop = () => {

    return(
        <>
            <button><Link to="/Lobby">Back to Lobby</Link></button>
            <button><Link to="/Battle">Battle</Link></button>
            <p>Text</p>
        </>
    )
}

export default Shop;