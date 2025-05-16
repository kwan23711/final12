function initGallery() {
    console.log("Page loaded - initGallery called.");

    const images = document.querySelectorAll("#gallery img");

    for (let i = 0; i < images.length; i++) {
        const img = images[i];

        // Add tabindex for keyboard access
        img.setAttribute("tabindex", "0");

        // Mouse events
        img.addEventListener("mouseover", () => {
            img.style.borderColor = "red";
            console.log("Mouseover event triggered.");
        });

        img.addEventListener("mouseleave", () => {
            img.style.borderColor = "transparent";
            console.log("Mouseleave event triggered.");
        });

        // Keyboard focus events
        img.addEventListener("focus", () => {
            img.style.borderColor = "green";
            console.log("Focus event triggered.");
        });

        img.addEventListener("blur", () => {
            img.style.borderColor = "transparent";
            console.log("Blur event triggered.");
        });
    }
}