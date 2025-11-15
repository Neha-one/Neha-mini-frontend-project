//                  Business Name Generator : Using Object.

let obj1 = {
    1: "Amazing",
    2: "Crazy",
    3: "Fire"
}

let obj2 = {
    1: "Garments",
    2: "Foods",
    3: "Engine"
}

let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}


// // var rand1 = Math.floor(Math.random())
// // var rand = Math.floor(Math.random())
// // var rand3 = Math.floor(Math.random())
// Math.random() generates a number between 0(inclusive) and 1(exclusive).
//  So its value is always less than 1.
//  When you apply Math.floor(...), it always becomes 0.

var rand1 = Math.floor(Math.random() * 2) + 1;
var rand2 = Math.floor(Math.random() * 2) + 1;
var rand3 = Math.floor(Math.random() * 2) + 1;

console.log(obj1[rand1] + " " + obj2[rand2] + " " + obj3[rand3])


