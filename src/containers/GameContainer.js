import Game from "../components/Game";
import Lobby from "../components/Lobby";
import Shop from "../components/Shop";
import Battle from "../components/Battle";
import {Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

const GameContainer = () => {
    const navigate = useNavigate();
    
    const [players, setPlayers] = useState([]);
    const [activePlayer, setActivePlayer] = useState(null);

    const fetchPlayersData = async() => {
        const response = await fetch("http://localhost:8080/players");
        const jsonData = await response.json();
        setPlayers(jsonData);
    };

    const fetchPlayerById = async() => {
        const response = await fetch("http://localhost:8080/players/" + activePlayer.id);
        const jsonData = await response.json();
        setActivePlayer(jsonData);
    };

    useEffect(() => {
        fetchPlayersData();
        // fetchPlayerById();
        fetchShopData();
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
        setActivePlayer(savedPlayer);
        return savedPlayer;
    }

    const [games, setGames] = useState([]);

    const [messages, setMessages] = useState([]);

    const postGame = async(newPlayerName) => {
        const playerIndex = players.findIndex(player => player.name === newPlayerName)
        let player
        if(playerIndex === -1) {
            // player does not exist
            player  = await postPlayer(newPlayerName);
            // setActivePlayer(player);
        } else player = players[playerIndex]
        const response = await fetch("http://localhost:8080/games?playerId=" + player.id, {
            method:"POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ id: player.id })
        });
        const savedGame = await response.json();
        setGames([...games, savedGame]);
        navigate(`/Lobby`);
        // getting the Welcome Message
        const copiedMessages = [...messages, savedGame.message]
        setMessages(copiedMessages);
    }

    const [shop, setShop] = useState([]);
    const fetchShopData = async() => {
        const response = await fetch("http://localhost:8080/shops");
        const jsonData = await response.json();
        setShop(jsonData[0]);
    };

    const buyWeapon = async (weaponId) => {
        console.log(weaponId);
        const response = await fetch(`http://localhost:8080/players?playerId=${activePlayer.id}&weaponId=${weaponId}`, {
            method:"PATCH", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ id: activePlayer.id })
        })
        const buyingMessage = await response.json();
        const copiedMessages = [...messages, buyingMessage.message]
        setMessages(copiedMessages);
        fetchPlayersData();
        fetchPlayerById();

        // setActivePlayer(activePlayer);
        // setActivePlayer();
    }

    return (
            <div>
                <button>
                    <Link to="/Game">Play</Link>
                </button>
                <Routes>
                    <Route path="/Game" element={<Game postGame={postGame}/>}/>
                    <Route path="/Lobby" element={<Lobby games={games} messages={messages}/>}/>
                    <Route path="/Shop" element={<Shop shop={shop} buyWeapon={buyWeapon}/>}/>
                    <Route path="/Battle" element={<Battle />}/>
            </Routes>
        </div>
    )
}

export default GameContainer;