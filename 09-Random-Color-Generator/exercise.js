// Ques 01 Create a h2 element with text "hello js" . append "from neha" to this text using js.
let h2 = document.querySelector(".h2-heading");
console.log(h2.innerText);      //Hello js!
h2.innerText = h2.innerText + " Neha";
console.log(h2.innerText);      //Hello js! Neha
