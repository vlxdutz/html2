// Selectem elementele HTML
const body = document.body;
const darkModeToggler = document.getElementById("dark-mode");
const cardsContainer = document.getElementsByClassName("cards-list")[0];

darkModeToggler.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
})

/* Verificam culoarea profilului */
if(window.matchMedia('(prefers-color-scheme: dark)').matches && window.matchMedia) {
    body.classList.toggle("dark-mode");
}

// Generam elementele HTML pentru un card
function generateCard(proiect) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.src = proiect.img;
    cardImg.alt = proiect.nume;

    div.append(cardImg);

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content");

    const title = document.createElement("h3");
    title.textContent = proiect.nume;
    cardContent.append(title);

    const descriere = document.createElement("p");
    descriere.textContent = proiect.descriere;
    cardContent.append(descriere);

    const cardBtn = document.createElement("button");
    cardBtn.textContent = "Mai Multe";
    
    cardBtn.onclick = function() {
        location.href = proiect.link;
    }
        cardContent.append(cardBtn);

        div.append(cardContent);

        li.append(div);
        cardsContainer.append(li);
}