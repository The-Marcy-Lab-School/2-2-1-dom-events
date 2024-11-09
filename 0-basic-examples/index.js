// Select the "target" of the event
const button = document.querySelector('button');

// Create an event handler callback, it will be invoked with the event object
const handleEvent = (event) => {
  console.log(`an event of type "${event.type}" occurred!`);
}
// Register an event listener on the button
button.addEventListener('click', handleEvent);
button.addEventListener('mouseover', handleEvent);

// TODO:
// add a 'mousemove' handler for the mouseArea
// add a 'keydown' handler for the entire document
