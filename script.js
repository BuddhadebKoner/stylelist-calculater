// Get the input element
const input = document.querySelector('input');

// Get all the calculator buttons
const buttons = document.querySelectorAll('.button');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    // Clear the input field if AC button is clicked
    if (buttonText === 'AC') {
      input.value = '';
    }
    // Evaluate the expression if = button is clicked
    else if (buttonText === '=') {
      try {
        const result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = 'Error';
      }
    }
    // Append the clicked button value to the input field
    else {
      input.value += buttonText;
    }
  });
});


// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Get the close icon element
  var closeIcon = document.getElementById("close-icon");

  // Add a click event listener to the close icon
  closeIcon.addEventListener("click", function() {
    // Redirect to another HTML file
    window.location.href = "blank.html";
  });
});
