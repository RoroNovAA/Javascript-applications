/* BUTTONS AND INPUT */
const decrementButton = document.querySelector(".decrement-button");
const incrementButton = document.querySelector(".increment-button");
const resetButton = document.querySelector(".reset-button");
const input = document.querySelector(".display-value");

/* DEFAULT COUNTER VALUE */
let counter = 0;


/* ADDING EVENT LISTENERS */
decrementButton.addEventListener("click", () => {
    counter -= 1;
    input.innerText = counter;
})

incrementButton.addEventListener("click", () => {
    counter += 1;
    input.innerText = counter;
})

resetButton.addEventListener("click", () => {
    counter = 0;
    input.innerText = counter;
})

