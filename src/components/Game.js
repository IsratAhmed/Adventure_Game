import { useState } from "react";
import {Link} from "react-router-dom";

const Game = ({postPlayer}) => {

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
        postPlayer(statePlayerName);
    }

    return (
        
        <div className = "startGame" 
        style={{ backgroundImage: "url(/background_layer_1.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
    
        <form onSubmit={handlePlayerSubmit}>
            <input type="text" placeholder="Enter name" name="name" onChange={handleChange} value={statePlayerName}/>
            <button type="Submit"> <Link to="/Lobby">Start Game</Link></button>
        </form>

        <div id="allthethings">

        <div id="start"><p>START GAME</p></div>
        <div id="instructions"><p>INSTRUCTIONS</p></div>
        <div id="options"><p>CREDITS</p></div>

        <div id="exit"></div>
        <div id="circle"></div>

        </div>
    </div>

    )
}

export default Game;