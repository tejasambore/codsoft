# Basic Calculator

This is a simple web-based calculator built with HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations like addition, subtraction, multiplication, and division. It features an interactive interface with a display screen and buttons aligned using the CSS grid system.

## Project Features

- Addition, subtraction, multiplication, and division operations.
- Display screen to show the current input and result.
- Clear (`C`) and delete (`DEL`) functions to manage input.
- `=` button to calculate the result of the entered expression.
- Responsive button layout using CSS grid for clean and easy alignment.

## Project Structure

- **HTML** (`index.html`): Defines the structure of the calculator, including the display and buttons.
- **CSS** (`styles.css`): Styles the calculator layout, buttons, and display screen using CSS grid and basic styling techniques.
- **JavaScript** (`script.js`): Implements the calculator's functionality with event listeners and operations logic.

## Getting Started

To run this project locally:

1. Clone or download this repository.
2. Open the `index.html` file in a web browser.

### Prerequisites

No additional libraries or frameworks are required. The project is built using vanilla HTML, CSS, and JavaScript.

## How to Use

1. **Enter Numbers**: Click on the number buttons to enter digits.
2. **Enter Operators**: Use `+`, `-`, `×`, and `÷` buttons for arithmetic operations.
3. **Calculate Result**: Click `=` to evaluate the expression.
4. **Clear Display**: Click `C` to reset the display.
5. **Delete Last Entry**: Click `DEL` to delete the last character entered.

## Code Explanation

- **HTML** defines the layout of the calculator, including the display and buttons.
- **CSS** styles the calculator interface, using a grid layout for button alignment.
- **JavaScript** handles the calculations:
  - `appendNumber(number)`: Adds a number or decimal to the input.
  - `appendOperator(operator)`: Adds an operator if valid.
  - `clearDisplay()`: Clears the input.
  - `deleteLast()`: Deletes the last character from the input.
  - `calculate()`: Evaluates the current input and displays the result.

## Screenshots

![Calculator Screenshot](screenshot.png)

## Future Improvements

- Add keyboard support for easier input.
- Implement additional functions like square root, power, and percentage.
- Improve error handling for invalid inputs.

## License

This project is open-source and free to use for educational purposes.
