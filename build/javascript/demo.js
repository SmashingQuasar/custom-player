"use strict";
window.addEventListener("load", function () {
    var CONTAINER = document.querySelector("figure[data-mvp=\"container\"]");
    if (CONTAINER === null) {
        throw new ReferenceError("MVP Demo: Impossible to find container.");
    }
    new MagnificientVideoPlayer({
        container: CONTAINER,
        videoPlayer: undefined,
        playButton: undefined,
        pauseButton: undefined,
        timeline: undefined,
        displayTime: true,
        timeContainer: undefined,
        displaySoundControls: true,
        muteButton: undefined,
        soundProgress: undefined
    });
});
