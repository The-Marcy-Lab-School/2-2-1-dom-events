const STEP_DISTANCE = 20;

//////////////////////////
// DOM Helper Functions //
//////////////////////////

const moveTurtle = (turtle, x, y) => {
  turtle.x = x;
  turtle.y = y;
  turtle.element.style.left = `${x}px`;
  turtle.element.style.top = `${y}px`;
};

const rotateTurtle = (turtle, angle) => {
  turtle.rotation = angle;
  turtle.element.style.transform = `rotate(${turtle.rotation}deg)`;
}

/* 
keydown (and other keyboard) events have an event.key property
which is a string representing the key that was pressed.
*/
const handleKeyDown = (event, turtle) => {
  // console.log(event);
  let { x, y } = turtle;
  let rotation;

  if (event.key === 'ArrowLeft') {
    x -= STEP_DISTANCE;
    rotation = 180;
  }
  if (event.key === 'ArrowUp') {
    y -= STEP_DISTANCE;
    rotation = 270;
  }
  if (event.key === 'ArrowRight') {
    x += STEP_DISTANCE;
    rotation = 0;
  }
  if (event.key === 'ArrowDown') {
    y += STEP_DISTANCE;
    rotation = 90;
  }

  rotateTurtle(turtle, rotation);
  moveTurtle(turtle, x, y);
};

/////////////////
// Main Runner //
/////////////////

const main = () => {
  const turtle = {
    element: document.querySelector("#turtle"),
    x: 0,
    y: 0,
    rotation: 0,
  }

  // initialize the turtles position
  moveTurtle(turtle, document.body.clientWidth / 2, document.body.clientHeight / 2);

  // To pass additional values to our event handler, we can make an inline arrow 
  // function that passes along the event and additional arguments to our handler.
  document.body.addEventListener('keydown', (e) => handleKeyDown(e, turtle));
}

main();