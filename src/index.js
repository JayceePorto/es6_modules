/*import Wishlist from "./Wishlist";
import Car from "./Car";

let wishlist = new Wishlist ();

let car = new Car("Ford", "Mustang", 2022);

wishlist.add(car);

console.log(wishlist);

//wishlist.remove(car);

//console.log(wishlist); 
*/

import Car from "./Car";
import Wishlist from "./Wishlist";

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");

let wishlistUl = document.querySelector("#wishListContainerul");
let makeP = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");

let wishlist = new Wishlist();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    let car = new Car(make, model, year);

    wishlist.add(car);

    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textConent = car.model;

    li.addEventListener("click", (event) => {
    makeP.textConent = car.make;
    modelP.textConent = car.model;
    yearP.textConent = car.year;

    removeBtn.disabled = false;
    removeBtn.onclick = (event) => {

        wishlist.remove(car);

        makeP.textContent = "";
        modelP.textContent = "";
        yearP.textContent = "";

        removeBtn.disabled = true;

        wishlistUl.removeChild(li);
    };
    });

    
    wishlistUl.appendChild(li);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
});

