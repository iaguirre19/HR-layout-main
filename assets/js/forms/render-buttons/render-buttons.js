import { getGlobalData, buttonsShow, stepCounter, storeFormData } from "../global/global.js";
import { showMessageHeader } from "../header-meesages/header-messages.js";
import { storageInputsPart } from "../storageForm/storageForm.js";
import { inputIncomplete } from "../validate-form/validateIncompleteInputs.js";
// import { printContent } from "../print-form/printingForm.js";
import { isAllChildrenValid, validateInputs } from "../validate-form/validationFunctions.js";
import { validateAndToggleSibling } from "../validate-toggle/validateToggle.js";




const nextButton = document.querySelector("#nextButton");
const saveButton = document.querySelector("#saveButton");
const prevButton = document.getElementById("prevButton");
const printButton = document.querySelector(".print-button");

nextButton.addEventListener("click", () => changePage("next"));
prevButton.addEventListener("click", () => changePage("prev"));
saveButton.addEventListener("click", () => savePageSection())
printButton.addEventListener("click", () => printButtonModal())


function markAsComplete(element) {
  element.classList.add("complete");
}

function changePage(action) {
  const divContainer = getGlobalData().divContainer;
  const currentPosition = divContainer.querySelectorAll(".step");
  const activeIndex = Array.from(currentPosition).findIndex((element) =>
    element.classList.contains("active-part")
  );

  if (activeIndex !== -1) {
    // Active element returns to the group container
    const activeElement = currentPosition[activeIndex];
    if (action === "next") {

      const isAllComplete = isAllChildrenValid(activeElement);

      if(isAllComplete === true){
        markAsComplete(activeElement);
        
        const nextIndex = activeIndex + 1;
        const nextElement = currentPosition[nextIndex];
        if (nextElement) {
            activeElement.classList.replace("active-part", "hidden");
            nextElement.classList.replace("hidden", "active-part");

            buttonsShow(stepCounter(divContainer));
            validateInputs(divContainer);
            showMessageHeader(divContainer);
          }
        
      }else{
        const inputsInvalid = isAllComplete;
        inputIncomplete(inputsInvalid)
      }
      // const invalidChild = activeElement.querySelector(".invalid");

      // if (invalidChild) {
      //   console.log("Invalid input found in active element", invalidChild);

      //   const invalidInputs = activeElement.querySelectorAll(
      //     ".form-group.invalid input[required]:not(.valid)"
      //   );
      //   invalidInputs.forEach((input) => console.log("Invalid input:", input));
      // } else {
      //   const nextInputs = activeElement.querySelectorAll(".valid");

      //   if (nextInputs.length === 0) {
      //     console.log("Not all fields are valid");
      //     return false;
      //   } else {
      //     markAsComplete(activeElement);

      //     const nextIndex = activeIndex + 1;
      //     const nextElement = currentPosition[nextIndex];

      //     if (nextElement) {
      //       activeElement.classList.replace("active-part", "hidden");
      //       nextElement.classList.replace("hidden", "active-part");

      //       buttonsShow(stepCounter(divContainer));
      //       validateInputs(divContainer);
      //       showMessageHeader(divContainer);
      //     }
      //   }
      // }
    } else if (action === "prev") {
      const prevIndex = activeIndex - 1;
      const prevElement = currentPosition[prevIndex];

      if (prevElement) {
        activeElement.classList.replace("active-part", "hidden");
        prevElement.classList.replace("hidden", "active-part");

        buttonsShow(stepCounter(divContainer));
        showMessageHeader(divContainer);
      }
    }
  }
}






function checkSiblingsComplete(element) {
  const siblings = Array.from(element.parentElement.children);

  if (siblings.every((sibling) => sibling.classList.contains("complete"))) {
    const toggleContainer = getGlobalData().containerToggle;
    toggleContainer.classList.add("step-completion");

    const idTo = toggleContainer.getAttribute("id");


    if (idTo === "lastToggle") {
      const modalElement = document.querySelector(".main-page-modal");
      modalElement.style.opacity = "1";
      modalElement.style.zIndex = "20";
      modalElement.style.transition = "opacity 0.3s ease-in-out"; 

      storeFormData();
    }
  }
}






function getVisibleInputValues(element) {
  // Encuentra todos los elementos con la clase "valid" dentro del elemento dado.
  const validElements = element.querySelectorAll(".valid");
  const values = {};

  if(!validElements){
    return
  }else{
    validElements.forEach((validElement) => {
      // Encuentra todos los elementos <input> y <select> dentro del elemento con la clase "valid".
      const inputsAndSelects = validElement.querySelectorAll("input, select");
  
      inputsAndSelects.forEach((input) => {
        // Verifica si el elemento está visible
        const computedStyle = window.getComputedStyle(input);
        if (computedStyle && computedStyle.display !== "none") {
          // Si el elemento está visible, toma su valor y lo almacena en el objeto 'values'.
          values[input.name] = input.value;
        }
      });
    });
  }
  console.log(values);

  return values;
}



// function validateAndMarkAsComplete(element) {
//   // console.log(element)
//   // getVisibleInputValues(element)
//   const requiredInputsAndSelects = element.querySelectorAll(
//     ".input-container input[required], .input-container select[required]"
//   );

//   console.log(requiredInputsAndSelects);

//   const allFieldsValid = [...requiredInputsAndSelects].every(
//     (input) => input.value !== ""
//   );

//   // console.log(allFieldsValid);

//   if (allFieldsValid) {
//     markAsComplete(element);
//     checkSiblingsComplete(element);
//   } else {
//     console.log("Not all fields are valid");
//   }
// }





function savePageSection() {
  const divContainer = getGlobalData().divContainer;
  const currentPosition = divContainer.querySelectorAll(".step");
  const lastPosition = currentPosition[currentPosition.length - 1];
  const isAllComplete = isAllChildrenValid(lastPosition);
  if(isAllComplete === true){
    checkSiblingsComplete(lastPosition);
    markAsComplete(lastPosition);
  }else{
    const inputEmpty = inputIncomplete(isAllComplete)
  }



  // storageInputsPart();
  // const global = getGlobalData();
  // const formData = global.formData;
  // const jsonData = JSON.stringify(formData);

  // console.log(jsonData);


}


function printButtonModal() {
  const data = getGlobalData();
  console.log(data.formData);
  printContent();
}




// Nota corregir lo del salto de parte ya que los inputs que se agregan esta pidiendo que se validen entonces, crear una funcion que cree ese input.