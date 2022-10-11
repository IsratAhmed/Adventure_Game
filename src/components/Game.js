import { useState } from "react";
import {Link} from "react-router-dom";
import PlayerList from "../components/PlayerList";
import '../components/Game.css';
import playImg from "../assets/background/play.png";

const Game = ({postGame}) => {

    const [statePlayer, setStatePlayer] = useState({
        name: "",
        // numberOfWins: 0,
        // hitPoints: 100,
        // gold: 2,
        // weapon: null
    });

    const [statePlayerName, setStatePlayerName] = useState("");

    const handleChange = (event) => {
        // let propertyName = event.target.name;
        // let copiedPlayer = {...statePlayer};
        // copiedPlayer.name = event.target.value;
        setStatePlayerName(event.target.value);
    };

    const handlePlayerSubmit = (event) => {
        event.preventDefault();
        // postPlayer(statePlayer);
        postGame(statePlayerName);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        postGame(statePlayer)
    }

    return (
        
        <div className = "startGame" 
        style={{ backgroundImage: "url(/background_layer_1.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
            
    <section className="game-section" id="game">
        <div className="game-buttons">
            <div className="inputBox">
        <form onSubmit={handlePlayerSubmit}>
            <input type="text" placeholder="Enter name" name="name" onChange={handleChange} value={statePlayerName} required = "required"/>
            <button type="Submit">Start Game</button>
           <Link to="/Lobby"><img src={playImg} /></Link>
        </form>
        </div>
       
    </div>
    </section>
</div>


    )
}

export default Game;