
import './cart.css'
const Cart = ({cart}) => {
    return (
        <div>
             <h5>Add to Card : {cart.length}</h5>
             <div className="cart-container">
                {
                    cart.map((bottle) =><div className='my-cart' key={bottle.id}>
                        <img src={bottle.img}></img>
                        <p>price :$ {bottle.price}</p>
                    </div>)
                }
             </div>
        </div>
    );
};

export default Cart;