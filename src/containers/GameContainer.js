import Game from "../components/Game";
import Lobby from "../components/Lobby";
import Shop from "../components/Shop";
import Battle from "../components/Battle";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const GameContainer = () => {
    return (
        <BrowserRouter>
        <div>
            <button>
                <Link to="/Game">Play</Link>
            </button>
            <Routes>
                <Route path="/Game" element={<Game />}/>
                <Route path="/Lobby" element={<Lobby />}/>
                <Route path="/Shop" element={<Shop />}/>
                <Route path="/Battle" element={<Battle />}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default GameContainer;