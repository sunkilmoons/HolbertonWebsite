"use strict";
class StopWatch {

    constructor(steps) {

        var timerDisplay = document.getElementById("timerDisplay"),
            ms = 0,
            hs = 0,
            s = 0,
            m = 0,
            interval,
            duration = 0,
            pourPerMilli = 0.1,
            currentPour = 0.0,
            totalPour = 0.0,
            currentStepIndex = 0;

        var stepTypeIcon_i = document.getElementById("step_type_icon"),
            stepType_figCap = document.getElementById("step_type"),
            stepCurrentPour_p = document.getElementById("step_current_pour"),
            stepPourAmount_p = document.getElementById("step_pour_amount"),
            duration_p = document.getElementById("duration"),
            totalPourAmount_p = document.getElementById("total_pour");

        startNewStep();

        function start() {
            interval = setInterval(update, 10);
        }

        function stop() {
            clearInterval(interval);
            interval = null;
        }

        function toggle() {
            if (!interval) {
                start();
                this.isRunning = true;
            } else {
                stop();
                this.isRunning = false;
            }
        }

        function reset() {
            stop();
            ms = 0;
            hs = 0;
            s = 0;
            m = 0;
            timerDisplay.innerHTML = "00:00:00"
            currentStepIndex = 0;
            totalPour = 0;
            startNewStep();
            this.isRunning = false;
        }


        function update() {
            ms++;

            if (ms == 10) {
                ms = 0;
                hs++;
            }
            if (hs == 10) {
                hs = 0;
                s++;
                if (duration > 0) duration--;
            }
            if (s == 60) {
                s = 0;
                m++;
            }

            timerDisplay.innerHTML = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + hs
            updateCurrentStep();
        }

        function updateCurrentStep() {

            if (duration === 0) {

                if (currentStepIndex < steps.length) {
                    currentStepIndex++;
                    startNewStep();
                }
            }

            currentPour += pourPerMilli;
            totalPour += pourPerMilli;

            totalPourAmount_p.innerHTML = totalPour.toFixed(1) + "g";
            stepCurrentPour_p.innerHTML = currentPour.toFixed(1) + "g";
            duration_p.innerHTML = secondsToTime(duration);
        }

        function startNewStep() {
            stepTypeIcon_i.innerHTML = steps[currentStepIndex].type.icon;
            stepType_figCap.innerHTML = steps[currentStepIndex].type.name;
            stepPourAmount_p.innerHTML = steps[currentStepIndex].pourAmt.toFixed(1) + "g";

            duration = steps[currentStepIndex].duration;

            pourPerMilli = steps[currentStepIndex].pourAmt / (duration * 100);
            currentPour = 0;

            totalPourAmount_p.innerHTML = totalPour.toFixed(1) + "g";
            stepCurrentPour_p.innerHTML = currentPour.toFixed(1) + "g";
            duration_p.innerHTML = secondsToTime(duration);
        }

        this.toggle = toggle;
        this.reset = reset;
        this.isRunning = false;
    }
}

function secondsToTime(seconds) {
    let min = Math.round(seconds / 60);
    let sec = seconds % 60;

    return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
}