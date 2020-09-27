const targetBtnDecrement = document.querySelector('[data-action="decrement"]');

const targetBtnIncrement = document.querySelector('[data-action="increment"]');

const counterEl = document.querySelector("#value");

let counterValue = counterEl.textContent;
counterValue = 0;

targetBtnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

targetBtnIncrement.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
