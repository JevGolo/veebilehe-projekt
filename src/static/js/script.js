document.addEventListener("DOMContentLoaded", function () {
    // Valime välja dropdown menüü ja nupp
    const dropdownMenu = document.querySelector(".dropdown-menu"); 
    const dropdown = document.querySelector(".dropdown");

    // Kui kasutaja klikib "Muusikastiilid" nupule, siis ei toimu linki järgimist (ei lähe ühelegi lehele)
    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Takistame linkide järgimise
    });

    // Kui hiir liigub "Muusikastiilid" nuppule, kuvame dropdown-menüü
    dropdown.addEventListener("mouseover", function () {
        dropdownMenu.style.display = "block"; // Kuvame menüü
    });

    // Kui hiir lahkub "Muusikastiilid" nupult, peidame dropdown-menüü
    dropdown.addEventListener("mouseout", function () {
        dropdownMenu.style.display = "none"; // Peidame menüü
    });

    // Kui kasutaja klikib menüüvalikut, siis viib ta selle vastavale lehele
    dropdownMenu.addEventListener("click", function(event) {
        const target = event.target; // Valime valitud lingi
        if(target.tagName === 'A') { // Kui klikiti lingile (tagName on "A")
            window.location.href = target.href; // Suuname kasutaja vastavale lehele
        }
    });
});
