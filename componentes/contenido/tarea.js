import { contenido } from "./contenido.js"; 
import { Data } from "./data.js"; 
import { tacharCarta } from "./funcionescontenido.js"; 


export function cargarCarta() {
    const datos = Data(); 
    const seccionContenido = contenido(); 

    datos.forEach(item => {
        const carta = document.createElement("div");
        carta.className = "carta";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

      
        const texto = document.createElement("span");
        texto.className = "texto";
        texto.textContent = item;

        carta.appendChild(checkbox);
        carta.appendChild(texto);

        tacharCarta(carta); 

        seccionContenido.appendChild(carta); 
    });

    return seccionContenido; 
}