console.log(Math.floor(3.4));   //3
console.log(Math.ceil(3.1));    //4

console.log("Script.js initializing")

//          method 01:-

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children


function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
};

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()

});

//          method 02:-
let boxes2 = document.querySelector(".container2").children;
//function is just for making random color -
function randomkcolor() {
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);
    return `rgb(${r1},${g1},${b1})`
}

// Array.from(boxes2).forEach(e => {
//     e.style.color = randomkcolor()
//     e.style.backgroundColor = randomkcolor()
// });

// //OR

for (let box of boxes2) {
    box.style.color = randomkcolor()
    box.style.backgroundColor = randomkcolor()
};