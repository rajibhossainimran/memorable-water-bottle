import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css';


const Bottles = () => {
    const [bottles,setBottles] = useState([]);

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data=>setBottles(data))
    }, [])
    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
           <div className="box-bottles">
           {
            bottles.map((bottle)=><Bottle
                                key={bottle.id}
                                bottle={bottle}
                                ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;