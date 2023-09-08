import { displayErrorMessages } from "./validateErrorMessages.js"
import { createErrorMessage } from "./validationFunctions.js";


export const inputIncomplete = (inputs) => {
  for (const input of inputs) {
    const invalidInput = input.querySelector(
        ".input-container input, .input-container select"
    );

    if (invalidInput) {
        const message = displayErrorMessages(invalidInput);
        input.classList.add("active-error");
        createErrorMessage(input, message);
    }
  }
};

