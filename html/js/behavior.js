"use strict";

var isThumbnailLarge = false;

document.addEventListener("DOMContentLoaded", function () {
    setUpThumbNail();
    initBrewApp();
    initBurgerClick();
});

function setUpThumbNail() {

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function () {
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

    burger.addEventListener("click", () => {
        console.log("hit hamburger button");

        nav.classList.toggle('nav_slide');
    })
}

