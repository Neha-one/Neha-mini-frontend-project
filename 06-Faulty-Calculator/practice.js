// let num1 = parseFloat(prompt("Enter your first number:"));
// let num2 = parseFloat(prompt("Enter your second number:"));

// let operator = prompt("Enter your operator(+,-,*,/)");

// let random = Math.random();
// let result;

// if (random > 0.1) {
//     alert("faulty calculation perfomed!")
//     if (operator === "+") result = num1 - num2;
//     else if (operator === "-") result = num1 / num2;
//     else if (operator === "*") result = num1 + num2;
//     else if (operator === "/") result = num1 ** num2;
//     else alert('invalid operator!');
// }

// else {
//     if (operator === "+") result = num1 + num2;
//     else if (operator === "-") result = num1 - num2;
//     else if (operator === "*") result = num1 * num2;
//     else if (operator === "/") result = num1 / num2;
// }

// alert(result);

// //         PRACTICE:---


let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt('Enter operator:');

let random = Math.random();

if (random < 1) {
    alert("faulty calculation occur:")
    if (operator === "+") result = num1 - num2;
    else if (operator === "-") result = num1 + num2;
    else alert("invalid operator")
}
else {
    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else alert("invalid operator");
}
alert(result);