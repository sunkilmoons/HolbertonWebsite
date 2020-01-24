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
        brewSteps
    );
}