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

    var active = true;

    burger.addEventListener("click", () => {
        console.log("hit hamburger button");

        nav.classList.toggle('nav_slide');
    })
}
burgerClick();

const methodClick = () => {
    const methods = document.getElementsByClassName("method_icon");

    for (var i = 0; i < methods.length; i++) {
        methods[i].addEventListener("click", function () {
            console.log("item clicked " + methods[i]);
        });
    }
}

methodClick();