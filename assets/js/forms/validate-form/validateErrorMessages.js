const messagesErrorData = [
  { name: "nombre", message: "Ingresa tu nombre por favor." },
  {
    name: "apellido_paterno",
    message: "Ingresa tu apellido paterno por favor.",
  },
  {
    name: "apellido_materno",
    message: "Ingresa tu apellido materno por favor.",
  },
  {
    name: "lugar_nacimiento",
    message: "Ingresa tu lugar de nacimiento por favor.",
  },
  { name: "nacionalidad", message: "Ingresa tu nacionalidad por favor." },
  {
    name: "fecha_nacimiento",
    message: "Ingresa tu fecha de nacimiento por favor.",
  },
  { name: "genero", message: "Selecciona tu género por favor." },
  { name: "edad", message: "Ingresa tu edad por favor." },
  { name: "direccion", message: "Ingresa tu dirección por favor." },
  { name: "numero_calle", message: "Ingresa el número de calle por favor." },
  { name: "colonia", message: "Ingresa tu colonia por favor." },
  { name: "codigo_postal", message: "Ingresa tu código postal por favor." },
  {
    name: "ciudad_delegacion",
    message: "Ingresa tu ciudad o delegación por favor.",
  },
  { name: "estado", message: "Ingresa tu estado por favor." },
  { name: "vive_con", message: "Selecciona con quién vives por favor." },
  {
    name: "tenencia_vivienda",
    message: "Selecciona tu tipo de vivienda por favor.",
  },
  { name: "estado_civil", message: "Selecciona tu estado civil por favor." },
  { name: "numero_de_hijos", message: "Ingresa el número de hijos por favor." },
  {
    name: "grados_de_estudio",
    message: "Selecciona tus grados de estudio por favor.",
  },
  { name: "area_o_carrera", message: "Ingresa tu área o carrera por favor." },
  { name: "rfc", message: "Ingresa tu RFC por favor." },
  { name: "curp", message: "Ingresa tu CURP por favor." },
  { name: "imss", message: "Ingresa tu número de IMSS por favor." },
  {
    name: "cuenta_con_pasaporte",
    message: "Selecciona si cuentas con pasaporte por favor.",
  },
  {
    name: "cuenta_con_visa",
    message: "Selecciona si cuentas con visa por favor.",
  },
  { name: "telefono_fijo", message: "Ingresa tu teléfono fijo por favor." },
  { name: "telefono_movil", message: "Ingresa tu teléfono móvil por favor." },
  {
    name: "correo_electronico",
    message: "Ingresa tu correo electrónico por favor.",
  },
  { name: "linkedin", message: "Ingresa tu perfil de LinkedIn por favor." },
  {
    name: "nombre_contacto",
    message: "Ingresa el nombre de tu contact por favor.",
  },
  {
    name: "apellido_contacto",
    message: "Ingresa el nombre de tu contact por favor.",
  },

  {
    name: "telefono_de_contacto",
    message: "Ingresa el número de teléfono de contacto por favor.",
  },
  { name: "parentesco_contacto", 
    message: "Selecciona el parentesco del contacto por favor." },
  {
    name: "nombre_de_la_empresa_1",
    message: "Ingresa el nombre de la primera empresa por favor.",
  },
  {
    name: "jefe_directo",
    message: "Ingresa el nombre del supervisor por favor.",
  },
  {
    name: "telefono_de_contacto_empresa",
    message: "Ingresa el teléfono de contacto por favor.",
  },
  {
    name: "extension",
    message: "Ingresa la extensión por favor.",
  },
  {
    name: "nombre_de_la_empresa_2",
    message: "Ingresa el nombre de la segunda empresa por favor.",
  },
  {
    name: "jefe_directo_2",
    message: "Ingresa el nombre del supervisor por favor.",
  },
  {
    name: "telefono_de_contacto_2",
    message: "Ingresa el teléfono del manager anterior.",
  },
  {
    name: "extension_2",
    message: "Ingresa la extensión por favor.",
  },
  {
    name: "nombre_de_referencia_personal_1",
    message: "Ingresa el nombre de la primera referencia personal por favor.",
  },
  {
    name: "apellidos_de_referencia_personal_1",
    message: "Ingresa el apellido de la primera referencia personal por favor.",
  },
  {
    name: "telefono_de_contacto_de_referencia_personal_1",
    message: "Ingresa el teléfono de la primera referencia personal por favor.",
  },
  {
    name: "tipo_de_sangre",
    message: "Selecciona tu tipo de sangre por favor.",
  },
  {
    name: "alergias",
    message: "Ingresa información sobre tus alergias.",
  },
  {
    name: "tiene_diabetes",
    message: "Selecciona si tienes diabetes por favor.",
  },
  {
    name: "tiene_hipertension",
    message: "Selecciona si tienes hipertensión por favor.",
  },
  {
    name: "tiene_miopia_astigmatismo",
    message: "Selecciona si tienes miopía o astigmatismo por favor.",
  },
  {
    name: "tiene_dificultad_motriz",
    message: "Selecciona si tienes dificultad motriz por favor.",
  },
  {
    name: "estado_de_salud",
    message: "Selecciona tu estado de salud por favor.",
  },
  {
    name: "enfermedad_cronica",
    message: "Selecciona si tienes alguna enfermedad crónica por favor.",
  },
  {
    name: "enfermedad_cronica_especificar",
    message: "Ingresa información sobre tu enfermedad crónica por favor.",
  },
  {
    name: "has_covid_19",
    message: "Selecciona si has tenido COVID-19 por favor.",
  },
  {
    name: "covid_vaccination",
    message: "Selecciona si has sido vacunado contra COVID-19 por favor.",
  },
  {
    name: "medicacion",
    message: "Selecciona si estás tomando medicación por favor.",
  },
  {
    name: "tomar_medicamento",
    message:
      "Ingresa información sobre la medicación que estás tomando por favor.",
  },
  {
    name: "cita_programada",
    message: "Selecciona si tienes una cita médica programada por favor.",
  },
  {
    name: "fecha_cita",
    message: "Ingresa la fecha de tu cita médica por favor.",
  },
  {
    name: "estudias_actualmente",
    message: "Selecciona si estás estudiando actualmente por favor.",
  },
  { name: "horario_escolar", message: "Ingresa tu horario escolar por favor." },
  { name: "grado_escolar", message: "Ingresa tu grado escolar por favor." },
  {
    name: "evento_programado",
    message: "Selecciona si tienes un evento programado por favor.",
  },
  {
    name: "fecha_evento",
    message: "Ingresa la fecha de tu evento programado por favor.",
  },
  {
    name: "motivo_evento",
    message: "Ingresa el motivo de tu evento programado por favor.",
  },
  {
    name: "medio_de_transporte",
    message: "Selecciona tu medio de transporte por favor.",
  },
  {
    name: "tiempo_de_desplazamiento",
    message: "Ingresa el tiempo estimado de desplazamiento por favor.",
  },
  {
    name: "experiencia_en_ventas",
    message: "Selecciona si tienes experiencia en ventas por favor.",
  },
  {
    name: "tipo_de_experiencia_en_ventas",
    message: "Selecciona el tipo de experiencia en ventas por favor.",
  },
  {
    name: "nivel_de_ingles",
    message: "Selecciona tu nivel de inglés por favor.",
  },
];

function displayErrorMessages(input) {
    const name = input.getAttribute("name");
        if (name) {
        const errorMessage = messagesErrorData.find((obj) => obj.name === name)?.message;
        if (errorMessage) {
            return errorMessage
        }
    }
};


function createErrorIfNeeded() {
  const errorCheckPrint = document.querySelector(".term-acceptance");
  const existingError = errorCheckPrint.querySelector(".error-print");

  if (!existingError) {
    const errorCheck = document.createElement("div");
    errorCheck.className = "error-print";

    const messageIcon = document.createElement("i");
    messageIcon.className = "bx bx-error";

    const message = document.createElement("span");
    message.textContent = "Acepta los términos y condiciones para continuar";

    errorCheck.appendChild(messageIcon);
    errorCheck.appendChild(message);

    errorCheckPrint.appendChild(errorCheck);
  }
}

export {displayErrorMessages, createErrorIfNeeded };

