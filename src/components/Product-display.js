import './Product-display.css';

export function ProductDisplay(props){
    return(
        <div className="product-display">
            <div className="product-card">
                <img className='product-image' src={props.image}alt="product" />
                <h2>{props.name}</h2>
                <div className='price'>${props.price}</div>
                <button className='card-button'>Add to Bag</button>
            </div>
         </div>
    )
}


