// Sélectionner le bouton hamburger et la sidebar
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Ajouter un événement au clic sur le menu hamburger
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open"); // Ajouter/enlever la classe "open"
});
