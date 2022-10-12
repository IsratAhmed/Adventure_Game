import {Link} from "react-router-dom";
import './Lobby.css';

import playBtn from "../assets/background/play.png"

const Lobby = ({games, messages}) => {

    const welcomeMessage = messages[0];

    return(

        <section className="lobby-section" id="lobby">
            <div className="lobby-buttons">
                
                <Link to="/Shop"><img src={playBtn} /></Link>
                <Link to="/Battle"><img src={playBtn} /></Link>

            </div>
            <h4>{welcomeMessage}</h4>
        </section>

    )
}

export default Lobby;