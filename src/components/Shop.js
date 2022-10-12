import {Link} from "react-router-dom";
import './Shop.css';
import WeaponList from "./WeaponList";
import battleBtn from "../assets/btn/battle_btn.png"

const Shop = ({shop, buyWeapon}) => {

    // const returnPlayerGold = (playerName) => {
    //     const playerIndex = players.findIndex(player => player.name === playerName)
    //     return players[playerIndex].gold;
    // }

        return(

            <section className="shop-section" id="shop">
                <div className="shop-buttons">

                    <Link to="/Battle"><img src={battleBtn} /></Link>
    
                </div>
            
            <h2 id="shop-name">{shop.shopName}</h2>
            {/* <h3>{playerName} {returnPlayerGold}</h3> */}
            <WeaponList shop={shop} buyWeapon={buyWeapon}/>

            </section>
    
        )
    
}

export default Shop;