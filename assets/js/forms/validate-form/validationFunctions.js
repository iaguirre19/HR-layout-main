import { displayErrorMessages } from "./validateErrorMessages.js";

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const selects = document.querySelectorAll("select");
  const numberInputs = document.querySelectorAll('input[type="number"]');
  // Validation for inputs number
  numberInputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  });

  inputs.forEach((input) => {
    input.value = "";
  });

  selects.forEach((select) => {
    select.selectedIndex = 0;
  });
});

export function validateInputs(content) {
  const activePart = content.querySelector(".active-part");
  if (!activePart) return;

  const inputs = activePart.querySelectorAll(
    ".input-container input[required]"
  );

  const clickOnInput = (inputs) => {
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        if (this.type === "tel") {
          this.addEventListener("input", function () {
            const cleanedValue = this.value.replace(/\D/g, "");

            if (cleanedValue.length <= 10) {
              const formattedValue = cleanedValue.replace(
                /^(\d{0,3})(\d{0,3})(\d{0,4})$/,
                "($1) $2-$3"
              );
              this.value = formattedValue;
            } else {
              this.value = cleanedValue
                .slice(0, 10)
                .replace(/^(\d{0,3})(\d{0,3})(\d{0,4})$/, "($1) $2-$3");
            }

            // Añade este código para manejar el caso de borrado
            if (cleanedValue.length === 0) {
              this.value = "";
            }
          });
        }
      });
    });
  };
  clickOnInput(inputs);

  const createErrorMessage = (inputContainer, message) => {
    const errCont = inputContainer.querySelector(".error-container");
    if (!errCont.querySelector(".error-message")) {
      const labelContainer = inputContainer.querySelector(".label-container");
      const labelElement = labelContainer.querySelector("label");
      const labelText = labelElement.textContent;
      const errorMessage = document.createElement("span");
      errorMessage.className = "error-message";
      errorMessage.textContent = message;
      errCont.appendChild(errorMessage);
    }
  };

  const handleInputBlur = (event) => {
    const input = event.target;
    const inputContainer = input.parentElement;
    const mainContainer = inputContainer.parentElement;
    const errorContainer = mainContainer.querySelector(".error-container");

    if (input.validity.valid) {
      mainContainer.classList.add("valid");
      mainContainer.classList.remove("invalid");
      mainContainer.classList.remove("active-error");
      mainContainer.classList.add("active-check");
    } else {
      mainContainer.classList.remove("valid");
      mainContainer.classList.add("invalid");
      mainContainer.classList.remove("active-check");
      mainContainer.classList.add("active-error");
      const errorMessage = displayErrorMessages(input)
      createErrorMessage(mainContainer, errorMessage);
    }
  };  

  inputs.forEach((input) => {
    input.addEventListener("blur", handleInputBlur);
  });
}

