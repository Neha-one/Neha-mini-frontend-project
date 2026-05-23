let num1=parseFloat(prompt("enter number 1"));
let num2=parseFloat(prompt("enter number 2"));

let operator=prompt("enter operator (+,-,*,/,**)")

let random=Math.random();

let result;

if(random<0.5){
  alert("faulty calculator perform")
  if(operator==='+') result = num1 - num2;
  else if(operator==='-') result = num1 / num2;
  else if(operator==='*') result = num1 + num2;
  else if(operator==='/') result = num1 ** num2;
else alert("invalid operator!")
}
else {
    alert("correct calculator perform")
  if(operator==='+') result = num1 + num2;
  else if(operator==='-') result = num1 - num2;
  else if(operator==='*') result = num1 * num2;
  else if(operator==='/') result = num1 / num2;
else alert("invalid operator!")
}
alert(result);
