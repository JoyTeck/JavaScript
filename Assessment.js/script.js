// Question 1 : Create functions that takes two numbers and an operator as input and perform different operations on the number

function calculate(x, y, operator) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (y !== 0) {
        return x / y;
      } else {
        return "Error: Division by zero";
      }
    case "%":
      return x % y;
    default:
      return "Error: Invalid operator";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 5, "%")); // 0

//Question 2 : Create a single function that takes an array of numbers and operators as input, and perform the operations in chronological
