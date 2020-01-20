"use strict";

// STRINGS
const v60 = "Hario v60";
const chemex = "Chemex";
const french_press = "French Press";

const stopWatch = new StopWatch();

// BUTTONS
const v60_btn = document.getElementById("v60");
const chemex_btn = document.getElementById("chemex");
const frenchPress_btn = document.getElementById("french_press");

const start_btn = document.getElementById("btn_toggle_sw");
const stop_btn = document.getElementById("btn_stop_sw");
const reset_btn = document.getElementById("btn_reset_sw");

// SCREENS
const methodScreen_div = document.getElementById("method_screen");
const timerScreen_div = document.getElementById("timer_screen");

const initBrewApp = function () {
    start_btn.addEventListener("click", stopWatch.start);
    stop_btn.addEventListener("click", stopWatch.stop);
    reset_btn.addEventListener("click", stopWatch.reset);

    v60_btn.addEventListener("click", function () {
        onMethodSelect(v60);
    });
    chemex_btn.addEventListener("click", function () {
        onMethodSelect(chemex);
    });
    frenchPress_btn.addEventListener("click", function () {
        onMethodSelect(french_press);
    });
}

const onMethodSelect = function (method) {
    console.log(`Selected: ${method}`);
    methodScreen_div.style.display = "none";
    timerScreen_div.style.display = "block";

    switch (method) {
        case v60:
            break;
    }
}
