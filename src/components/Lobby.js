import {Link} from "react-router-dom";
import './Lobby.css';
import battleBtn from "../assets/btn/battle_btn.png"
import shopBtn from "../assets/btn/shop_btn2.png"

const Lobby = ({games, messages}) => {

    const welcomeMessage = messages[0];

    return(

        <section className="lobby-section" id="lobby">
            <div className="lobby-buttons">
                
                <Link to="/Shop"><img src={shopBtn} /></Link>
                <Link to="/Battle"><img src={battleBtn} /></Link>

            </div>
            <h4>{welcomeMessage}</h4>
        </section>

    )
}

export default Lobby;