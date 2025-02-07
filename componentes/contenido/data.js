function createSection() { 
    let section = document.createElement('section');
    section.className = "section-1";
    
    for (let i = 1; i <= 13; i++) {
        let div = document.createElement('div');

        if (i === 13) {
            div.className = "div-special";
            div.textContent = "Agregar Tarea";
        } else {
            div.className = `div-${i}`;
            div.textContent = `Tarea: ${i}`;
        }
        
        let innerDiv = document.createElement('div');
        innerDiv.className = `inner-div-${i}`;
        div.appendChild(innerDiv);
        
        section.appendChild(div);
    }
    
    return section;
}

export { createSection };