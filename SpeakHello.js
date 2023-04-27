var speakWord = "Hello";
(function (window) {
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	};

	window.helloSpeaker = helloSpeaker;

})(window);