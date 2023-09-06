

const messages = [
  {
    part: "data-personal",
    groups: [
      {
        name: "group-1",
        message:
          "Queremos conocerte mejor. Por favor, completa tus datos personales para continuar.",
      },
      {
        name: "group-2",
        message:
          "Ahora, necesitamos detalles sobre tu lugar de residencia actual. Por favor, completa los siguientes campos con precisión",
      },
      {
        name: "group-3",
        message:
          "Queremos conocer un poco más acerca de tu situación actual. Por favor, proporciona detalles en cuanto a los siguientes campos:",
      },
      {
        name: "group-4",
        message: "Ahora compártenos en cuanto a tu preparación académica.",
      },
      {
        name: "group-5",
        message:
          "Por favor, proporciona la siguiente información relacionada con tus datos fiscales y de seguridad social",
      },
      {
        name: "group-6",
        message:
          "Por favor, proporcione la siguiente información relacionada con su pasaporte y visa",
      },
      {
        name: "group-7",
        message:
          "Por favor, proporciona la siguiente información relacionada con tus datos de contacto y perfiles en redes sociales",
      },
    ],
  },
  {
    part: "additional-data",
    groups: [
      {
        name: "group-1",
        message: "Mensaje para el Grupo 1 de Additional Data",
      },
      {
        name: "group-2",
        message: "Mensaje para el Grupo 2 de Additional Data",
      },
    ],
  },
  {
    part: "contact-information",
    groups: [
      {
        name: "group-1",
        message: "Mensaje para el Grupo 1 de Contact Information",
      },
      {
        name: "group-2",
        message: "Mensaje para el Grupo 2 de Contact Information",
      },
    ],
  },
  {
    part: "health-information",
    groups: [
      {
        name: "group-1",
        message: "Mensaje para el Grupo 1 de Health Information",
      },
      {
        name: "group-2",
        message: "Mensaje para el Grupo 2 de Health Information",
      },
    ],
  },
  {
    part: "confirmation-required",
    groups: [
      {
        name: "group-1",
        message: "Mensaje para el Grupo 1 de Confirmation Required",
      },
      {
        name: "group-2",
        message: "Mensaje para el Grupo 2 de Confirmation Required",
      },
    ],
  },
];

export function showMessageHeader(mainSection) {
    const partId = mainSection.id;
    const childElements = mainSection.children;
    let groupIdentifier = null;


    for( let i = 0; i < childElements.length; i++ ){
        const child = childElements[i]
        if(child.classList.contains("active-part")){
            const classes = child.className.split(" ");
            for (let j = 0; j < classes.length; j++) {
                if (classes[j].startsWith("group-")) {
                    groupIdentifier = classes[j];
                    break;
                }
            }

            if(groupIdentifier){
                break;
            }
        }
    }

    // Seguir con el regreso que seria el group en string
    const message = messages.find(msg => msg.part === partId);
    
    if(message){
        const group = message.groups.find((group) => group.name === groupIdentifier);
        if(group){
            const messageToPrint = group.message;
            printMessageShowed(messageToPrint);
            
        }
    }
}

const printMessageShowed = (message) => {
  const messageContainer = document.querySelector(".title-form-description");
  return messageContainer.textContent = message
}
