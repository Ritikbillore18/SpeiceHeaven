import { getCartProductFromLS } from "./getCartProducts";

export const incrementDecrement = (event , id ) => {

    const currentCardElement = document.querySelector(`#card${id}`);

    const productQuantity = currentCardElement.querySelector(".productQuantity");

    let quantity = 1;

    let localCartProducts = getCartProductFromLS();


    let existingProd = localCartProducts.find((curProd) => curProd.id === id );

    if(existingProd){
        quantity = existingProd.quantity
    }

    if(event.target.className === "cartIncrement"){
        if(quantity !=0 ){
            quantity +=1;
        }
    }

    
    if(event.target.className === "cartDecrement"){
        if(quantity > 1 ){
            quantity -= 1;
        }
}

let updatedCart = {id , quantity};

updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
});

//console.log(updatedCart);

localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

productQuantity.innerText = quantity;


};