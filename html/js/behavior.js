"use strict";

var isThumbnailLarge = false;

document.addEventListener("DOMContentLoaded", () => {
    setUpThumbNail();
    initBrewApp();
    initBurgerClick();
});

function setUpThumbNail() {

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", () => {
        if (!isThumbnailLarge) {
            thumbnailElement.className = "";
            isThumbnailLarge = true;
        }
        else {
            thumbnailElement.className = "small";
            isThumbnailLarge = false;
        }
    });
}

const initBurgerClick = () => {
    const burger = document.getElementById("hamburgerBtn");
    const nav = document.querySelector(".nav_links");
    var isOpen = false,
        interval,
        percentClosed = 100,
        animDuration = 1,
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

        // nav.classList.toggle('nav_slide');
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

