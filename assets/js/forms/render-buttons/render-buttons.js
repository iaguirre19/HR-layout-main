import { displayLoader } from "../../loader/displayLoader.js";
import { saveInputsValue, saveLocalStorage } from "../../saveInputsValue/saveInputsValue.js";
import { getGlobalData, buttonsShow, stepCounter, storeFormData } from "../global/global.js";
import { showMessageHeader } from "../header-meesages/header-messages.js";
import { createErrorIfNeeded } from "../validate-form/validateErrorMessages.js";
import { inputIncomplete } from "../validate-form/validateIncompleteInputs.js";
import { isAllChildrenValid, validateInputs } from "../validate-form/validationFunctions.js";
import { validateAndToggleSibling } from "../validate-toggle/validateToggle.js";




const nextButton = document.querySelector("#nextButton");
const saveButton = document.querySelector("#saveButton");
const prevButton = document.getElementById("prevButton");
const printButton = document.querySelector(".print-button");
const acceptTerms = document.querySelector("#accept-terms");

nextButton.addEventListener("click", () => changePage("next"));
prevButton.addEventListener("click", () => changePage("prev"));
saveButton.addEventListener("click", () => savePageSection())
printButton.addEventListener("click", () => printButtonModal())
acceptTerms.addEventListener("change", () => checkedTerms())


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
  // console.log(siblings)

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
  const inputsAndSelects = element.querySelectorAll("input, select");
  const values = {};

  inputsAndSelects.forEach((input) => {
    const computedStyle = window.getComputedStyle(input);
    if (computedStyle && computedStyle.display !== "none") {
      values[input.name] = input.value;
    }
  });
  return values;
}






function savePageSection() {
  const divContainer = getGlobalData().divContainer;
  const currentPosition = divContainer.querySelectorAll(".step");
  const lastPosition = currentPosition[currentPosition.length - 1];
  const isAllComplete = isAllChildrenValid(lastPosition);
  const idContainer = divContainer.id;
  if (isAllComplete === true) {
    const valuesReceived = getVisibleInputValues(divContainer);
    saveInputsValue(valuesReceived, idContainer);
    markAsComplete(lastPosition);
    checkSiblingsComplete(lastPosition);
    validateAndToggleSibling();
  } else {
    inputIncomplete(isAllComplete);
  };
};

function checkedTerms(){
  const errorCheckPrint = document.querySelector(".term-acceptance");

  if(acceptTerms.checked){
    const existingError = errorCheckPrint.querySelector(".error-print");
    if (existingError) {
      errorCheckPrint.removeChild(existingError);
    }
  }else{
    createErrorIfNeeded();
  }
}

function printButtonModal() {
  const errorCheckPrint = document.querySelector(".term-acceptance");

  if (!acceptTerms.checked) {
    createErrorIfNeeded();
  } else {
    const existingError = errorCheckPrint.querySelector(".error-print");
    if (existingError) {
      errorCheckPrint.removeChild(existingError);
    }
    saveLocalStorage()
    const formDataFromLocalStorage = JSON.parse(
      localStorage.getItem("formData")
    );

    console.log(formDataFromLocalStorage)
    displayLoader()

  }
}