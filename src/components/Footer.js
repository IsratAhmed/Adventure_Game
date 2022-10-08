import './Footer.css'
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {

    return (

        <div className="footer-container" >

            <div className="footer-top-middle-sections" >

                <div className="footer-middle-1-top-logo">

                    <img className="company-logo" src="" alt="company logo" />
                </div>

                <div className="footer-middle-2-Legal">
                    <h2>Legal</h2>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Legal Notices</a>
                    <a href="#">Event Rules</a>
                    <a href="#">Cookies Policy</a>
                </div>


                <div className="footer-middle-2-About">
                    <h2>About Us</h2>
                    <a href="#">FrontEnd Developers</a>
                    <a href="#">BackEnd Developers</a>
                    <a href="#">Careers</a>
                    <a href="#">Partners</a>

                </div>

                <div className="footer-middle-socials">

                    <h4>Find us on</h4>
                    <ul>
                        <a href="https://en-gb.facebook.com/TankiOnline.en/" >
                            <li>
                                <FaFacebook className="social-icon1" size="36px" color="white" />
                                </li>
                        </a>

                        <a href="https://www.instagram.com/tankionlineen/" >
                            <li>
                                <FaInstagram className="social-icon2" size="36px" color="white" />
                            </li>
                        </a>

                        <a href="https://twitter.com/tankionlineen" >
                            <li>
                                <FaTwitter className="social-icon3" size="36px" color="white" />
                            </li>
                        </a>

                        <a href="https://www.youtube.com/tankionlineint" >
                            <li>
                                <FaYoutube className="social-icon4" size="36px" color="white" />
                            </li>
                        </a>
                    </ul>
                </div>

                <div className="footer-bottom-copyright">
                    <p> 
                        &copy;{new Date().getFullYear()} AdventureGame. All rights reserved. AdventureGame and the AdventureGame logo are trademarks of AdventureGame in the U.K. and/or other regions. 
                    </p>

                    <p>
                        All other trademarks are the property of their respective owners.
                    </p> 
                </div>
            </div>
        </div> 

    )

}

export default Footer;