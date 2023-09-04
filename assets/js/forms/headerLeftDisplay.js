export const displayHeaderInfo = (formSelected, headerData) => {
  headerData.forEach((data) => {
    if (formSelected === Object.keys(data)[0]) {
      const properties = data[formSelected];
      const title = properties.title;
      const description = properties.description;
      const icon = properties.icon;
      printSectionInfo(title, description, icon);
      resetForm();
    }
  });
};

const printSectionInfo = (title, description, icon) => {
  const iconContainer = document.querySelector(".icon");
  const titleContainer = document.querySelector(".title-form-h2");
  const titleDescription = document.querySelector(".title-form-description");
  
  iconContainer.innerHTML = icon; 
  titleDescription.textContent = description;
  titleContainer.textContent = title;
};

// This function only works for the toggles to return to part one.
const resetForm = () => {
  const formSections = document.querySelectorAll(".sections-toggle-form");
  formSections.forEach((sect) => {
    const sections = sect.querySelectorAll(".step");

    sections.forEach((section, index) => {
      
      if (!section.classList.contains("hidden")) {
        section.classList.add("hidden");
      }

      if (index === 0) {
        section.classList.add("active-part");
        section.classList.remove("hidden");
      }
    });

  });
};
