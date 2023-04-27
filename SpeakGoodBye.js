var speakWord = "Good Bye";
(function (window) {
    var speakWord = "Goob Bye";
    var byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    };

    window.byeSpeaker= byeSpeaker;

})(window);