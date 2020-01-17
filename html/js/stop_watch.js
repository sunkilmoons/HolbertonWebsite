"use strict";
class StopWatch {

    constructor() {

        var timerDisplay = document.getElementById("timerDisplay"),
            clock = 0,
            ms = 0,
            s = 0,
            m = 0,
            interval;

        function start() {
            if (!interval) {
                interval = setInterval(update, 10);
            }
        }

        function stop() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }

        function reset() {
            clock = 0;
            ms = 0;
            s = 0;
            m = 0;
            timerDisplay.innerHTML = "00:00:00"
        }


        function update() {
            clock++;

            if (clock == 10) {
                clock = 0;
                ms++;
            }
            if (ms == 10) {
                ms = 0;
                s++;
            }
            if (s == 60) {
                s = 0;
                m++;
            }

            timerDisplay.innerHTML = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + ms
        }

        this.start = start;
        this.stop = stop;
        this.reset = reset;
    }
}
