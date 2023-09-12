
const formDataFromLocalStorage = JSON.parse(localStorage.getItem("formData"));

function compareDataPersonalProperty(formData) {
    const formDataProperties = Object.keys(formData);
    const mainContainer = document.querySelector(".main_container");
    const valuesPrint = document.querySelectorAll(".field-value");
    const children = mainContainer.children;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const id = child.id;
        if (formDataProperties.includes(id)) {
            const values = formData[id];
            for (const prop in values) {
                if (values.hasOwnProperty(prop)) {
                    const value = values[prop];
                    valuesPrint.forEach((vPrint) => {
                        const idField = vPrint.id;
                        if (idField === prop) {
                            vPrint.textContent = value;
                        }
                    });
                }
            }
        }
    }
    validateSpacesEmpty(valuesPrint);
    

}


function validateSpacesEmpty(fields) {
  fields.forEach((field) => {
    const content = field.textContent.trim();

    if (content === "") {
      field.textContent = "Ninguno";
    } else {
      // Capitaliza la primera letra y concatena el resto en minúsculas
      field.textContent =
        content.charAt(0).toUpperCase() + content.slice(1).toLowerCase();
    }
  });
}

function displayTimeAndDate() {

    const currentDate = new Date();


    const formattedHour = currentDate.getHours().toString().padStart(2, "0");
    const formattedMinutes = currentDate.getMinutes().toString().padStart(2, "0");


    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Note: In JavaScript, January is 0, February is 1, etc.
    const year = currentDate.getFullYear();


    const formattedDate = `${day}/${month}/${year}`;


    const timeElement = document.getElementById("hrs");
    if (timeElement) {
        timeElement.textContent = `${formattedHour}:${formattedMinutes}`;
    }

    const dateElement = document.getElementById("date");
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
}



compareDataPersonalProperty(formDataFromLocalStorage);
