import {Link, useNavigate} from "react-router-dom";
import './Battle.css';
import attackBtn from "../assets/btn/attack_btn.png"
import contBtn from "../assets/btn/continue_btn.png"
import Goblin from "./Goblin_Sprite";
import Hero_Shop from "./Hero_shop_sprite";
const Battle = ({activePlayer, attackMonsterLevel1, attackMonsterLevel2, attackMonsterLevel3}) => {

    const navigate = useNavigate();

    const attackMonster = (event) => {
            attackMonsterLevel1();
    }

    const endGame = (event) => {
        event.preventDefault();
        if (activePlayer.numberOfWins === 0 || activePlayer.hitPoints <= 0) {
            // activePlayer.numberOfwins > 2
            navigate(`/Game`);
        } else {
            navigate(`/Lobby`);
        }
    }

    return(

        <section className="battle-section" id="battle">
            <div className="battle-buttons">
                
                <Link to="#"><img id="attack-btn"src={attackBtn} onClick={attackMonster}/></Link>
                <img id="battle-continue-btn" src={contBtn} onClick={endGame}/>

            </div>

            <div>
                <Hero_Shop/>
                <Goblin/>
            </div>
        </section>

    )
}

export default Battle;