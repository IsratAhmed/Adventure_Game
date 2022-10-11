import Game from "../components/Game";
import Lobby from "../components/Lobby";
import Shop from "../components/Shop";
import Battle from "../components/Battle";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from "react";

const GameContainer = () => {
    
    const [players, setPlayers] = useState([]);
    const fetchPlayersData = async() => {
        const response = await fetch("http://localhost:8080/players");
        const jsonData = await response.json();
        setPlayers(jsonData);
    };

    useEffect(() => {
        fetchPlayersData();
    }, []);

    const postPlayer = async(newPlayer) => {
        const response = await fetch("http://localhost:8080/players" + newPlayer, {
            method:"POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPlayer)
        });
        const savedPlayer = await response.json();
        setPlayers([...players, savedPlayer]);
    }

    return (
        <BrowserRouter>
            <div>
                <button>
                    <Link to="/Game">Play</Link>
                </button>
                <Routes>
                    <Route path="/Game" element={<Game postPlayer={postPlayer}/>}/>
                    <Route path="/Lobby" element={<Lobby />}/>
                    <Route path="/Shop" element={<Shop />}/>
                    <Route path="/Battle" element={<Battle />}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default GameContainer;