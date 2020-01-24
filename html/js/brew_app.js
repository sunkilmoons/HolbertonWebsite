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

const getV60method = () => {

    let brewSteps = [
        new BrewStep(StepType.BLOOM, "Saturate the coffee bed", 75, 10),
        new BrewStep(StepType.WAIT, "Let the coffee de-gas", 0, 20),
        new BrewStep(StepType.POUR, "Pour in concentric circles", 225, 30),
        new BrewStep(StepType.POUR, "Pour in center a little slower", 200, 30),
        new BrewStep(StepType.STIR, "Stir 1x clockwise, 1x counter-clockwise", 0, 10),
        new BrewStep(StepType.SPIN, "Spin once to flatten the bed", 0, 10),
        new BrewStep(StepType.WAIT, "Let the brew finish and draw down", 0, 64),
        new BrewStep(StepType.FINISHED, "Brew should be about done. Enjoy your coffee!", 0, 1)
    ];

    return new Brew(
        "James Hoffmann",
        "A delicious and balanced pour-over recipe created by " +
        "<a href=\"https://youtu.be/AI4ynXzkSQo\" target=\"_blank\" style = \"color: var(--accent);\">James Hoffmann</a>",
        30,
        500,
        "Fine",
        brewSteps);
}

const getChemexMethod = () => {

    let brewSteps = [
        new BrewStep(StepType.BLOOM, "Saturate the coffee bed", 110, 15),
        new BrewStep(StepType.STIR, "Stir the grounds, wet every particle", 0, 30), // 0:15 . 100
        new BrewStep(StepType.POUR, "Pour in heavily in circles", 200, 25), // 0:45 .300
        new BrewStep(StepType.WAIT, "Let the brew draw down", 0, 20), // 1:10
        new BrewStep(StepType.POUR, "Pour in center", 200, 20), // 1:30 . 500
        new BrewStep(StepType.WAIT, "Let the brew draw down", 0, 40), // 1:50
        new BrewStep(StepType.POUR, "Pour in center", 200, 20), // 2:30 .700
        new BrewStep(StepType.WAIT, "Let the brew draw down", 0, 40), // 2:50
        new BrewStep(StepType.POUR, "Pour in center", 150, 15), // 3:30 .850
        new BrewStep(StepType.POUR, "Pour in around edges", 50, 5), // 3:45 .900
        new BrewStep(StepType.WAIT, "Let the brew draw down and finish", 0, 120), // 5:45
        new BrewStep(StepType.FINISHED, "Brew should be about done. Enjoy your coffee!", 0, 1)
    ];

    return new Brew(
        "Dylan Siemens",
        "A clean and crisp brew made by " +
        "<a href=\"https://youtu.be/N3rwdIV4-MM\" target=\"_blank\" style = \"color: var(--accent);\">Dylan Siemens</a> from Onyx Coffee Labs",
        55,
        900,
        "Coarse",
        brewSteps);
}

const getFrenchPressMethod = () => {

    let brewSteps = [
        new BrewStep(StepType.POUR, "Make sure all the coffee is evenly saturated", 300, 25),
        new BrewStep(StepType.WAIT, "Let it extract", 0, 240),
        new BrewStep(StepType.STIR, "Stir the crust, don't over agitate", 0, 10),
        new BrewStep(StepType.SCOOP, "Scoop out coffee grounds from the top", 0, 20),
        new BrewStep(StepType.WAIT, "The longer you wait, the less sediment in your cup", 0, 60),
        new BrewStep(StepType.FINISHED, "Enjoy! ;)", 0, 1)
    ];

    return new Brew(
        "Chris Baca",
        "A thick, mouthfilling brew recipe made by " +
        "<a href=\"https://youtu.be/fl79p_P4nbo\" target=\"_blank\" style = \"color: var(--accent);\">Chris Baca</a> from Cat & Cloud Coffee Roasters",
        20,
        300,
        "Medium",
        brewSteps);
}

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
    }

    console.log(`Selected Type: ${method}\nMethod Name: ${selectedbrew.name}`);

    onScreenChange(true);
}