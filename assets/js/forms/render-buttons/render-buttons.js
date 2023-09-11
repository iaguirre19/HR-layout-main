import { getGlobalData, buttonsShow, stepCounter, storeFormData } from "../global/global.js";
import { showMessageHeader } from "../header-meesages/header-messages.js";
import { storageInputsPart } from "../storageForm/storageForm.js";
import { createErrorIfNeeded } from "../validate-form/validateErrorMessages.js";
import { inputIncomplete } from "../validate-form/validateIncompleteInputs.js";
// import { printContent } from "../print-form/printingForm.js";
import { createErrorMessage, isAllChildrenValid, validateInputs } from "../validate-form/validationFunctions.js";
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
  const formGlobal = getGlobalData().formData;
  const currentPosition = divContainer.querySelectorAll(".step");
  const lastPosition = currentPosition[currentPosition.length - 1];
  const isAllComplete = isAllChildrenValid(lastPosition);
  let valores = []
  if(isAllComplete === true){
    const valuesReceived = getVisibleInputValues(divContainer);
    formGlobal[divContainer.id] = valuesReceived;
    const jsonData = JSON.stringify(formGlobal);
    console.log(jsonData)
    markAsComplete(lastPosition);
    checkSiblingsComplete(lastPosition);
    validateAndToggleSibling();
  }else{
    inputIncomplete(isAllComplete)
  }


  // Terminar esta parte me quede en guardar los daros de cada secccion con el bton de save en un array de objetos con la informaciond e cada seccion. revisar que la funcion funcione correctamente.
  



  // storageInputsPart();
  // const global = getGlobalData();
  // const formData = global.formData;
  // const jsonData = JSON.stringify(formData);

  // console.log(jsonData);


}

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
  }
}























// const data = getGlobalData();
// console.log(data.formData);
// printContent();


// Nota corregir lo del salto de parte ya que los inputs que se agregan esta pidiendo que se validen entonces, crear una funcion que cree ese input.