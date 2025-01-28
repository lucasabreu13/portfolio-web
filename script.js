document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    function handleScroll() {
        scrollElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});
