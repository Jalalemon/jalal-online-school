const addToDb = (newTime) => {
    let timingCart = {};
    const storedCart = localStorage.getItem('reading-time');
    if (storedCart) {
        timingCart = JSON.parse(storedCart);
    }
    const quantity = timingCart[newTime]
    if (quantity) {
        const newquantity = quantity +1;
        timingCart[newTime] = newquantity
    }
    else {
        timingCart[newTime] = 1;
    }
    localStorage.setItem('reading-time',JSON.stringify(timingCart))
}

const getStoredcart = (newTime) =>{
    let timingCart = {};
    const storedCart = localStorage.getItem('reading-time');
    if (storedCart) {
        timingCart = JSON.parse(storedCart);
    }
    return timingCart;
}

export {addToDb, getStoredcart}