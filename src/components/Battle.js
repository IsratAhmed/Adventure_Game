import {Link} from "react-router-dom";

const Battle = () => {

    return(
        <>
            <button><Link to="/Lobby">Back to Lobby</Link></button>
            <button><Link to="/Game">End the Game</Link></button>  
        </>
    )
}

export default Battle;