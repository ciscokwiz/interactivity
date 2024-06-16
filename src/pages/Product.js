import Navbar from '../components/NavBar';
import './Product.css';
import {ProductDisplay} from '../components/Product-display';
import contents from './Product-data';
import Footer from '../components/Footer';



function ProductPage(){
    return(
        <div className='Productpage'>
            <nav className="product-nav">
                <Navbar/>
            </nav>
            <section className='heading'>
                <h1 className='display-header'>Products</h1>
            </section>
            <section className="product-cards">
                {contents.map(contents => (
                    <ProductDisplay
                    key= {contents.id}
                    name={contents.name}
                    image={contents.image}
                    price={contents.price}
                    />
                ))}
            </section>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
}

export default ProductPage