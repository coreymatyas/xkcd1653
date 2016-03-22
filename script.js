var currentState = "";
var unusedStates = [];
var attemptedStates = [];
var correct = 0;

function nextState() {
	currentState = unusedStates[
		Math.floor(Math.random() * unusedStates.length)];
	render();
}

function check(e) {
	var clickedState = e.target.getAttribute("name");
	if (currentState !== undefined) {
		attemptedStates.push(currentState);
		unusedStates.splice(unusedStates.indexOf(currentState), 1);
		if (clickedState == currentState) {
			correct++;
			document.getElementById("result-correct").className = "result result-show";
			setTimeout(function() {
				document.getElementById("result-correct").className = "result";
			}, 800);
		} else {
			document.getElementById("result-failure").className = "result result-show";
			setTimeout(function() {
				document.getElementById("result-failure").className = "result";
			}, 800);
		}
		nextState();
	}
}

function render() {
	if (currentState !== undefined) { 
		document.getElementById("state").innerHTML = currentState;
	} else {
		document.getElementById("prompt").innerHTML = "Final Score:";
	}
	document.getElementById("correct").innerHTML = correct;
}

(function() {
	for (var i = 0; i < Object.keys(STATES).length; i++) {
		unusedStates.push(Object.keys(STATES)[i]);
	}

	var areas = document.querySelectorAll("area");
	for (var i = 0; i < areas.length; i++) {
		areas[i].addEventListener('click', check);
	}

	nextState();
})();
