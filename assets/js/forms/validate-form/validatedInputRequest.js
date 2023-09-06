document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll(".validate-select-opt");

    const validatedInputRequest = (selectInput) => {
        // console.log(selectInput);
        if(selectInput.checkValidity()){
            const value = selectInput.value;
            const selectMainContainer = selectInput.parentNode.parentNode;
            // const selectMainContainer = selectInput.parentNode.parentNode;
            if(value === "si"){
                const nextElement = selectMainContainer.nextElementSibling;
                console.log(nextElement);
                nextElement.classList.add("active")
            }else{
                const nextElement = selectMainContainer.nextElementSibling;
                console.log(nextElement);
                nextElement.classList.remove("active");
            }

        }else{
            return
        }
    };

    selects.forEach((select) => {
        select.addEventListener("blur", () => {
            validatedInputRequest(select);
        });
    });
});
