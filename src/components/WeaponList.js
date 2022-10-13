import Weapon from "./Weapon";

const WeaponList = ({shop, buyWeapon}) => {

    const availableWeapons = shop.weapons.filter((weapon) => {
        return !weapon.player; 
    })

    const weaponItems = availableWeapons.map((weapon) => {
        return <Weapon key={weapon.id} weapon={weapon} buyWeapon={buyWeapon} />
    })

    return (
        <>   
        <button onClick={()=> {buyWeapon(availableWeapons[0].id)}}>{availableWeapons[0].name}</button>     
        <button onClick={()=> {buyWeapon(availableWeapons[1].id)}}>{availableWeapons[1].name}</button>     
        <button onClick={()=> {buyWeapon(availableWeapons[2].id)}}>{availableWeapons[2].name}</button>     
        <button onClick={()=> {buyWeapon(availableWeapons[3].id)}}>{availableWeapons[3].name}</button>     
        {weaponItems}
        </>
    );

}

export default WeaponList;