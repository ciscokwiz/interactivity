import './Main.css'
import vid1 from '../asset/bluegirl1.mp4';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import contents from './community-fav';
import {ProductDisplay} from '../components/community-fav-display';






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
                    <button className='shop-button'>Shop
                        <i>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
                            </svg>
                        </i>
                    </button>
                </div>
            </section>
            <section className='latest-product-section'>
                <div className="products">
                    <h1>Community Faves</h1>
                    <h3>Shop our latest product line & everyone's favourites </h3>
                    <div className="product-cards">
                        {contents.map(contents => (
                            <ProductDisplay
                                key= {contents.id}
                                name={contents.name}
                                image={contents.image}
                                price={contents.price}
                            />
                        ))}                        
                    </div>
                </div>
            </section>
            <section className='discover-section'>
                <div className="discover">
                    <h1>Discover HairShades.co</h1>
                    <h2>Discover a new way to express yourself with our diverse range of shades, all created to ensure a rich, beautiful finish that respects your hair’s natural vitality. </h2>
                    <h2> Embrace the beauty of nature and shine inside out with our organic hair dyes. Join us on this journey to a more radiant, confident you.</h2>
                    <div className="discover-video">
                        <video src={vid1} autoPlay loop muted />
                        <a href='about'>Discover HairShades.co</a>
                    </div>
                </div>
            </section>
            <section className="scroll-effect">
                <div className="wrapper">
                        <div className='item item1'>L`oreal</div>
                        <div className="item item2">Fenty</div>
                        <div className='item item3'>Sephora</div>
                        <div className='item item4'>Forever 21</div>
                        <div className='item item5'>Grime</div>
                </div>
                <div className="wrapper2">
                        <div className='items item6'>Gucci</div>
                        <div className='items item7'>Balmain</div>
                        <div className='items item8'>Balenciaga</div>
                        <div className='items item9'>Under Amour</div>
                        <div className='items item10'>Nike</div>
                </div>
            </section>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );    
}

export default pages;


