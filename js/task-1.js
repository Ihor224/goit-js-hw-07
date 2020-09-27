const category = document.querySelectorAll(".item");
console.log("В списке", category.length, "категории.");

category.forEach((categoryEl) => {
  console.log("Категория:", categoryEl.querySelector(`h2`).textContent);
  console.log(
    "Количество элементов:",
    categoryEl.querySelectorAll(`li`).length
  );
});
