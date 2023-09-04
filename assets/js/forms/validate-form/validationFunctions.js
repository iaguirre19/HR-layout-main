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
              this.value = cleanedValue.slice(0, 10);
            }
          });
        }
      });
    });
  };

  clickOnInput(inputs);
  
    //Seguir con el validsador y eliminar o ocultar la clase erro-container cuando sea valido 
  // inputs.forEach((input) => {
  //   input.addEventListener("blur", (event) => {
  //     const inputContainer = input.parentElement;
  //     const mainContainer = inputContainer.parentElement;
  //     const errorContainer = mainContainer.querySelector(".error-container");

  //     if (event.target.validity.valid) {
  //       deleteErrorMessage(mainContainer);
  //       mainContainer.classList.add("active-check");
  //     } else {
  //       mainContainer.classList.add("active-error")
  //       createErrorMessage(mainContainer, errorContainer)
  //     }
  //   });
  // });

  // const createErrorMessage = (inputContainer) => {
  //   const errCont = inputContainer.querySelector(".error-container");

  //   if (!errCont.querySelector(".error-message")) {
  //     const labelContainer = inputContainer.querySelector(".label-container");
  //     const labelElement = labelContainer.querySelector("label");
  //     const labelText = labelElement.textContent;
  //     const errorMessage = document.createElement("span");
  //     errorMessage.className = "error-message";
  //     errorMessage.textContent = `Por favor ingresa tu ${labelText}`;
  //     errCont.appendChild(errorMessage);
  //   }
  // };

  // const deleteErrorMessage = (inputContainer) => {
  //   const errCont = inputContainer.querySelector('.error-container');
  //   errCont.style.display = "none"
  // }

  const createErrorMessage = (inputContainer) => {
    const errCont = inputContainer.querySelector(".error-container");

    if (!errCont.querySelector(".error-message")) {
      const labelContainer = inputContainer.querySelector(".label-container");
      const labelElement = labelContainer.querySelector("label");
      const labelText = labelElement.textContent;
      const errorMessage = document.createElement("span");
      errorMessage.className = "error-message";
      errorMessage.textContent = `Por favor ingresa tu ${labelText}`;
      errCont.appendChild(errorMessage);
    }
  };


  const handleInputBlur = (event) => {
    const input = event.target;
    const inputContainer = input.parentElement;
    const mainContainer = inputContainer.parentElement;
    const errorContainer = mainContainer.querySelector(".error-container");

    if (input.validity.valid) {
      console.log(inputContainer)
      mainContainer.classList.add("valid")
      mainContainer.classList.remove("invalid")
      mainContainer.classList.remove("active-error");
      mainContainer.classList.add("active-check");
    } else {
      mainContainer.classList.remove("valid")
      mainContainer.classList.add("invalid")
      mainContainer.classList.remove("active-check");
      mainContainer.classList.add("active-error");
      createErrorMessage(mainContainer, errorContainer);
    }
  };


  inputs.forEach((input) => {
    input.addEventListener("blur", handleInputBlur);
  });





}


// console.log(inputContainer)
    // const grandparentElement = inputContainer.parentElement;
    // const containerError = document.querySelector(".error-container");

    // let errorMessage = containerError.querySelector(".error-message");

    // // If errorMessage doesn't exist, create and append it
    // if (!errorMessage) {
    //   errorMessage = document.createElement("span");
    //   errorMessage.className = "error-message";
    //   errorMessage.textContent = "Este campo es obligatorio";
    //   containerError.appendChild(errorMessage);
    // }

    // input.addEventListener("blur", function () {
    //   const inputValue = this.value;
    //   const isEmpty = inputValue === "";
    //   const validClass = isEmpty ? "invalid" : "valid";
    //   const invalidClass = isEmpty ? "valid" : "invalid";
    //   console.log(this)

    //   const errorIcon = containerError.querySelector(".bx-error-circle");
    //   const checkIcon = containerError.querySelector(".bx-check");

    //   errorIcon.style.display = isEmpty ? "block" : "none";
    //   checkIcon.style.display = isEmpty ? "none" : "block";

    //   containerError.classList.add(isEmpty ? "error" : "check");
    //   containerError.classList.remove(isEmpty ? "check" : "error");
    //   grandparentElement.classList.add(validClass);
    //   grandparentElement.classList.remove(invalidClass);
    //   errorMessage.style.display = isEmpty ? "block" : "none";
    // });