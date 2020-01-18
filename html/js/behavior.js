"use strict";

var isThumbnailLarge = false;

// STOPWATCH VARS
var stopWatch,
    startBtn,
    stopBtn,
    resetBtn;

document.addEventListener("DOMContentLoaded", function () {
    setUpThumbNail();

    stopWatch = new StopWatch();

    startBtn = document.getElementById("btn_toggle_sw");
    stopBtn = document.getElementById("btn_stop_sw");
    resetBtn = document.getElementById("btn_reset_sw");

    startBtn.addEventListener("click", stopWatch.start);
    stopBtn.addEventListener("click", stopWatch.stop);
    resetBtn.addEventListener("click", stopWatch.reset);
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

const burgerClick = () => {
    const burger = document.getElementById("hamburgerBtn");
    const nav = document.querySelector(".nav_links");
    const root = document.documentElement;

    var active = false;

    burger.addEventListener("click", () => {
        console.log("hit hamburger button");

        root.style.setProperty('--nav_ease', 1);

        nav.classList.toggle('nav_slide');

        setTimeout(() => {
            root.style.setProperty('--nav_ease', 0);
        }, 1000);
    })
}
burgerClick();