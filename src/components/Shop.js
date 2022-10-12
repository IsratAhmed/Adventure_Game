import {Link} from "react-router-dom";
import './Shop.css';
import battleBtn from "../assets/btn/battle_btn.png"


const Shop = () => {


        return(

            <section className="shop-section" id="shop">
                <div className="shop-buttons">
                    

                    <Link to="/Battle"><img src={battleBtn} /></Link>
    
                </div>
    
            </section>
    
        )
    
}

export default Shop;