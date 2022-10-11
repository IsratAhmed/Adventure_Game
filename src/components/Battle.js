import {Link} from "react-router-dom";
import './Battle.css';

import playBtn from "../assets/background/play.png"
const Battle = () => {

    return(

        <section className="battle-section" id="battle">
            <div className="battle-buttons">
                
                <Link to="/Shop"><img src={playBtn} /></Link>
                <Link to="/Lobby"><img src={playBtn} /></Link>

            </div>

        </section>

    )
}

export default Battle;