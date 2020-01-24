"use strict";

// VARIABLES
var screen_state = 0;
var selectedbrew = new Brew();

// SHARED ELEMENTS
const v60 = "Hario v60";
const chemex = "Chemex";
const french_press = "French Press";

const backBtn_i = document.getElementById("btn_back");

// METHOD SCREEN
const methodScreen_div = document.getElementById("method_screen");

const v60_btn = document.getElementById("v60");
const chemex_btn = document.getElementById("chemex");
const frenchPress_btn = document.getElementById("french_press");

// DESCRIPTION SCREEN
const brewDescScreen_div = document.getElementById("brew_desc_screen");

const brewName_h = document.getElementById("brew_name");
const brewDesc_p = document.getElementById("brew_desc");
const brewCoffeeAmt_figCap = document.getElementById("coffee_amount");
const brewWaterAmt_figCap = document.getElementById("water_amount");
const brewGrindSize_figCap = document.getElementById("grind_size");

const brew_btn = document.getElementById("btn_brew");

// TIMER SCREEN
const timerScreen_div = document.getElementById("timer_screen");

const toggle_btn = document.getElementById("btn_toggle_sw");
const reset_btn = document.getElementById("btn_reset_sw");

var stopWatch;

// INIT
const initBrewApp = function () {

    backBtn_i.addEventListener("click", function () {
        onScreenChange(false);
    });

    brew_btn.addEventListener("click", function () {
        onScreenChange(true);
    })

    toggle_btn.addEventListener("click", function () {
        stopWatch.toggle();

        if (stopWatch.isRunning) toggle_btn.innerHTML = "PAUSE";
        else toggle_btn.innerHTML = "START";
    });

    reset_btn.addEventListener("click", function () {
        stopWatch.reset();

        if (stopWatch.isRunning) toggle_btn.innerHTML = "PAUSE";
        else toggle_btn.innerHTML = "START";
    });

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

const onScreenChange = function (goForward) {

    if (goForward) {
        if (screen_state < 2) screen_state++;
    } else {
        if (screen_state != 0) screen_state--;
    }

    switch (screen_state) {
        case 0: // select method screen
            backBtn_i.style.display = "none";
            methodScreen_div.style.display = "block";
            brewDescScreen_div.style.display = "none";
            break;

        case 1: // brew description screen
            if (stopWatch != undefined) {
                stopWatch.reset();
                toggle_btn.innerHTML = "START";
            }

            backBtn_i.style.display = "block";
            methodScreen_div.style.display = "none";
            brewDescScreen_div.style.display = "flex";
            timerScreen_div.style.display = "none";

            // initialize display values
            brewName_h.innerHTML = selectedbrew.name + "<br>Method";
            brewDesc_p.innerHTML = selectedbrew.description;
            brewCoffeeAmt_figCap.innerHTML = selectedbrew.coffeeAmt + "g";
            brewWaterAmt_figCap.innerHTML = selectedbrew.waterAmt + "g";
            brewGrindSize_figCap.innerHTML = selectedbrew.grindSize;

            // initialize timer variables
            stopWatch = undefined;
            stopWatch = new StopWatch(selectedbrew.steps);
            break;

        case 2: // timer screen
            brewDescScreen_div.style.display = "none";
            timerScreen_div.style.display = "block";
            break;
    }
}

// ON METHOD CHOSEN -> GO TO BREW DESC SCREEN
const onMethodSelect = function (method) {

    switch (method) {
        case v60:
            selectedbrew = getV60method();
            break;

        case chemex:
            selectedbrew = getChemexMethod();
            break;

        case french_press:
            selectedbrew = getFrenchPressMethod();
            break;

        default:
            selectedbrew = getV60method();
            break;
    }

    console.log(`Selected Type: ${method}\nMethod Name: ${selectedbrew.name}`);

    onScreenChange(true);
}