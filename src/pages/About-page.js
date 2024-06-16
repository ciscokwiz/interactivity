import { useState } from 'react';
import Navbar from '../components/NavBar';
import './About-page.css';
import Image1 from '../asset/pexels-godisable-jacob-226636-965324.jpg';
import Image2 from '../asset/pexels-nappy-1771383.jpg';
import Image3 from '../asset/pexels-rb-audiovisual-604764.jpg';
import Footer from '../components/Footer';




function Ourstory(){
    const [Action, setAction] = useState('variation1');

    return(
        <div className="aboutpage">
            <nav className="about-nav">
                <Navbar/>
            </nav>
            <section className="heading">
                <h1>Our Story</h1>
            </section>
            <section className="about">
                <div className="story">
                    <p>At HairShades.co, our story begins with a deep respect for nature and a commitment to holistic beauty. Our name <em>HairShades</em> is a testament to our belief in the power of natural ingredients to transform not only your hair but also your sense of well-being. We draw inspiration from time-honored traditions and the wisdom of generations past, integrating them with modern innovation to create hair dyes that are as gentle as they are effective.</p>
                    <p>Our journey started with a vision: to offer a healthier, more sustainable alternative to conventional hair coloring products. We believe that true beauty comes from harmony between self-care and environmental stewardship. Each of our products is crafted with the utmost care, using organic ingredients that nourish your hair and scalp while delivering rich, vibrant color.</p>
                    <p>HairShades.co is more than just a brand; it's a movement towards mindful beauty. We invite you to join us in embracing simplicity and authenticity. Our dyes are free from harsh chemicals, reflecting our commitment to purity and your health. By choosing <em>HairShades.co</em>, you're not just coloring your hair—you're making a conscious choice for a healthier lifestyle and a greener planet.</p>
                    <p>HairShades.co is dedicated to uplifting and empowering our customers, providing them with the tools to express their unique beauty naturally. We see our role as a catalyst for change, pioneering a future where organic, eco-friendly products are the norm rather than the exception. Together, we can cultivate a world where beauty and wellness go hand in hand, and every shade tells a story of love, care, and respect for ourselves and our Earth.</p>
                </div>
            </section>
            <section className="img-text">

                <div className="variations">
                    <div className="our-journey">
                        <h2>Our Journey</h2>
                        <button onClick={()=>setAction('variation1')} onMouseOver={()=>setAction('variation1')}></button>
                    </div>
                    <div className="our-approach">
                        <h2>Our Approach</h2>
                        <button onClick={()=>setAction('variation2')} onMouseOver={()=>setAction('variation2')}></button>
                    </div>
                    <div className="formulation">
                        <h2>Product Formulation</h2>
                        <button onClick={()=>setAction('variation3')} onMouseOver={()=>setAction('variation3')}></button>
                    </div>
                    <div className="organic">
                        <h2>Organic</h2>
                        <button onClick={()=>setAction('variation4')} onMouseOver={()=>setAction('variation4')}></button>
                    </div>
                    <div className="our-ingredients">
                        <h2>Our Ingredients</h2>
                        <button onClick={()=>setAction('variation5')} onMouseOver={()=>setAction('variation5')}></button>
                    </div>
                    

                </div>

                <div className="variation-display">
                    {Action==='variation1'?<div className='display'>
                        <img className='variation-img' src={Image1} alt="" />
                        <p className='variation-text'>At HairShades.co, our story begins with a deep respect for nature and a commitment to holistic beauty. Our name is a testament to our belief in the power of natural ingredients to transform not only your hair but also your sense of well-being. We draw inspiration from time-honored traditions and the wisdom of generations past, integrating them with</p>
                    </div>:<div></div>}
                    {Action==='variation2'?<div className='display'>
                        <img className='variation-img' src={Image2} alt="" />
                        <p className='variation-text'>At HairShades.co, our story begins with a deep respect for nature and a commitment to holistic beauty. Our name is a testament to our belief in the power of natural ingredients to transform not only your hair but also your sense of well-being. We draw inspiration from time-honored traditions and the wisdom of generations past, integrating them with</p>
                    </div>:<div></div>}
                    {Action==='variation3'?<div className='display'>
                        <img className='variation-img' src={Image3} alt="" />
                        <p className='variation-text'>At HairShades.co, our story begins with a deep respect for nature and a commitment to holistic beauty. Our name is a testament to our belief in the power of natural ingredients to transform not only your hair but also your sense of well-being. We draw inspiration from time-honored traditions and the wisdom of generations past, integrating them with</p>
                    </div>:<div></div>}
                    {Action==='variation4'?<div className='display'>
                        <img className='variation-img' src={Image1} alt="" />
                        <p className='variation-text'>At HairShades.co, our story begins with a deep respect for nature and a commitment to holistic beauty. Our name is a testament to our belief in the power of natural ingredients to transform not only your hair but also your sense of well-being. We draw inspiration from time-honored traditions and the wisdom of generations past, integrating them with</p>
                    </div>:<div></div>}
                    {Action==='variation5'?<div className='display'>
                        <img className='variation-img' src={Image2} alt="" />
                        <p className='variation-text'>At HairShades.co, our story begins with a deep respect for nature and a commitment to holistic beauty. Our name is a testament to our belief in the power of natural ingredients to transform not only your hair but also your sense of well-being. We draw inspiration from time-honored traditions and the wisdom of generations past, integrating them with</p>
                    </div>:<div></div>}
                   
                </div>
            </section>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
}

export default Ourstory