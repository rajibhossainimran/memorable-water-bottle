
import './bottle.css'
const Bottle = ({bottle}) => {
    // console.log(bottle);
    const {img, name, price} = bottle;
    return (
        <div>
            <div className="bottle-container">
                <img src={img} alt="image" />
                <p>{name}</p>
                <p>Price : ${price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Bottle;