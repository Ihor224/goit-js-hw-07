const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addIngredientsTo = ingredients.map((ingredient) => {
  const addIngredient = document.createElement("li");
  addIngredient.textContent = ingredient;
  return addIngredient;
});

const list = document.querySelector("#ingredients");

console.log(list.append(...addIngredientsTo));
