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
                const valueSelect = select
                const container = select.parentElement.parentNode;
                validateAndStyleSelect(container, valid, valueSelect);
            }
        })
    })


    const validateAndStyleSelect = (container, valid, valueSelect) => {
        const inputContainer = container.querySelector(".input-container").parentElement;
        if(!valid){
            inputContainer.classList.remove("valid");
            container.classList.remove("active-check");
            container.classList.add("active-error");
        }else{
            // console.log(valueSelect.value)
            inputContainer.classList.add("valid");
            container.classList.remove("active-error");
            container.classList.add("active-check");
        }
    }
})