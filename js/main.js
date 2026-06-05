/* ===============================================

MODERETRO - eCommerce Project

'main.js' - custom functionalities for the project.

%% Version 1.01:
    -- Adding functionalities for Task2 completion
    in page-checkout and page-login.

================================================= */

// javaScript Fundamentals: Assignment#2 + Assignment#3
// ====================================================

// Step#1: Definining constants and variables + Updated RAWCOUPON to list.
const PRODUCT1NAME = "Casio Royal Blue";
const PRODUCT2NAME = "Casio Royal Nasa";
const PRODUCT1PRICE = 11900;
const PRODUCT2PRICE = 11900;
const PRODUCT1QTY = 10;
const PRODUCT2QTY = 3;
const VATRATE = 0.2;
const CURRENCY = "USD";
const USDPEREUR = 1.16;
const RAWCOUPON = ["SAVE10", "SAVE15", "FREESHIP"];

let allProducts = [
    {name: "Casio Royal Blue", price: 99, qty: 11},
    {name: "Casio Royal Nasa", price: 99, qty: 11},
    {name: "Casio Royal Sherwood Green", price: 99, qty: 3},
    {name: "Casio Royal Antique", price: 129, qty: 1},
    {name: "Casio Royal Metal", price: 89, qty: 5},
    {name: "Casio Royal Classic Rubber", price: 89, qty: 5},
    {name: "Casio Royal Phantom", price: 129, qty: 1},
    {name: "Casio Royal Fluoro Green", price: 99, qty: 2},
    {name: "Casio Royal Old Money", price: 139, qty: 1}
];



// Testing data types:
console.log(`Type of variable 'PRODUCT1NAME': ${typeof(PRODUCT1NAME)}.`);
console.log(`Type of variable 'PRODUCT2PRICE': ${typeof(PRODUCT2PRICE)}.`);
console.log(`Type of variable 'USDPEREUR': ${typeof(USDPEREUR)}.`);


// Step#2: Creating a 'normalizeCoupon' function:
function normalizeCoupon(couponCode) {
    return couponCode.trim().toUpperCase();
}

// Task3: coupon validation:
function isValidCoupon(code) {

    if (RAWCOUPON.includes(code)) {
        return true;
    }
    else {
        return false;
    }
}

// Step#3: Creating a function to validate coupon:
function validateAndNotify() {
    let userInput = document.getElementById("promo-input");
    userInput = normalizeCoupon(userInput.value);
    
    if (isValidCoupon(userInput)) {

        
        if (userInput == "SAVE10") {
            alert("Vas kupon donosi 10% popusta!");
        }
        else if (userInput == "SAVE15") {
            alert("Vas kupon donosi 15% popusta!");
        }
        else if (userInput == "FREESHIP") {
            alert("Vas kupon donosi besplatnu dostavu!");
        }
    }
    // AKO NEMA NA LISTI
    else {
        alert("Uneti kod nije validan!");
    }
}

// Step#4: Username/Password checker:
function login() {
    
    // Normalization:
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();
    
    // Value check:
    if (email === "admin" && password === "admin") {
        return true;
    }
    else {
        return false;
    }
}

function loginAlert() { // Koristi se umesto login(), login() se nalazi unutar ove funkcije.

    if (login()) {
        alert("Login uspesan!")
    }
    else {
        alert("Login neuspesan!")
    }
}

// Step#5: Total Value:
let iznos = 0; // Counter!


function dodajNaIznos(cena) {
    
    iznos = iznos + cena;
    oldIznos = iznos - cena;
    
    console.log(`Na cenu ${oldIznos}${CURRENCY} dodato je ${cena}${CURRENCY}. Total: ${iznos}${CURRENCY}.`);
    alert(`Dodato ${cena}${CURRENCY}! Ukupan iznos: ${iznos}${CURRENCY}.`);
}

// Function Test:
// console.log("Test dodajNaIznos funkcije:")
// console.log(`dodajNaIznos(100): dodato ${dodajNaIznos(100)}${CURRENCY}.`);
// console.log(`dodajNaIznos(200): dodato ${dodajNaIznos(200)}${CURRENCY}.`);
// console.log(`dodajNaIznos(300): dodato ${dodajNaIznos(300)}${CURRENCY}.`);

function getCartTotal() {
    console.log(`>>. Ukupan iznos: ${iznos}${CURRENCY}.`);
    alert(`Ukupan iznos: ${iznos}${CURRENCY}.`);
}

// Task3: Total Stock Value:
function getTotalStockValue(productList) {

    let allProductsValue = 0;

    for (let product of productList) {
        allProductsValue += (product["price"] * product["qty"]);
    }
    // Log:
    console.log(`TASK3: Ukupna vrednost lagera: ${allProductsValue}`);
}

getTotalStockValue(allProducts);


// Tesk3: Low stock:
let lowStock = [];

for (let stockItem of allProducts) {


    if (stockItem.qty < 10) {
        lowStock.push(stockItem);
    }
}

console.log("Low stock items:", lowStock)

// Task3: Search function:
function findProductByName(list, searchName) {

    searchName = searchName.toLowerCase().trim();

    for (let itemIndex in list) {
        if (list[itemIndex].name.toLowerCase().includes(searchName)) {
            console.log(`Pronadjeni proizvodi: ${list[itemIndex].name}`);
            return list[itemIndex];
        } 
    }

    // Ovo je ako nije! Note to self: Mora van for petlje jer mora da izvrti
    // sve proizvode u if-u pa tek onda da izbaci ovo kao else blok. Inace prekida
    // posle prve iteracije!
    console.log(`Ne postoji proizvod sa takvim imenom.`);
    return null;
}

// Test:::
findProductByName(allProducts, 'nasa')
findProductByName(allProducts, 'sherwood')
findProductByName(allProducts, 'money')
findProductByName(allProducts, 'glupPredlog')

// ====================================================
