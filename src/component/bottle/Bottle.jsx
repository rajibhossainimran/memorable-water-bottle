
import './bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(bottle);
    const {img, name, price} = bottle;
    return (
        <div>
            <div className="bottle-container">
                <img src={img} alt="image" />
                <p>{name}</p>
                <p>Price : ${price}</p>
                <button onClick={()=>handleAddToCart(bottle)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Bottle;