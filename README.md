### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
getElementById():This is use for selecting one specific element by its unique id. Because id should be only one in a webpage, so it always return single element. It is very fast and mostly people use it when they need one exact element quickly.

getElementsByClassName(): this is used when we want to select elements by class name. If many elements have same class, it will return all of them. It gives HTMLCollection, which is look like array but actually not real array. So some array method not work directly.

querySelector():It works with CSS selector. We can select by id, class, tag or any valid CSS selector. Even if there are many matching elements, it only return the first one. So it is good when we just need first matched element.

querySelectorAll(): also use CSS selector but difference is it return all matching elements. It gives NodeList which behave almost like array. If we want to loop through all matched elements, this one is better option.

### 2. How do you create and insert a new element into the DOM?
Ans:
First we create a new element by using document.createElement(). This just create the element but it not showing in the webpage that time. It only create inside memory, not in real page.
After that we can put some text or content inside it by using innerText or innerHTML. If we want we also can add class name or id for styling or other work.Then we need to insert it into the DOM. For that we select a parent element first. After selecting parent, we use appendChild() or append() to add the new element inside it. When we do this step, then the element finally appear in the webpage.
So simple process is like — first create, then modify, then insert. If we not insert it, it will never show in the page.


### 3. What is Event Bubbling? And how does it work?
Ans:
Event Bubbling is a process where event start from the target element and then go upward to its parent elements. Like if we click a button which is inside a div, first the button event will run, then the div event, then body, then document. So the event move from child to parent step by step.
This is default behavior in JavaScript. We don’t need to do anything special for bubbling, it happen automatically. If we don’t want it, then we can stop it by using stopPropagation().



### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation means instead of adding event listener to every child element, we add event listener to the parent element. Because of event bubbling, parent can catch the event from child. For example, if we have many li inside a ul, we don’t need to add click event in every li. We  just add one event in ul and check which li is clicked.
It is useful because it reduce code, improve performance, and also if new element added later, we don’t need to add event again. It automatically work for new elements also.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() is used to stop the default browser action. Like if we submit a form, normally page reload happen. If we use preventDefault(), then the form will not reload the page.
stopPropagation() is used to stop event bubbling. That means event will not go to parent element.
So difference is —
preventDefault() stop browser default behavior.
stopPropagation() stop event from moving upward.






