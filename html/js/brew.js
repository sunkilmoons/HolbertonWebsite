"use strict";

const StepType = {
    BLOOM: { value: 1, name: "Bloom", icon: "local_florist" },
    POUR: { value: 2, name: "Pour", icon: "invert_colors" }, // opacity
    WAIT: { value: 3, name: "Wait", icon: "watch_later" },
    STIR: { value: 4, name: "Stir", icon: "replay" },
    SPIN: { value: 5, name: "Spin", icon: "360" },
    SCOOP: { value: 6, name: "Scoop", icon: "rowing" },
    FINISHED: { value: 7, name: "Finished", icon: "check" }
}

Object.freeze(StepType);

class BrewStep {
    constructor(type = null, description = "", pourAmt = 0, duration = 0) {
        this.type = type;
        this.description = description;
        this.pourAmt = pourAmt;
        this.duration = duration;
    }
}

class Brew {
    constructor(name = "", description = "", coffeeAmt = 0, waterAmt = 0, grindSize = "", steps = null) {
        this.name = name;
        this.description = description;
        this.coffeeAmt = coffeeAmt;
        this.waterAmt = waterAmt;
        this.grindSize = grindSize;
        this.steps = steps;
    }
}