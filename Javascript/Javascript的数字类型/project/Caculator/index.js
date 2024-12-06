const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
function updateDisplay() {
  display.textContent = currentInput;
}

function handleButtonClick(event) {
  const value = event.target.textContent;

  if (value === 'C') {
    currentInput = '';
  } else if (value === '=') {
    try {
      currentInput = eval(currentInput).toString();
    } catch (error) {
      currentInput = 'Error';
    }
  } else {
    currentInput += value;
  }

  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});
