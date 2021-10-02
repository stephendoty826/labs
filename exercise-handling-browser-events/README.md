# Handling Browser Events - Exercise Starter Code

This repo is divided into folders. Following the instructions on the learning portal, complete each exercise in their given folders.

## Small

### Button Click Alert

Create a button that displays and alert with the text "Button Pressed" when clicked.

### Show Mouse Position

Create a button that displays an alert with the X and Y coordinates of the mouse when clicked.

- Hint: You will need to access the `event` object and access the `screenX` and `screenY` properties

### Add a scroll event

Add an event to log "You scrolled the page" to the console when a user scrolls the page. The following code is how you would add a 'resize' event. You can use this as a prompt to start the 'scroll' event.

> **Bonus**: See how many times the console message displays? You may also want to research a 'debounce' function. Running an event handler every time the page scrolls can be a memory intensive procedure and a 'debounce' function will help with that.

``` js
<script>
    window.addEventListener('resize', () => {
        console.log('You Change the size of the Window!')
    })
</script>
```

## Medium

### Shopping List

Create a Shopping List using Event Listeners and DOM elements

- Use input elements enter in new items for shopping list.
  - Add a button to submit inputs and render the input values to the DOM.
- Add a button to the DOM for each new item in shopping list that can be used to remove the item.


### MadLib

A Mad Libs is a word game where one player prompts others for a list of words to substitute for blanks in a story before reading the paragraph.

- Look at the example story in the HTML and open it in the browser
- Notice that the story is hidden in the browser but the HTML is still in the document
- Add more inputs for each of the placeholder elements
- Use an event listener on the form to do the following:
  - Replace the contents of the placeholders with the inputs from the form
  - Show the Story
  - Hide the form
  - Make sure you replace all the words. The same word may be used twice in the story!
- Once the story shows, add an event listener to the reset button to do the following:
  - Hide the Story
  - Show the Form
  - Clear out the form inputs

> **Bonus**: Refactor! Are you repeating any code? Can you use functions to make the code less repetitive?


## Large

### Calculator

Using the following parameters and starter code to create a calculator.

- Add click handlers to the number buttons
  - Create an array of the numbers clicked, in order
- Add click handlers to the calculation buttons
  - Create an array of the operators
  - Don't let a user start with an operator
  - Don't let a user type multiple operators (i.e. you can't type '--' or '++' or "*+")
- Add click handler to the 'equals' button
  - The 'equals' button needs to trigger a few events (NOTE: These will be functions)
  - Loop through the array of numbers (NOTE: These are currently strings)
  - Convert the strings to integers
  - Write a new array of integers
  - Get an array of the operators
  - Perform each math operation (NOTE: We'll use 4 while loops)
- Add click handler clearing the input on press of clear
