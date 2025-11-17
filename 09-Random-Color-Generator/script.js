// //          apply any one random color and backgroundcolor to anyone box.
let boxes1 = document.body.children[0].getElementsByClassName("box1")
// let boxes = document.getElementsByTagName("div")
num = Math.floor(Math.random() * 5) + 1
boxes1[num].style.backgroundColor = "yellow"
boxes1[num].style.color = "red"



// //              it apply same color and background on number of boxes, i don't know. 
// let boxes2 = document.getElementsByTagName("div")
let boxes2 = document.body.children[1].getElementsByClassName("box2")

for (let element of boxes2) {
    num = Math.floor(Math.random() * 4) + 1
    let element = boxes2[num]
    element.style.backgroundColor = "yellow"
    element.style.color = "blue"

}


// //              it apply defferent type of color and backgroundcolor on defferent boxes.
let boxes3 = document.getElementsByClassName("box3");
for (let box of boxes3) {
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);
    box.style.color = `rgb(${r1},${g1},${b1})`

    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${r2},${g2},${b2})`
}



//             //  this apply same color and backgroundcolor on eachbox.but it changes itself after every refresh.
let boxes4 = document.getElementsByClassName("box4");
let r1 = Math.floor(Math.random() * 256);
let g1 = Math.floor(Math.random() * 256);
let b1 = Math.floor(Math.random() * 256);
let textcolor = `rgb(${r1},${g1},${b1})`

let r2 = Math.floor(Math.random() * 256);
let g2 = Math.floor(Math.random() * 256);
let b2 = Math.floor(Math.random() * 256);
let bgColor = `rgb(${r2},${g2},${b2})`

for (let box of boxes4) {
    box.style.color = textcolor
    box.style.backgroundColor = bgColor
}