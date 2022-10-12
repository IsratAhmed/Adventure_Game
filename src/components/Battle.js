import {Link} from "react-router-dom";
import './Battle.css';
import attackBtn from "../assets/btn/attack_btn.png"
import contBtn from "../assets/btn/continue_btn.png"
const Battle = () => {

    const attackMonster = (event) => {

        // http://localhost:8080/games/combat?battleId=1
    }


    return(

        <section className="battle-section" id="battle">
            <div className="battle-buttons">
                
                <Link to="#"><img id="attack-btn"src={attackBtn} onClick={attackMonster}/></Link>
                <Link to="/Lobby"><img id="battle-continue-btn" src={contBtn} /></Link>

            </div>

        </section>

    )
}

export default Battle;