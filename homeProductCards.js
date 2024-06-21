import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");


export const showProductContainer = (products) => {

    if(!products) {
        return false;
    }

    products.forEach((curProd) => {
        const {id, image ,name, size} = 
        curProd;

        const productClone = document.importNode(productTemplate.content, true);
    
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productPrice").textContent = size;

        productClone
        .querySelector(".stockElement")
        .addEventListener("click", (event) => {
            homeQuantityToggle(event, id);
             
        });

        productClone
        .querySelector(".add-to-cart-button")
        .addEventListener("click", (event) => {
            addToCart(event, id);
             
        });


        productContainer.append(productClone);
    });

 
};