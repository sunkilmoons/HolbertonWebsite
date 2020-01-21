"use strict";

const StepType = {
    BLOOM: { value: 1, name: "Bloom", img: "" },
    POUR: { value: 2, name: "Pour", img: "" },
    WAIT: { value: 3, name: "Wait", img: "" },
    STIR: { value: 4, name: "Stir", img: "" },
    SPIN: { value: 5, name: "Spin", img: "" },
    FINISHED: { value: 6, name: "Finished", img: "" }
}

Object.freeze(StepType);

class BrewStep {
    constructor(type, description, pourAmt, duration) {
        this.type = type;
        this.description = description;
        this.pourAmt = pourAmt;
        this.duration = duration;

        this.currentPour = 0;
        this.timeLeft = duration;
    }
}

class Brew {

    constructor(name, description, coffeeAmt, waterAmt, grindSize, steps) {
        this.name = name;
        this.description = description;
        this.coffeeAmt = coffeeAmt;
        this.waterAmt = waterAmt;
        this.grindSize = grindSize;
        this.steps = steps;
    }
}