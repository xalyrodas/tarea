
import { createSection } from "./componentes/contenido/data.js";
import { form } from "./componentes/form/form.js";
import { header } from "./componentes/header/header.js";

let DOM = document.getElementById("#root");

DOM.appendChild(header());
DOM.appendChild(createSection());
DOM.appendChild(form());

