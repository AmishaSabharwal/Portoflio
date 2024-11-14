// Smooth Scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dynamic Background Color Change on Scroll
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrollPosition = window.scrollY;
    hero.style.backgroundColor = `rgba(52, 152, 219, ${1 - scrollPosition / 500})`;
});
