import { createSection } from "./data.js";

function initContainer() {
    let container = document.createElement("div");
    container.className = "container";

    let section = createSection();
    container.appendChild(section);

    return container;
}

export { initContainer };
