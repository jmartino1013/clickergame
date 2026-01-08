
const counterDisplay = document.getElementById('counter');
const clickButton = document.querySelector(".btn");
const upgrade = document.querySelector(".upgrade_btn");

let add = 1;
let count = 0;
let price = 10

clickButton.addEventListener('click', () => {

    count = count + add;
    
 
    counterDisplay.textContent = count;
    if (count >= price) {
        upgrade.classList.add("active")
    }

});

upgrade.addEventListener('click', () => {

    if (count >= price) {
        add++;
        count = count - price;
        price = price + 10;
        counterDisplay.textContent = count;
        upgrade.textContent = `upgrade: price = ${price}`;
    }
    if (count < price) {
            upgrade.classList.remove("active");
    }
    
});