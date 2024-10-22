// get local storage cart 
const getStoredCount = ()=>{
    const cartString = localStorage.getItem('cart');
    if(cartString){
        return JSON.parse(cartString);
    }
    return [];
}

// save data in local storage 
const saveCartLocalStorage =(cart) =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

// send data in local storage 
const addToLocalStorage =id =>{
    const cart = getStoredCount();
    cart.push(id);
    saveCartLocalStorage(cart)
}

export {addToLocalStorage,getStoredCount};