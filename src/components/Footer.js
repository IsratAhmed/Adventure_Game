import './Footer.css'
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {

    return (

    <>

        <div className="footer-top-container" >

            <div className="footer" >

                <div className="footer-top-1-logo">
                    <img className="company-logo" src="" alt="company logo" />
                </div>

                <div className="footer-top-2-Legal">
                    <h2>Legal</h2>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Legal Notices</a>
                    <a href="#">Event Rules</a>
                    <a href="#">Cookies Policy</a>
                </div>


                <div className="footer-top-3-About">
                    <h2>Who we are</h2>
                    <a href="#">FrontEnd Developers</a>
                    <a href="#">BackEnd Developers</a>
                    <a href="#">Careers</a>
                    <a href="#">Partners</a>

                </div>  

                <div className="footer-top-4-form">
                    <h2>Newsletter</h2>
                        
                    <div className="footer-top-4-form-btn">
                        <input
                            type="email"
                            placeholder="Enter email address..."
                            id="footer-email-field"
                        />

                        <div className="signup-btn">
                            <input
                                type="submit"
                                value="SIGN UP"
                                id="footer-email-btn"
                            />
                        </div>
                    </div>

                </div>   
            </div>
        </div> 

        <div className="footer-middle-container-socials">

            <div className="footer-middle-socials">
                <hr/>

                <h2>Find us on</h2>
                <ul>
                    <a href="https://en-gb.facebook.com/TankiOnline.en/"  target="blank" >
                        <li>
                            <FaFacebook className="social-icon1" size="36px" color="white" />
                        </li>
                    </a>

                    <a href="https://www.instagram.com/tankionlineen/" target="blank" >
                        <li>
                            <FaInstagram className="social-icon2" size="36px" color="white" />
                        </li>
                    </a>

                    <a href="https://twitter.com/tankionlineen"target="blank" >
                        <li>
                            <FaTwitter className="social-icon3" size="36px" color="white" />
                        </li>
                    </a>

                    <a href="https://www.youtube.com/tankionlineint" target="blank" >
                        <li>
                            <FaYoutube className="social-icon4" size="36px" color="white" />
                        </li>
                    </a>
                </ul>
            </div>
        </div>

        
        <div className="footer-bottom-container-copyright" >
            <p> 
                &copy;{new Date().getFullYear()} AdventureGame. All rights reserved. AdventureGame and the AdventureGame logo are trademarks of AdventureGame in the U.K. and/or other regions. 
            </p>

            <p>
                All other trademarks are the property of their respective owners.
            </p> 
        </div>

    </>


    )

}

export default Footer;