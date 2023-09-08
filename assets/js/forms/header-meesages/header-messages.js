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
        message:
          "Por favor, proporcione información de contacto en caso de situaciones de emergencia",
      },
    ],
  },
  {
    part: "contact-information",
    groups: [
      {
        name: "group-1",
        message:
          "Por favor, proporciona referencias laborales de tus dos empleos anteriores para ayudarnos a conocer mejor tu experiencia profesional",
      },
      {
        name: "group-2",
        message:
          "Asimismo, te agradeceríamos que nos proporcionaras una referencia laboral de tu segundo empleo anterior para obtener una visión más completa de tu historial profesional",
      },
      {
        name: "group-3",
        message:
          "Por favor, comparte los detalles de contacto de una referencia personal que pueda proporcionarnos información sobre tu carácter y habilidades personales",
      },
    ],
  },
  {
    part: "health-information",
    groups: [
      {
        name: "group-1",
        message:
          "Por favor, proporciona información relevante acerca de tu estado de salud. Esta información nos será útil para poder ofrecerte un espacio laboral adecuado y brindarte el mejor apoyo posible.",
      },
      {
        name: "group-2",
        message:
          "Por favor, proporciona detalles adicionales sobre tu estado de salud, incluyendo si has recibido la vacuna contra el COVID-19",
      },
      {
        name: "group-3",
        message:
          "Adicionalmente, te agradeceríamos que nos informaras si estás tomando algún medicamento en la actualidad o si tienes programado algún compromiso médico en el futuro",
      },
    ],
  },
  {
    part: "confirmation-required",
    groups: [
      {
        name: "group-1",
        message:
          "Por favor, comparte detalles sobre tu educación actual si es relevante para la posición o situación en cuestión. Incluye información sobre el nivel de estudios, la institución académica, el campo de estudio y cualquier dato pertinente a tu formación académica actual.",
      },
      {
        name: "group-2",
        message:
          "Por favor, infórmanos si tienes algún evento o viaje programado en los próximos meses para que podamos tenerlo en cuenta en la planificación laboral",
      },
      {
        name: "group-3",
        message:
          "Por favor, proporciona detalles sobre el medio de transporte que utilizas habitualmente para llegar a la oficina, así como el tiempo estimado que sueles tardar en tu trayecto diario",
      },
      {
        name: "group-4",
        message:
          "Por favor, indícanos si tienes experiencia previa en ventas y tu nivel de competencia en el idioma inglés.",
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
