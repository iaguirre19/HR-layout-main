// Each of the values of the inputs will be saved in this object, the values are saved every time a section is completely filled, it is saved -
// as soon as the user clicks save, this object will be taken later to send it to the database.
// This object is stored in local storage in order to print the values in the form that is printed on the physical sheet.

const dataValues = {
    "data-personal": null,
    "additional-data": null,
    "contact-information": null,
    "health-information": null,
    "confirmation-required": null,
};
const saveInputsValue = (value, idContainer) => {
  if (dataValues.hasOwnProperty(idContainer)) {
    if (dataValues[idContainer] !== null) {
      dataValues[idContainer] = null;
    }
    dataValues[idContainer] = value;
  } else {
    console.log(
      `El idContainer "${idContainer}" no coincide con ninguna propiedad válida en dataValues.`
    );
  }
  console.log(dataValues);
};

const saveLocalStorage = () => {
  localStorage.setItem("formData", JSON.stringify(dataValues));
};

export { saveInputsValue, saveLocalStorage };
