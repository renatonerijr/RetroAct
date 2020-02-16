var start;
var interval;

if (!('ongamepadconnected' in window)) {
    // No gamepad events available, poll instead.
    interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    for (var i = 0; i < gamepads.length; i++) {
        var gp = gamepads[i];
        if (gp) {
          gamepadLoop();
          clearInterval(interval);
        }
    }
}

function buttonPressed(b) {


    if (typeof(b) === "object") {
        return b.pressed;
    }
    return b === 1.0;
}

function gamepadLoop() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

    var gp = gamepads[0];

    if (!gamepads || !gp) {
        return;
    }

    if (buttonPressed(gp.buttons[0])) {
        console.log('Button Pressed')
    }

    if (buttonPressed(gp.buttons[1])) {
        console.log('Button Pressed 2')
    }

    if (buttonPressed(gp.buttons[2])) {
        console.log('Button Pressed 3')
    }

    if (buttonPressed(gp.buttons[3])) {
        console.log('Button Pressed 4')
    }

    start = window.requestAnimationFrame(gamepadLoop);
}

window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
  gamepadLoop();
});

window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Waiting for gamepad.");
  window.cancelAnimationFrame(start);
});
