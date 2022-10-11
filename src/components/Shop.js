import {Link} from "react-router-dom";
import './Shop.css';
import playBtn from "../assets/background/play.png"


const Shop = () => {


        return(

            <section className="shop-section" id="shop">
                <div className="shop-buttons">
                    

                    <Link to="/Battle"><img src={playBtn} /></Link>
    
                </div>
    
            </section>
    
        )
    
}

export default Shop;