document.addEventListener("DOMContentLoaded", function () {
  // Select the target container for the typewriter effect
  const container = document.getElementById("typewriter-container");

  // Initialize the Typewriter instance for the first sequence
  const firstTypewriter = new Typewriter(container, {
    loop: false, // Disable looping for the first sequence
    delay: 75,   // Typing speed in milliseconds
  });

  // Define the first sequence with the 6-second pause
  firstTypewriter
    .pauseFor(6000)  // Pause for 6 seconds before starting
    .typeString("a developer.")
    .pauseFor(1500)
    .deleteChars(10)
    .typeString("designer.")
    .pauseFor(1500)
    .deleteChars(10)
    .typeString(" problem solver.")
    .pauseFor(1500)
    .start()
    .callFunction(() => {
      // Trigger the looping sequence after the first sequence finishes
      startLoopingSequence();
    });

  // Function to start the looping sequence
  function startLoopingSequence() {
    const loopTypewriter = new Typewriter(container, {
      loop: true, // Enable looping for this sequence
      delay: 75,  // Typing speed in milliseconds
    });

    // Define the looping sequence (without the 6-second pause)
    loopTypewriter
      .typeString("a developer.")
      .pauseFor(1500)
      .deleteChars(10)
      .typeString("designer.")
      .pauseFor(1500)
      .deleteChars(10)
      .typeString(" problem solver.")
      .pauseFor(1500)
      .start();  // Start the looped animation
  }
});


var b = document.body;

var imgurl = "images/images/fairydust/fairydust blue.png";

var size = [20, 30];

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getSize() {
    return rand(size[0], size[1]);
}

function lerp(a, b, f) {
    return (b - a) * f + a;
}

function heart(x, y) {
    var s = getSize();
    x -= s / 2;
    y -= s / 2;
    x = Math.floor(x) + rand(-5, 5);
    y = Math.floor(y) + rand(-5, 5);
    var fx = x + rand(-40, 40);
    var fy = y + rand(-40, 40);
    var i = document.createElement("img");
    i.src = imgurl;
    i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; opacity: 1; z-index: 1000000;`;
    b.appendChild(i);
    var f = 0;
    var interval;
    interval = setInterval(function() {
        var _x = Math.floor(lerp(x, fx, f));
        var _y = Math.floor(lerp(y, fy, f));
        i.style.left = `${_x}px`;
        i.style.top = `${_y}px`;
        i.style.opacity = 1 - f;
        f += 0.01;
        if(f > 1) {
            clearInterval(interval);
            b.removeChild(i);
        }
    }, 10);
}

function bro(x, y) {
    for (var i = 0; i < 5; i++) {
        heart(x, y);
    }
}

b.addEventListener("click", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    bro(x, y);
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}


var showFurryFriend = false;
function showFurryFriendToggle() {
  showFurryFriend = !showFurryFriend;
  if (showFurryFriend) {
    document.getElementById("furry-friend").style.display = "block";
  } else {
    document.getElementById("furry-friend").style.display = "none";
  }
}
