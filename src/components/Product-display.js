import './Product-display.css';

export function ProductDisplay(props){
    return(
        <div className="product-display">
            <div className="product-card" id={props.id}>
                <img className='product-image' src={props.image} alt="product" />
                <h3>{props.name}</h3>
                <p>${props.price}</p>
                <button className='card-button'>Add to Bag</button>
            </div>
         </div>
    )
}


