// Get display element
const display = document.getElementById('display');

// Get all buttons
const buttons = document.querySelectorAll('.btn');

// Loop through buttons and add click events
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.id === 'clear') {
      // Clear the display
      display.value = '';
    } else if (button.id === 'delete') {
      // Delete last character
      display.value = display.value.slice(0, -1);
    } else if (button.id === 'equal') {
      // Calculate the result
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      // Append number or operator to display
      display.value += value;
    }
  });
});
