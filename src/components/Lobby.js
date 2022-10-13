import {Link} from "react-router-dom";
import './Lobby.css';
import battleBtn from "../assets/btn/battle_btn.png"
import shopBtn from "../assets/btn/shop_btn2.png"
import {useState} from "react";
import Hero from '../components/Hero_sprite.js';  
const Lobby = ({games, startLevel1}) => {

    // const welcomeMessage = messages[0];

    const handleStartGame = (event) => {
        startLevel1();
    }

    return(

        <section className="lobby-section" id="lobby">
            <div className="lobby-buttons">
                
                <Link to="/Shop"><img id="to-shop-btn" src={shopBtn} /></Link>
                <Link to="/Battle"><img id="to-battle-btn" src={battleBtn} onClick={handleStartGame}/></Link>

            </div>
            <div>
                <Hero/>
            </div>
            {/* <h4>{welcomeMessage}</h4> */}
        </section>

    )
}

export default Lobby;