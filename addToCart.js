import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id ) => {

    let arrLocalStorageProduct = getCartProductFromLS();


    const currentProdElem = document.querySelector(`#card${id}`);
    
    let quantity  = currentProdElem.querySelector(".productQuantity").innerText;
    
    let exitstingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);
    
    if(exitstingProd && quantity > 1 ){

        quantity = Number(exitstingProd.quantity) + Number(quantity);
        let updatedCart = {id , quantity};

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        console.log(updatedCart);
        localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
        
        //console.log(`quantity`,quantity);

        // show toast when product added to the cart
        showToast("add", id);
    }
    
    
    
    if(exitstingProd){
       // alert("Product Already Added")
        return false;
    }

    quantity = Number(quantity);

    arrLocalStorageProduct.push({id , quantity});
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));
    
    updateCartValue(arrLocalStorageProduct);


// show toast when product added to the cart
showToast("add", id);


    //console.log(quantity);
};