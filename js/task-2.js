const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addIngredientsTo = ingredients.map((ingredient) => {
  const list = document.querySelector("#ingredients");
  const addIngredient = document.createElement("li");
  addIngredient.textContent = ingredient;
  console.log(list.appendChild(addIngredient));
});
