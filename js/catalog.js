// Selectam elementele HTML
const searchForm = document.getElementById("searchForm");
const searchInput = searchForm.querySelector("input");

// Lista de proiecte 
let projects = [];

searchInput.addEventListener("input", searchProjects);

function searchProjects(event) {
    event.preventDefault();

    const searchValue = searchInput.value;

    // Filtram lista dupa numele proiectului
    const found = projects.find(proiect => proiect.nume.toLowerCase().
    includes(searchValue.toLowerCase()));

    if(!found || !searchValue) {
        cardsContainer.innerHTML = "";
        projects.forEach(function(proiect) {
            generateCard(proiect);
        })
    } else {
        // Returnam proiectul (s-a gasit o valoare)
        cardsContainer.innerHTML = "";
        generateCard(found);
    }
}