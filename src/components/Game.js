import { useState } from "react";
import {Link} from "react-router-dom";
import PlayerList from "../components/PlayerList";

const Game = ({postPlayer}) => {

<<<<<<< HEAD
    const [statePlayer, setStatePlayer] = useState({
        name: "",
        // numberOfWins: 0,
        // hitPoints: 100,
        // gold: 2,
        // weapon: null
    });

    const handleChange = (event) => {
        // let propertyName = event.target.name;
        let copiedPlayer = {...statePlayer};
        copiedPlayer.name = event.target.value;
        setStatePlayer(copiedPlayer);
    };

    const handlePlayerSubmit = (event) => {
        event.preventDefault();
        postPlayer(statePlayer);
=======
    const [statePlayer, setStatePlayer] = useState(
        {
            name: "",

        }
    )

    const handleChange = (event) => {

        let playerName = event.target.name;
        let copiedPlayer = {...statePlayer}
        copiedPlayer[playerName] = event.target.value;
        setStatePlayer(copiedPlayer);
>>>>>>> carlaBranch
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        postPlayer(statePlayer)


    }

    // const [statePlayer, setStatePlayer] = useState({
    //     name: " ",
    //     numberOfWins: 0,
    //     hitPoints: 100,
    //     gold: 2,
    //     weapon: null
    // });

    // const handleChange = (event) => {
    //     let copiedPlayer = {...statePlayer};
    //     copiedPlayer.name = event.target.value;
    //     setStatePlayer(copiedPlayer);
    // };

    // const handlePlayerSubmit = (event) => {
    //     postPlayer(statePlayer)
    // }

    return (
        
        <div className = "startGame" 
        style={{ backgroundImage: "url(/background_layer_1.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
    
        {/* <form onSubmit={handlePlayerSubmit}>
            <input type="text" placeholder="Enter name" name="name" onChange={handleChange} value={statePlayer.name}/>
            <button type="Submit"> <Link to="/Lobby">Start Game</Link></button>
        </form> */}

        <form onSubmit={handleFormSubmit}>
            
            <input 
                type="text" 
                placeholder="Player name" 
                name="name"
                onChange={handleChange}
                value={statePlayer.name} />

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