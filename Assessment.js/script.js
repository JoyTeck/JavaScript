// Question 1 : Create functions that takes two numbers and an operator as input and perform different operations on the number

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Division by zero";
      }
    case "%":
      return num1 % num2;
    default:
      return "Error: Invalid operator";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 5, "%")); // 0

//Question 2
