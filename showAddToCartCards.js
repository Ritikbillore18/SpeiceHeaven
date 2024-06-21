import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {

return cartProducts.some((curElem) => curElem.id === curProd.id );

});

console.log(filterProducts);

// ---------------------------
// to update the addTOCart Page
// ---------------------------
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { id , image, name , size } = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        const lSActualData = fetchQuantityFromCartLS(id);


        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = size;

        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;

        productClone
        .querySelector(".stockElement")
        .addEventListener("click", (event) => {
            incrementDecrement(event, id);
             
        });

        productClone
        .querySelector(".remove-to-cart-button")
        .addEventListener('click', () => 
        removeProdFromCart(id));


        cartElement.appendChild(productClone);

    });
};

showCartProduct();