import { getGlobalData } from "../global/global.js";

export function validateAndToggleSibling() {
  const toggleContainer = getGlobalData().containerToggle;

  if (toggleContainer.classList.contains("step-completion")) {
    const sibling = toggleContainer.nextElementSibling;

    if (sibling) {
      sibling.classList.remove("hidden-toggle");
      sibling.click();
    }
  }
}
