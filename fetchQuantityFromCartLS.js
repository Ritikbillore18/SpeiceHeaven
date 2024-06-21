import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS =(id) => {
let cartProducts = getCartProductFromLS();

let existingProduct = cartProducts.find((curProd) => curProd.id === id);
let quantity = 1;

if (existingProduct){

    quantity = existingProduct.quantity;
}
    return {quantity};
};