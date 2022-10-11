import Game from "../components/Game";
import Lobby from "../components/Lobby";
import Shop from "../components/Shop";
import Battle from "../components/Battle";
import {Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

const GameContainer = () => {
    const navigate = useNavigate();
    
    const [players, setPlayers] = useState([]);
    const fetchPlayersData = async() => {
        const response = await fetch("http://localhost:8080/players");
        const jsonData = await response.json();
        setPlayers(jsonData);
    };

    useEffect(() => {
        fetchPlayersData();
    }, []);

    const postPlayer = async(newPlayerName) => {
        // const newPlayerName = newPlayer.name;
        const response = await fetch("http://localhost:8080/players?name=" + newPlayerName, {
             method:"POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name: newPlayerName })
        });
        const savedPlayer = await response.json();
        setPlayers([...players, savedPlayer]);
        return savedPlayer
    }

    const [games, setGames] = useState([]);

    const postGame = async(newPlayerName) => {
        const playerIndex = players.findIndex(player => player.name === newPlayerName)
        let player
        if(playerIndex === -1) {
            // player does not exist
            player  = await postPlayer(newPlayerName);
        } else player = players[playerIndex]
        const response = await fetch("http://localhost:8080/games?playerId=" + player.id, {
            method:"POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ id: player.id })
        });
        const savedGame = await response.json();
        setGames([...games, savedGame]);
        navigate(`/Lobby`);
    }

    return (
            <div>
                <button>
                    <Link to="/Game">Play</Link>
                </button>
                <Routes>
                    <Route path="/Game" element={<Game postGame={postGame}/>}/>
                    <Route path="/Lobby/:gameId" element={<Lobby games={games} />}/>
                    <Route path="/Shop" element={<Shop />}/>
                    <Route path="/Battle" element={<Battle />}/>
            </Routes>
        </div>
    )
}

export default GameContainer;