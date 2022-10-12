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
            {weaponItems}
        </>
    );

}

export default WeaponList;