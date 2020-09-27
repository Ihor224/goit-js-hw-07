const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  refs.input.value.length < Number(refs.input.dataset.length)
    ? refs.input.classList.add("invalid")
    : refs.input.classList.replace("invalid", "valid");
}
