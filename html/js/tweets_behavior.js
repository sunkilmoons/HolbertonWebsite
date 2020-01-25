

var triggered = false;

document.addEventListener("DOMContentLoaded", () => {

    initBurgerClick();

    const nav = document.querySelector(".nav_links");

    window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth > 800) {
            nav.style.display = "flex";
            nav.style.transform = `translateX(0%)`;
            isOpen = false;
        } else {
            nav.style.display = "none";
            nav.style.transform = `translateX(100%)`;
            isOpen = false;
        }
    }, true);
});

const initBurgerClick = () => {
    const burger = document.getElementById("hamburgerBtn");
    const nav = document.querySelector(".nav_links");
    var isOpen = false;
    var interval,
        percentClosed = 100,
        clock = 0;

    burger.addEventListener("click", () => {
        console.log("hit hamburger button");

        clock = 0;

        if (!isOpen) {
            console.log("opening drawer");
            nav.style.display = "flex";
            isOpen = true;
            clearInterval(interval);
            interval = setInterval(openingDrawer, 1);
        } else {
            console.log("closing drawer");
            isOpen = false;
            clearInterval(interval);
            interval = setInterval(closingDrawer, 1);
        }
    })

    function closingDrawer() {
        clock++;

        percentClosed = clock * clock * 0.01;

        if (percentClosed >= 100) {
            clearInterval(interval);
            nav.style.display = "none";
        }

        nav.style.transform = `translateX(${percentClosed}%)`
    }

    function openingDrawer() {
        clock++;

        percentClosed = 100 - (clock * clock * 0.01);

        if (percentClosed <= 0) {
            clearInterval(interval);
        }

        nav.style.transform = `translateX(${percentClosed}%)`
    }
}