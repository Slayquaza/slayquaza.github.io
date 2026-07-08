const artworks = document.querySelectorAll(".artwork img");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".close");

artworks.forEach((artwork) => {

    artwork.addEventListener("click", () => {

        console.log("clicked");
        lightbox.classList.add("active");

        lightboxImage.src = artwork.src;

    });

});

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (event) => {

    if(event.target === lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        lightbox.classList.remove("active");

    }

});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector(".faq-icon");
        const isOpen = answer.style.maxHeight;

        document.querySelectorAll(".faq-answer").forEach((item) => {
            item.style.maxHeight = null;
        });

        document.querySelectorAll(".faq-icon").forEach((item) => {
            item.classList.remove("open");
        });

        if(!isOpen){

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.add("open");

        }

    });

});

const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {

    button.addEventListener("click", async () => {

        const text = button.dataset.copy;

        try{

            await navigator.clipboard.writeText(text);

            button.textContent = "✓ Copied";

            button.classList.add("copied");

            setTimeout(() => {

                button.classList.remove("copied");

                button.textContent = "Copy";

            }, 1500);

        }catch(error){

            console.error(error);

        }

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active")
        ? "✕"
        : "☰";

});

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});