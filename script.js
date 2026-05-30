const busca = document.getElementById("busca");

busca.addEventListener("keyup", () => {

const termo = busca.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

const texto = card.textContent.toLowerCase();

if(texto.includes(termo)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});