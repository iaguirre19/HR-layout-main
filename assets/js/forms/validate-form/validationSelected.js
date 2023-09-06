document.addEventListener("DOMContentLoaded", () => {
    const selectInputs = document.querySelectorAll(".validate-select");

    let valid = true;

    selectInputs.forEach((select) => {
        select.addEventListener("blur", () => {
            if(!select.checkValidity()){
                const container = select.parentElement.parentNode;
                validateAndStyleSelect(container, valid);
                valid = false
            }else{
                valid = true
                const container = select.parentElement.parentNode;
                validateAndStyleSelect(container, valid);
            }
        })
    })


    const validateAndStyleSelect = (container, valid) => {
        const inputContainer = container.querySelector(".input-container")

        if(!valid){
            inputContainer.classList.remove("valid");
            container.classList.remove("active-check");
            container.classList.add("active-error");
        }else{
            inputContainer.classList.add("valid");
            container.classList.remove("active-error");
            container.classList.add("active-check");
        }
    }
})