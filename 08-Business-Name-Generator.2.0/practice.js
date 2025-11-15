//                  Business Name Generator : Using conditional statments(if else if)
let first, second, third;

//generate first word:-
let random = Math.random()
if (random < 0.33) {
    first = "Amazing"
}
else if (random < 0.66 && random > 0.33) {
    first = "Crazy"
}
else {
    first = "Fire"
}
//generate second word:-
random = Math.random()
if (random < 0.33) {
    second = "Engine"
}
else if (random < 0.66 && random > 0.33) {
    second = "Foods"
}
else {
    second = "Garments"
}
random = Math.random()
if (random < 0.33) {
    third = "Bros"
}
else if (random < 0.66 && random > 0.33) {
    third = "Limited"
}
else {
    third = "Hub"
}
console.log(`${first} ${second} ${third}`)


//just try to see what happend if i do this but it will not working like question said :- but nice try , keep it up!
// let random = Math.random();
// let first, second, third;
// if (random < 0.33) {
//     (first = "Amazing", second = "Engine", third = "Bros")
// }
// else if (random < 0.66 && random > 0.33) {
//     (first = "Crazy", second = "Foods", third = "Limited")
// }
// else {
//     (first = "Fire", second = "Garments", third = "Hub")
// }
// console.log(`${first}  ${second}  ${third}`);
