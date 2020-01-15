"use strict";

var isThumbnailLarge = false;

document.addEventListener("DOMContentLoaded", function (event) {
    setUpThumbNail();

});

function setUpThumbNail() {

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function () {
        if (!isThumbnailLarge) {
            thumbnailElement.className = "";
            isThumbnailLarge = true;
        }
        else {
            thumbnailElement.className = "small";
            isThumbnailLarge = false;
        }
    });
}
