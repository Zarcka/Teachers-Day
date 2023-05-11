// Creates a new InstersectionObserver that toggles the "hidden" class when the element is visible to the user
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("hidden", !entry.isIntersecting);
    });
});

const sections = document.querySelectorAll(".sections");
const hiddenElems = document.querySelectorAll(".hidden");

// Apply the observer to each elements with the "hidden" class
hiddenElems.forEach((el) => observer.observe(el));

// This for loop creates anchor elements to go to the previous or next section inside of each section
for (let i = 0; i < sections.length; i++) {
    // Creates two anchor elements for the sections
    const anchorUp = document.createElement("a");
    const anchorDown = document.createElement("a");

    anchorUp.classList.add(...["chevron", "chevron--up"]);
    anchorDown.classList.add(...["chevron", "chevron--down"]);

    // Checks if the section has another section above
    if (i == 0) {
        // Insert the element inside the section, after its last child
        sections[i].insertAdjacentElement("beforeend", anchorDown);
        // Change the hyperlink's URL to the id of the next section
        anchorDown.href = `#${sections[i+1].id}`;
    }
    // Checks if the section is the last one
    else if (i == sections.length-1) {
        // Insert the element inside the section, before its first child
        sections[i].insertAdjacentElement("afterbegin", anchorUp);
        // Change the hyperlink's URL to the id of the previous section
        anchorUp.href = `#${sections[i-1].id}`;
    }
    // if the section is neither the last one nor the first one
    else {
        sections[i].insertAdjacentElement("afterbegin", anchorUp);
        sections[i].insertAdjacentElement("beforeend", anchorDown);
        anchorUp.href = `#${sections[i-1].id}`;
        anchorDown.href = `#${sections[i+1].id}`;
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
    const navbar = document.getElementById("Topnav");

    navbar.classList.toggle("responsive");
};