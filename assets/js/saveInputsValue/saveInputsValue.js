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
    console.log(dataValues)
};

const saveLocalStorage = () => {
    localStorage.setItem("formData", JSON.stringify(dataValues));
}


export {saveInputsValue, saveLocalStorage}
// const displayDataValuesAsJSON = () => {
//     for (const prop in dataValues) {
//         const propValue = dataValues[prop];
//         const propJSON = JSON.stringify({ [prop]: propValue }, null, 2);
//         console.log(`Property "${prop}":\n${propJSON}`);
//     }
// };