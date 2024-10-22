import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css';
import { addToLocalStorage, getStoredCount } from "../../utilities/localStorage";
import Cart from "../cart/Cart";


const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data=>setBottles(data))
    }, []);

    // load cart form localStorage 

    useEffect(()=>{
        if(bottles.length>0){
            const storedCart = getStoredCount();
        // console.log(storedCart)
        const saveCart = [];
        for(const id of storedCart ){
            const bottle = bottles.find((bottle)=>bottle.id === id);
            if(bottle){
                saveCart.push(bottle)
            }
        }
        // console.log(saveCart)
        setCart(saveCart)
        }
    },[bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
        
    }
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
           <Cart cart ={cart}></Cart>
           <div className="box-bottles">
           {
            bottles.map((bottle)=><Bottle
                                key={bottle.id}
                                bottle={bottle}
                                handleAddToCart={handleAddToCart}
                                ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;