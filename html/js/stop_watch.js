"use strict";
class StopWatch {

    constructor() {

        var timerDisplay = document.getElementById("timerDisplay"),
            ms = 0,
            hs = 0,
            s = 0,
            m = 0,
            interval;

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
            this.isRunning = false;
            this.totalSeconds = 0;
        }


        function update() {
            ms++;
            this.totalSeconds++;

            if (ms == 10) {
                ms = 0;
                hs++;
            }
            if (hs == 10) {
                hs = 0;
                s++;
            }
            if (s == 60) {
                s = 0;
                m++;
            }

            timerDisplay.innerHTML = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + hs
        }

        this.toggle = toggle;
        this.reset = reset;
        this.isRunning = false;
        this.totalSeconds = 0;
    }
}
