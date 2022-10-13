import Weapon from "./Weapon";
import axeBtn from "../assets/btn/axe.png"
import swordBtn from "../assets/btn/sword_2.png"
import daggerBtn from "../assets/btn/dagger.png"
import spearBtn from "../assets/btn/spear.png"
const WeaponList = ({shop, buyWeapon}) => {

    const availableWeapons = shop.weapons.filter((weapon) => {
        return !weapon.player; 
    })

    const weaponItems = availableWeapons.map((weapon) => {
        return <Weapon key={weapon.id} weapon={weapon} buyWeapon={buyWeapon} />
    })

    return (
        <>   
        <div id="item_btns">
        <img src={axeBtn} id="g_axe" onClick={()=> {buyWeapon(availableWeapons[0].id)}}/>
        <div className="hide">
                <li>Max Damage: {availableWeapons[0].maxDamage}</li>
                <li>Min Damage: {availableWeapons[0].minDamage}</li>
                <li>Block Chance: {availableWeapons[0].blockChance}</li>
                <li>Price: {availableWeapons[0].price}</li>
        </div>
        <img src={swordBtn}id="spear" onClick={()=> {buyWeapon(availableWeapons[1].id)}}/> 
        <div className="hide">
                <li>Max Damage: {availableWeapons[1].maxDamage}</li>
                <li>Min Damage: {availableWeapons[1].minDamage}</li>
                <li>Block Chance: {availableWeapons[1].blockChance}</li>
                <li>Price: {availableWeapons[1].price}</li>
        </div>
        <img src={daggerBtn} id="dagger" onClick={()=> {buyWeapon(availableWeapons[2].id)}}/> 
        <div className="hide">
                <li>Max Damage: {availableWeapons[2].maxDamage}</li>
                <li>Min Damage: {availableWeapons[2].minDamage}</li>
                <li>Block Chance: {availableWeapons[2].blockChance}</li>
                <li>Price: {availableWeapons[2].price}</li>
        </div>  
        <img src={spearBtn} id="sword" onClick={()=> {buyWeapon(availableWeapons[3].id)}}/>   
        <div className="hide">
                <li>Max Damage: {availableWeapons[3].maxDamage}</li>
                <li>Min Damage: {availableWeapons[3].minDamage}</li>
                <li>Block Chance: {availableWeapons[3].blockChance}</li>
                <li>Price: {availableWeapons[3].price}</li>
        </div>
        </div>
        {weaponItems}
        </>
    );

}

export default WeaponList;