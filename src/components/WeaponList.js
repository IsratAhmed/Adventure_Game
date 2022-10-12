import Weapon from "./Weapon";

const WeaponList = ({shop, buyWeapon}) => {

    const weaponItems = shop.weapons.map((weapon) => {
        return <Weapon key={weapon.id} weapon={weapon} buyWeapon={buyWeapon} />
    })

    return (
        <>        
            {weaponItems}
        </>
    );

}

export default WeaponList;