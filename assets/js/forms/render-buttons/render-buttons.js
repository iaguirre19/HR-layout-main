import { getGlobalData, buttonsShow, stepCounter, storeFormData } from "../global/global.js";
import { showMessageHeader } from "../header-meesages/header-messages.js";
import { storageInputsPart } from "../storageForm/storageForm.js";
// import { printContent } from "../print-form/printingForm.js";
import { validateInputs } from "../validate-form/validationFunctions.js";
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
    const activeElement = currentPosition[activeIndex];
    if (action === "next") {
      const invalidChild = activeElement.querySelector(".invalid");

      if (invalidChild) {
        console.log("Invalid input found in active element", invalidChild);

        const invalidInputs = activeElement.querySelectorAll(
          ".form-group.invalid input[required]:not(.valid)"
        );
        invalidInputs.forEach((input) => console.log("Invalid input:", input));
      } else {
        const nextInputs = activeElement.querySelectorAll(
          ".valid"
        );

        if(nextInputs.length === 0){
          console.log("Not all fields are valid");
          return false
        }else{
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
        } 
      }
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

function validateAndMarkAsComplete(element) {
  const requiredInputs = element.querySelectorAll(
    ".input-container input[required]"
  );

  console.log(requiredInputs)
  const allFieldsValid = [...requiredInputs].every(
    (input) => input.value !== ""
  );

  console.log(allFieldsValid)
  if (allFieldsValid) {
    markAsComplete(element);
    checkSiblingsComplete(element); 
  } else {
    console.log("Not all fields are valid");
  }
}




function savePageSection() {
  const divContainer = getGlobalData().divContainer;
  const currentPosition = divContainer.querySelectorAll(".step");
  const lastPosition = currentPosition[currentPosition.length - 1];
  console.log(currentPosition)
  validateAndMarkAsComplete(lastPosition);
  storageInputsPart();
  const global = getGlobalData();
  const formData = global.formData;
  const jsonData = JSON.stringify(formData);

  // console.log(jsonData);


  validateAndToggleSibling();
}


function printButtonModal() {
  const data = getGlobalData();
  console.log(data.formData);
  printContent();
}
