import {Link} from "react-router-dom";
import './Battle.css';
import attackBtn from "../assets/btn/attack_btn.png"
import contBtn from "../assets/btn/continue_btn.png"
const Battle = () => {

    return(

        <section className="battle-section" id="battle">
            <div className="battle-buttons">
                
                <Link to="/Shop"><img src={attackBtn} /></Link>
                <Link to="/Lobby"><img src={contBtn} /></Link>

            </div>

        </section>

    )
}

export default Battle;