import {Link} from "react-router-dom";

const Lobby = () => {

    return(
        <>
            <button><Link to="/Shop">Shop</Link></button>
            <button><Link to="/Battle">Battle</Link></button>
        </>
    )
}

export default Lobby;