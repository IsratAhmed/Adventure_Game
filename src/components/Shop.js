import {Link} from "react-router-dom";
import './Shop.css';
<<<<<<< HEAD
import playBtn from "../assets/background/play.png"
import WeaponList from "./WeaponList";
=======
import battleBtn from "../assets/btn/battle_btn.png"
>>>>>>> mc-game


const Shop = ({shop, buyWeapon}) => {

    // const returnPlayerGold = (playerName) => {
    //     const playerIndex = players.findIndex(player => player.name === playerName)
    //     return players[playerIndex].gold;
    // }

        return(

            <section className="shop-section" id="shop">
                <div className="shop-buttons">
<<<<<<< HEAD
                
                    <Link to="/Battle"><img src={playBtn} /></Link>
=======
                    

                    <Link to="/Battle"><img src={battleBtn} /></Link>
>>>>>>> mc-game
    
                </div>
            
            <h2 id="shop-name">{shop.shopName}</h2>
            {/* <h3>{playerName} {returnPlayerGold}</h3> */}
            <WeaponList shop={shop} buyWeapon={buyWeapon}/>

            </section>
    
        )
    
}

export default Shop;