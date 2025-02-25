function tacharCarta(carta) {
    const checkbox = carta.querySelector(".checkbox");

   
    carta.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked; 
        carta.classList.toggle("tachado"); 
    });
}
export{tacharCarta}