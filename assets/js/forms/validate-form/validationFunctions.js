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



export const isAllChildrenValid = (element) => {
  const children = element.children;
  let inputIncomplete = [];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (!child.classList.contains("valid")) {
      inputIncomplete.push(child);
    }
  }

  if (inputIncomplete.length === 0) {
    return true; // Todos los hijos tienen la clase "valid"
  } else {
    return inputIncomplete;
  }
};



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


  const handleInputBlur = (event) => {
    const input = event.target;
    const inputContainer = input.parentElement;
    const mainContainer = inputContainer.parentElement;

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
      const errorMessage = displayErrorMessages(input);
      createErrorMessage(mainContainer, errorMessage);
    }
  };

  // This function validates if the date entered is greater than the current date.
  const validateDate = () => {
    const dateInput = document.getElementById("event-date");
    const inputContainer = dateInput.parentElement.parentNode;
    const eventDate = new Date(dateInput.value);
    const currentDate = new Date();

    if (eventDate <= currentDate) {
      dateInput.setCustomValidity(
        "The date must be greater than the current date"
      );
      const message = "La fecha debe ser posterior a la fecha actual.";
      createErrorMessage(inputContainer, message);
    } else {
      // Clear any error message and set validity state to true
      dateInput.setCustomValidity("");
      return;
    }
  };

  document
    .getElementById("event-date")
    .addEventListener("change", validateDate);
  inputs.forEach((input) => {
    input.addEventListener("blur", handleInputBlur);
  });
}

export const createErrorMessage = (inputContainer, message) => {
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