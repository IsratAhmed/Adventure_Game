import {Link} from "react-router-dom";
import './Shop.css';
import WeaponList from "./WeaponList";
import battleBtn from "../assets/btn/battle_btn.png"
import {useState} from "react";

const Shop = ({shop, buyWeapon, activePlayer, startLevel1}) => {

    const handleStartGame = (event) => {
        startLevel1();
    }

        return(

            <section className="shop-section" id="shop">
                <div className="shop-buttons">

                    <Link to="/Battle"><img src={battleBtn} onClick={handleStartGame}/></Link>
    
                </div>
            
            <h2 id="shop-name">{shop.shopName}</h2>
            <h4>Player's gold: {activePlayer.gold}</h4>
            {/* <h3>{playerName} {returnPlayerGold}</h3> */}
            <WeaponList shop={shop} buyWeapon={buyWeapon}/>

            </section>
    
        )
    
}

export default Shop;