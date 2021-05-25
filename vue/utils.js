// UTILITIES

// --- LocalStorage

// content of localStorage (key: cartStorage)
let cartStorage = JSON.parse(localStorage.getItem('cartStorage'));

// div to show the number of product in the cart
let spanNbrInCart = document.querySelector('.cart-count');
showCountCart();


// ------------------------------------ FUNCTIONS ------------------------------------

// convert number into euro format
const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: /* 2 */0
});


// Function : to search a product (object) inside an array from _id parameter

const findProductById = (arrayToCheck, thingToFind) => {
    const product = arrayToCheck.find(productInArray => productInArray._id == thingToFind);
    return product;

}


// Function : Add to Cart

const addToCartStorage = (productToAdd) => {

    // Add product to array cartStorage
    cartStorage.push(productToAdd);
    // push the array to LocalStorage on 'cartStorage' key
    addToLocalStorage();
}


// Function : Add to Local Storage

const addToLocalStorage = () => localStorage.setItem('cartStorage', JSON.stringify(cartStorage));


// Function : Show count of product in cart
function showCountCart() {
    if(cartStorage) {
        spanNbrInCart.textContent = cartStorage.length;
    } else {
        spanNbrInCart.textContent = 0;
    }
}
