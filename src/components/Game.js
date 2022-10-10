import {Link} from "react-router-dom";

const Game = () => {

    return (
        <div className="StartGame">
            <form>
                <input placeholder="Enter name"/>
                <button> <Link to="/Lobby">Start Game</Link></button>
            </form>
        </div>
    )
}

export default Game;