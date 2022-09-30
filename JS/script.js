// Creates a new InstersectionObserver that toggles the "hidden" class when the element is visible to the user
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("hidden", !entry.isIntersecting);
    })
})

const sections = document.querySelectorAll(".sections");
const hiddenElems = document.querySelectorAll(".hidden");

// Apply the observer to each elements with the "hidden" class
hiddenElems.forEach((el) => observer.observe(el))

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
    const navbar = document.getElementById("Topnav");

    navbar.classList.toggle("responsive");
}