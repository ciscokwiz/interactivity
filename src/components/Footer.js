import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";



function footer(){
    return(
        <div className="footer-container">
            <div className="l-footer">
                <div className="footer-list">
                    <div className="shop">
                        <h2>Shop Shades</h2>
                        <a href="">Special Offers</a>
                        <a href="">Wholesale & Bulk</a>
                        <a href="">Bundle Deals</a>
                        <a href="">SKYN</a>

                    </div>
                    <div className="learn">
                        <h2>Learn </h2>
                        <a href="">Ingredient Index</a>
                        <a href="">Sourcing</a>
                    </div>
                    <div className="more">
                        <h2>More from Shades </h2>
                        <a href="about">Our Story</a>
                        <a href=""> Blog</a>
                        <a href="">Contact Us</a>
                        <a href="">FaQs</a>
                    </div>
                </div>
                <div className="trademark">
                    <p><i><FaRegCopyright/></i> 2024 HairShades.co</p>
                </div>
            </div>
            <div className="r-footer">
                <div className="community">
                    <div className="connect-text">
                        <h2>Join the Community</h2>
                        <h4>Enter your email to unlock special feature</h4>
                    </div>
                    <div className="connect-input">
                        <input type="email" placeholder="Email"  />
                        <button>Submit</button>
                    </div>
                    <div className="connect-icons">
                        <h3>Follow us</h3>
                        <div className="icons">
                            <i><a href=""><FaFacebook/></a></i>
                            <i ><a href=""><SiInstagram/></a></i>
                            <i><a href=""><RiTwitterXFill/></a></i>
                        </div>
                    </div>
                </div>
                <div className="rules">
                    <a href="">Terms & Conditions</a>
                 
                    <a href="">Privacy Policy</a>
                    
                    <a href="">Refund Policy</a>
                    
                </div>
                
            </div>
        </div>
    )
}

export default footer