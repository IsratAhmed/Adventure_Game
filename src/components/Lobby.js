import {Link} from "react-router-dom";
import './Lobby.css';

import playBtn from "../assets/background/play.png"

const Lobby = () => {

    return(

        <section className="lobby-section" id="lobby">
            <div className="lobby-buttons">
                
                <Link to="/Shop"><img src={playBtn} /></Link>
                <Link to="/Battle"><img src={playBtn} /></Link>

            </div>

        </section>

    )
}

export default Lobby;