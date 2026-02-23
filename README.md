# B13-A4-JobTracker

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:  
getElementById : returns The element of the passed id. it returns one element.
getElementsByClass : returns Elements of the passed class. it returns HTML Collection.
querySelector / querySelectorAll : takes the css-selector. querySelector selects only first element but querySelectorAll selects All matched eliments.

2. How do you create and insert a new element into the DOM? 

Ans:
// 1. pulling the body container:
const bodyContainer = document.getElementById('body-container');
// 2. creating div:
const newDiv = document.createElement('div');
div.innerHTML = ``
// 3. appending the div element to the body container;
bodyContainer.appendChild(newDiv);

3. What is Event Bubbling? And how does it work?

Ans:
Bubbling is triggering all event listener attached to the targeted event. It works from the targeted event to the last parent Node backward all the way up to document.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation is a technique that adds an event deligation in the parent instead of adding event each of the element. then we can see what element triggered the event.

in event delegation we don't have to use one event for one element. so it's the efficient way.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault() stops the browser's default behaviour for the event.
stopPropagation() stops the bubbling to the parentNode.
