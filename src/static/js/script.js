document.addEventListener("DOMContentLoaded", function () {
    // Valime välja dropdown menüü ja nupp
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const dropdown = document.querySelector(".dropdown");

    // Kui kasutaja klikib "Muusikastiilid" nupule, siis ei toimu linkide järgimist (ei lähe ühelegi lehele)
    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Takistame linkide järgimist
    });

    // Lisame sujuva ülemineku dropdown menüü kuvamisele
    dropdownMenu.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out"; // Lisame ka liikumise ülemineku efekti

    // Kõik menüü sündmused pakendame ühe funktsiooni sisse, et vältida dubleerimist
    const toggleDropdownMenu = (isVisible) => {
        dropdownMenu.style.opacity = isVisible ? 1 : 0;
        dropdownMenu.style.transform = isVisible ? "translateY(0)" : "translateY(-10px)"; // Lisame tõukeefekti
        dropdownMenu.style.pointerEvents = isVisible ? "auto" : "none";  // Kasutame pointer-events, et vältida menüü klikkimist, kui see on nähtamatu
    };

    // Kui hiir liigub nupu peale, kuvame dropdown-menüü
    dropdown.addEventListener("mouseover", () => {
        dropdownMenu.style.display = "block";
        toggleDropdownMenu(true); // Kuvame menüü
    });

    // Kui hiir lahkub nupu pealt, peidame dropdown-menüü
    dropdown.addEventListener("mouseout", () => {
        toggleDropdownMenu(false); // Peidame menüü
        setTimeout(() => {
            dropdownMenu.style.display = "none"; // Viivitus, et üleminek lõppeks
        }, 300);
    });

    // Kui kasutaja klikib menüüvalikut, siis viib ta selle vastavale lehele
    dropdownMenu.addEventListener("click", function(event) {
        const target = event.target; // Valime valitud lingi
        if(target.tagName === 'A') { // Kui klikiti lingile (tagName on "A")
            window.location.href = target.href; // Suuname kasutaja vastavale lehele
        }
    });
});

