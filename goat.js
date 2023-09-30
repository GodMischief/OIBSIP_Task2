document.addEventListener("DOMContentLoaded", function () {
    const h2Elements = document.querySelectorAll("h2");
    const quoteSection = document.querySelector(".quote");
    const header = document.querySelector("header");

    h2Elements.forEach((h2) => {
        h2.classList.add("animated", "fadeInUp");
    });

    quoteSection.classList.add("animated", "fadeIn");
    header.classList.add("animated", "slideInDown");
});
