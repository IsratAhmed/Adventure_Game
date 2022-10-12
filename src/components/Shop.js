import {Link} from "react-router-dom";
import './Shop.css';
import playBtn from "../assets/background/play.png"
import WeaponList from "./WeaponList";


const Shop = ({shop, buyWeapon}) => {

    // const returnPlayerGold = (playerName) => {
    //     const playerIndex = players.findIndex(player => player.name === playerName)
    //     return players[playerIndex].gold;
    // }

        return(

            <section className="shop-section" id="shop">
                <div className="shop-buttons">
                
                    <Link to="/Battle"><img src={playBtn} /></Link>
    
                </div>
            
            <h2 id="shop-name">{shop.shopName}</h2>
            {/* <h3>{playerName} {returnPlayerGold}</h3> */}
            <WeaponList shop={shop} buyWeapon={buyWeapon}/>

            </section>
    
        )
    
}

export default Shop;