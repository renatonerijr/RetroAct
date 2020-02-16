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

function axesMoved(b){
    if ( b !== 0 ){
        return true
    }
    return false
}

function gamepadLoop() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

    var gp = gamepads[0];

    for ( let button in gp.buttons ) {

        if(buttonPressed(gp.buttons[button])){
            console.log("Button Pressed: " + button)
        }
    }

    for ( let axes in gp.axes ){
        if(axesMoved(gp.axes[axes])){
            console.log("Axis " + axes + " value: " + gp.axes[axes])
        }
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
