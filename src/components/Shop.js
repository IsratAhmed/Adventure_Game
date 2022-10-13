import {Link} from "react-router-dom";
import './Shop.css';
import WeaponList from "./WeaponList";
import battleBtn from "../assets/btn/battle_btn.png"
import {useState} from "react";

const Shop = ({shop, buyWeapon, activePlayer, startLevel1, startLevel2, startLevel3}) => {

    const handleStartGame = (event) => {
        if (activePlayer.numberOfWins === 0) {
            startLevel1();
        } else if (activePlayer.numberOfWins === 1) {
            startLevel2();
        } else {
            startLevel3();
        }
    }

    const checkWeapon = () => {
        if(activePlayer.weapon === null){
            return <h4>{activePlayer.name}'s gold: {activePlayer.gold}</h4>
        } else {
            return (
            <>
                <h4>{activePlayer.name}'s gold: {activePlayer.gold}</h4>
                <h4>{activePlayer.name}'s weapon: {activePlayer.weapon.name}</h4>
            </>
            )
        }
    }

        return(

            <section className="shop-section" id="shop">
                <div className="shop-buttons">

                    <Link to="/Battle"><img id="shop-battle-btn" src={battleBtn} onClick={handleStartGame}/></Link>
    
                </div>
            
            <h2 id="shop-name">{shop.shopName}</h2>
            
            <div>{checkWeapon()}</div>
            
            {/* <h3>{playerName} {returnPlayerGold}</h3> */}
            <WeaponList shop={shop} buyWeapon={buyWeapon}/>

            </section>
    
        )
    
}

export default Shop;