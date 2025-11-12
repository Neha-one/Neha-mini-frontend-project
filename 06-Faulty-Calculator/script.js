/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times.
*/

let num1 = parseFloat(prompt("Enter your first number:"));
let num2 = parseFloat(prompt("Enter your second number:"));
let operator = prompt("Enter operator(+,-,*,/,**):");

let random = Math.random();

let result;

if (random < 1) {
    alert("😅 faulty calculation perfomed!");
    if (operator === "+") result = num1 - num2;
    else if (operator === "*") result = num1 + num2;
    else if (operator === "-") result = num1 / num2;
    else if (operator === "/") result = num1 ** num2;
    else alert("invalid operator!");

}
else {
    if (operator === "+") result = num1 + num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "/") result = num1 / num2;
    else alert("invalid operator!");
}

alert(result);

