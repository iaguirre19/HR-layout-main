
function clearAllInputs() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.type !== "radio" && input.type !== "checkbox") {
      input.value = "";
    } else {
      input.checked = false;
    }
  });
}


window.addEventListener("load", clearAllInputs);
