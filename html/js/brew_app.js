"use strict";

// VARIABLES
var screen_state = 0;
var selectedbrew = new Brew();

// SHARED ELEMENTS
const v60 = "Hario v60";
const chemex = "Chemex";
const french_press = "French Press";

const back_btn = document.getElementById("btn_back");

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

// const stepTypeIcon_i = document.getElementById("step_type_icon");
// const stepType_figCap = document.getElementById("step_type");

// const stepCurrentPour_p = document.getElementById("step_current_pour");
// const stepPourAmount_p = document.getElementById("step_pour_amount");

// const totalPourAmount_p = document.getElementById("total_pour");

const toggle_btn = document.getElementById("btn_toggle_sw");
const reset_btn = document.getElementById("btn_reset_sw");

var stopWatch;
// const stopWatch = new StopWatch();

// INIT
const initBrewApp = function () {

    back_btn.addEventListener("click", function () {
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
            back_btn.style.display = "none";
            methodScreen_div.style.display = "block";
            brewDescScreen_div.style.display = "none";
            break;

        case 1: // brew description screen
            back_btn.style.display = "block";
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
            stopWatch = null;
            stopWatch = new StopWatch(selectedbrew.steps);
            break;

        case 2: // timer screen
            brewDescScreen_div.style.display = "none";
            timerScreen_div.style.display = "block";

            // stepTypeIcon_i.innerHTML = selectedbrew.steps[currentStepIndex].type.icon;
            // stepType_figCap.innerHTML = selectedbrew.steps[currentStepIndex].type.name;
            break;
    }
}

// ON METHOD CHOSEN -> GO TO TIMER SCREEN // TODO: go to brew description page
const onMethodSelect = function (method) {

    switch (method) {
        case v60:
            selectedbrew = getV60method();
            break;
    }

    console.log(`Selected Type: ${method}\nMethod Name: ${selectedbrew.name}`);

    onScreenChange(true);
}

// CREATE V60 METHOD
const getV60method = function () {

    var brewSteps = [
        new BrewStep(StepType.BLOOM, "Saturate the coffee bed", 75, 10),
        new BrewStep(StepType.WAIT, "Let the coffee de-gas", 0, 20),
        new BrewStep(StepType.POUR, "Pour in concentric circles", 225, 30),
        new BrewStep(StepType.POUR, "Pour in center a little slower", 200, 30),
        new BrewStep(StepType.STIR, "Stir 1x clockwise, 1x counter-clockwise", 0, 10),
        new BrewStep(StepType.SPIN, "Spin once to flatten the bed", 0, 10),
        new BrewStep(StepType.WAIT, "Let the brew finish and draw down", 0, 64),
        new BrewStep(StepType.FINISHED, "Brew should be about done. Enjoy your coffee!", 0, 1)
    ];

    return new Brew("James Hoffman", "A delicious and balanced pour-over recipe created by James Hoffman.", 30, 500, "Fine", brewSteps);
}