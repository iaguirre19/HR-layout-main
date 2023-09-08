

    function crearElementoFormulario() {
      // Crear el elemento div con la clase "form-group chronic-illness-espc"
        const divFormGroup = document.createElement("div");
        divFormGroup.className = "form-group chronic-illness-espc";  
        // Crear el elemento div con la clase "label-container"
        const divLabelContainer = document.createElement("div");
        divLabelContainer.className = "label-container"; 
        // Crear la etiqueta "label" y establecer su atributo "for"
        const label = document.createElement("label");
        label.setAttribute("for", "enfermedad-cronica-especificar");
        label.textContent = "Especifica la enfermedad cronica";  
        // Crear el elemento div con la clase "input-container"
        const divInputContainer = document.createElement("div");
        divInputContainer.className = "input-container"; 
        // Crear el elemento "input" y establecer sus atributos
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "enfermedad-cronica-especificar");
        input.setAttribute("name", "enfermedad_cronica_especificar");
        input.setAttribute("required", "required");
        input.setAttribute(
            "placeholder",
            "Especificar enfermedad crónica si aplica"
        );   
      // Crear el icono para el check
        const checkIcon = document.createElement("i");
        checkIcon.className = "bx bx-check"; 
        // Crear el elemento div con la clase "error-container"
        const divErrorContainer = document.createElement("div");
        divErrorContainer.className = "error-container"; 
        // Crear el icono para el error
        const errorIcon = document.createElement("i");
        errorIcon.className = "bx bxs-error";
        // Agregar todos los elementos al DOM
        divLabelContainer.appendChild(label);
        divInputContainer.appendChild(input);
        divInputContainer.appendChild(checkIcon);
        divErrorContainer.appendChild(errorIcon);
        divFormGroup.appendChild(divLabelContainer);
        divFormGroup.appendChild(divInputContainer);
        divFormGroup.appendChild(divErrorContainer); 
      // Agregar el elemento de formulario al cuerpo del documento
        document.body.appendChild(divFormGroup);
    }

