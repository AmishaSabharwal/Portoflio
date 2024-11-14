// Smooth Scrolling
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Dynamic Background Color Change on Scroll
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrollPosition = window.scrollY;
    hero.style.backgroundColor = `rgba(52, 152, 219, ${1 - scrollPosition / 500})`;
});
