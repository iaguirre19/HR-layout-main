import { displayHeaderInfo } from "./headerLeftDisplay.js";
import { updateGlobalData, getGlobalData, buttonsShow, stepCounter, clearComplete, hideModal } from "./global/global.js";
import { validateInputs } from "./validate-form/validationFunctions.js";
validateInputs

const toggleBtns = document.querySelectorAll(".button[data-form]");
const modalElement = document.querySelector(".main-page-modal");
const dataArray = [
  {
    "data-personal": {
      title: "Datos personales",
      description: "Completa tus datos personales para continuar.",
      icon: "<i class='bx bx-user'></i>",
    },
  },
  {
    "additional-data": {
      title: "Datos adicionales",
      description: "Proporciona información adicional relevante.",
      icon: "<i class='bx bx-user-plus'></i>",
    },
  },
  {
    "contact-information": {
      title: "Información de contacto",
      description:
        "Por favor, proporciona detalles sobre al menos dos empresas en las que hayas trabajado anteriormente.",
      icon: "<i class='bx bx-book-content'></i>",
    },
  },
  {
    "health-information": {
      title: "Información de salud",
      description: "Indica detalles importantes sobre tu estado de salud.",
      icon: "<i class='uil uil-heart-medical'></i>",
    },
  },
  {
    "confirmation-required": {
      title: "Confirmación requerida",
      description: "Confirma ciertos datos antes de continuar.",
      icon: "<i class='uil uil-user-check'></i>",
    },
  },
  {
    "position-data": {
      title: "Información de Posición",
      description: "Proporciona detalles sobre tu posición actual o deseada.",
    },
  },
];


// ===== Display the form on the left depending on wich one is clicked. (EVENT)

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", toogleEvent);
});

function toogleEvent() {
  const toggleId = this.getAttribute("data-form");
  const containerToggle = this;

  const formData = showFormContainerMatch(toggleId, dataArray);
  const divContainer = formData;
  const containerStep = stepCounter(divContainer);
  updateGlobalData(divContainer, containerStep, containerToggle);
  buttonsShow(containerStep, nextButton);
  validateInputs(divContainer);
  clearComplete(getGlobalData);
  hideModal(modalElement); 
}

const showFormContainerMatch = (idToggle, dataArray) => {
  const formSections = document.querySelectorAll(".sections-toggle-form");

  let selectedSection = null;

  formSections.forEach((section) => {
    if (idToggle === section.id) {
      section.classList.add("active-selected");
      selectedSection = section;
      displayHeaderInfo(idToggle, dataArray);
    } else {
      section.classList.remove("active-selected");
    }
  });

  if (selectedSection !== null) {
    return selectedSection;
  }
};


 
