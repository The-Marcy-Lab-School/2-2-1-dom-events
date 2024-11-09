///////////////////////
// Event Propogation //
///////////////////////

/* 
Event Propagation (a.k.a bubbling) is when an event
triggered by a child is detected by the parent.

Two values to be aware of:
- event.target (the Element that fired the event)
- event.currentTarget (the Element handling the event)

To prevent events from bubbling up, use `event.stopPropagation()`
*/
const testPropagation = (event) => {
  console.log(`Event triggered by: #${event.target.id} (event.target)`);
  console.log(`Handled by: #${event.currentTarget.id} (event.currentTarget)`);
}

document.querySelector('#outer').addEventListener('click', testPropagation);
// document.querySelector('#middle').addEventListener('click', testPropagation);
// document.querySelector('#inner').addEventListener('click', testPropagation);


//////////////////////
// Event Delegation //
//////////////////////

/* 
Event delegation refers to the process of using event 
propagation (bubbling) to handle events at a higher level 
in the DOM than the element on which the event originated

This means we can have a single event handler attached to
the parent and decide what to do based on the event.target
*/
const ul = document.querySelector('#picture-list');
const toggleBorder = (event) => {
  console.log(event.type + ' event detected on: ', event.target);
  console.log('event handled by: ', event.currentTarget);

  // Element.matches returns true if the given element would be selected by the given CSS selector
  // If the target of the event wasn't an image, we don't care about it
  if (!event.target.matches('img')) return;

  // toggle the highlight class (which will make the border red)
  event.target.closest('li').classList.toggle('highlight');

  event.stopPropagation()
}
ul.addEventListener('mouseover', toggleBorder);
ul.addEventListener('mouseout', toggleBorder);