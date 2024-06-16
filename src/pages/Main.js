import './Main.css'
import { HiShoppingBag } from "react-icons/hi2";
import product1 from '../asset/bubblegum.png';
import product2 from '../asset/canary.png';
import product3 from '../asset/Curious.png';
import product4 from '../asset/Old Mauve.png';
import vid1 from '../asset/bluegirl1.mp4';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';




function pages (){
    return(
        <div className='HairShades'>
            <nav className=' nav-section'>
                <Navbar/>
            </nav>
            <section className='main'>
                <div className="hero">
                    <h1 className='hero-text'>Hair<span>Shades</span>.co</h1>
                    <h3 className='hero-tagline'>Embrace vibrant colors with pure organic hair dyes</h3>
                    <button className='shop-button'>Shop<i><HiShoppingBag /></i></button>
                </div>
            </section>
            <section className='latest-product-section'>
                <div className="products">
                    <h1>Community Faves</h1>
                    <h3>Shop our latest product line & everyone's favourites </h3>
                    <div className="product-cards">
                        <div className="product-card">
                            <img className='product-image' src={product1} alt="product1" />
                            <h3>Bubble gum (Hotpink)</h3>
                            <p>$3.99</p>
                            <button className='card-button'>Add to Bag</button>
                        </div>
                        <div className="product-card">
                            <img className='product-image' src={product2} alt="product1" />
                            <h3>Canary (Gold)</h3>
                            <p>$3.99</p>
                            <button className='card-button'>Add to Bag</button>
                        </div>
                        <div className="product-card">
                            <img className='product-image' src={product4} alt="product1" />
                            <h3>Old Mauve (Weird purple)</h3>
                            <p>$3.99</p>
                            <button className='card-button'>Add to Bag</button>
                        </div>
                        <div className="product-card">
                            <img className='product-image' src={product3} alt="product1" />
                            <h3>Curious (Deep blue)</h3>
                            <p>$3.99</p>
                            <button className='card-button'>Add to Bag</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='discover-section'>
                <div className="discover">
                    <h1>Discover HairShades.co</h1>
                    <h2>Discover a new way to express yourself with our diverse range of shades, all lovingly created to ensure a rich, beautiful finish that respects your hair’s natural vitality. </h2>
                    <h3> Embrace the beauty of nature and shine inside out with our organic hair dyes. Join us on this journey to a more radiant, confident you.</h3>
                    <div className="discover-video">
                        <video src={vid1} autoPlay loop muted />
                        <a href='about'>Discover HairShades.co</a>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );    
}

export default pages;