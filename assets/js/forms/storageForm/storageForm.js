import { getGlobalData } from "../global/global.js";

// This function take all the inputs values and store into the print-pages
export function storageInputsPart() {
  const global = getGlobalData();
  const divContainer = global.divContainer;
  const idC = divContainer.id;
  const inputs = divContainer.querySelectorAll(".complete input");

  const containerData = {}; 

  inputs.forEach((input) => {
    containerData[input.name] = input.value;
  });

  const formData = { [idC]: containerData };
  global.formData.push(formData);
}
