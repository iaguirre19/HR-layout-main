// const formDataFromLocalStorage = JSON.parse(localStorage.getItem("formData"));

// function compareDataPersonalProperty(formData) {
//   // Obtén las propiedades del objeto "formData"
//     const formDataProperties = Object.keys(formData);
//     console.log(formData)

//     const mainContainer = document.querySelector(".main_container");
//     const valuesPrint = document.querySelectorAll(".field-value");
//     const children = mainContainer.children;

//     for (let i = 0; i < children.length; i++) {
//         const child = children[i];
//         const id = child.id;

//         if (formDataProperties.includes(id)) {
//             const values = formData[id];
//             for(const prop in values){
//                 if(values.hasOwnProperty(prop)){
//                     const value = values[prop];
//                     console.log(prop);
//                     valuesPrint.forEach((vPrint) => {
//                         const idField = vPrint.id;
//                         if(idField === values[prop]){
//                             vPrint.textContent = value
//                         }
//                     })
//                 }
//             }
//         }

//     }
// }

// compareDataPersonalProperty(formDataFromLocalStorage);




const formDataFromLocalStorage = JSON.parse(localStorage.getItem("formData"));

function compareDataPersonalProperty(formData) {
  // Obtén las propiedades del objeto "formData"
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
          console.log(prop);
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
}

// Ejemplo de objeto con valores
compareDataPersonalProperty(formDataFromLocalStorage);




































 // const jsonValue = JSON.stringify(value, null, 2);
            // valuesPrint.forEach((content) => {
            //     const contentId = content.id;
            //     if(contentId === value)
            //     console.log(contentId)
            // })






// function compareDataPersonalProperty(formData) {
//   // Obtén las propiedades del objeto "formData"
//   const formDataProperties = Object.keys(formData);

//   const mainContainer = document.querySelector(".main_container");
//   const children = mainContainer.querySelectorAll(".field-value");






// //   children.forEach((child) => {
// //     const id = child.getAttribute("id");

// //     if (formDataProperties.includes(id)) {
// //       const value = formData[id];
// //       // Actualiza el contenido del elemento con el valor del objeto
// //       child.textContent = `"${id}": "${value}"`;
// //     }
// //   });
// }

// // Ejemplo de objeto con valores
// const formDataFromLocalStorage = JSON.parse(localStorage.getItem("formData"));
// compareDataPersonalProperty(formDataFromLocalStorage);
