import {Link} from "react-router-dom";

const Game = () => {

    return (
        // <div className="StartGame">
        // // style={{ backgroundImage: "url(/background_layer_1.png)", 
        // // backgroundPosition: 'center',
        // // backgroundSize: 'cover',
        // // backgroundRepeat: 'no-repeat'}}>

        // //     <form>
        // //         <input placeholder="Enter name"/>
        // //         <button> <Link to="/Lobby">Start Game</Link></button>
        // //     </form>
        // </div>
        
<div className = "startGame"

style={{ backgroundImage: "url(/background_layer_1.png)",
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
>
    <form>
        <input placeholder="Enter name"/>
        <button> <Link to="/Lobby">Start Game</Link></button>
 </form>

<div id="allthethings">

<div id="start"><p>START GAME</p></div>
  <div id="instructions"><p>INSTRUCTIONS</p></div>
  <div id="options"><p>CREDITS</p></div>

  <div id="exit"></div>
  <div id="circle"></div>
</div>
</div>
// </body>
    
    )
}

export default Game;