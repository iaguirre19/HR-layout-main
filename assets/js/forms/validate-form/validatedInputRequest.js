document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".validate-select-opt");

  const validatedInputRequest = (selectInput) => {
    if (selectInput.checkValidity()) {
      const value = selectInput.value;
      const selectMainContainer = selectInput.closest(".form-group");
      const nextElement = selectMainContainer.nextElementSibling;

      if (value === "si") {
        if (
          nextElement.classList.contains("hidden-input") &&
          nextElement.nextElementSibling &&
          nextElement.nextElementSibling.classList.contains("hidden-input")
        ) {
          nextElement.classList.add("active");
          nextElement.nextElementSibling.classList.add("active");
        } else {
          nextElement.classList.add("active");
        }
      } else {
        nextElement.classList.remove("active");
        if (nextElement.nextElementSibling) {
          nextElement.nextElementSibling.classList.remove("active");
        }
      }
    } else {
      return;
    }
  };


  selects.forEach((select) => {
    select.addEventListener("change", () => {
      validatedInputRequest(select);
    });
  });
});
