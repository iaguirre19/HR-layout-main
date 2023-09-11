import { getGlobalData } from "../global/global.js";

export function validateAndToggleSibling() {
  const toggleContainer = getGlobalData().containerToggle;
  // console.log(toggleContainer)

  if (toggleContainer.classList.contains("step-completion")) {
    const sibling = toggleContainer.nextElementSibling;

    if (sibling) {
      sibling.classList.remove("hidden-toggle");
      sibling.click();
    }
  }
}
