// 1. Select the "target" element
const button = document.querySelector('button#click-me')

// 2. Add an event listener to invoke a callback when a 'click' event occurs
button.addEventListener('click', () => {
  console.log('a click event occurred!')
});


// 2. Create an event handler callback, it will be invoked with the event object
const handleEvent = (event) => {
  console.log(`An event of type "${event.type}" occurred!`);
  console.log("It was triggered by:", event.target);
  console.log(event);
}
// 3. Register an event listener on the button
button.addEventListener('click', handleEvent);



// TODO:
// 1. add a 'mousemove' listener for the mouseArea to invoke changeToRandomColor
// 2. add a 'keydown' listener for the entire document to invoke changeToRandomColor

const changeToRandomColor = (event) => {
  // Generate a random color string
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`

  // event.target is the element that "triggered" the event
  event.target.style.backgroundColor = color;
}

document.querySelector("#mouse-area").addEventListener('mousemove', changeToRandomColor)
document.body.addEventListener('keydown', changeToRandomColor)