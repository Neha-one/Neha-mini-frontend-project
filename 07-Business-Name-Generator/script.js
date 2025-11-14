/* Create a business name generator by combining list of adjectives and stop name and another word

Adjectives:
Crazy
Amazing 
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros 
Limited
Hub
*/

const adj = "Crazy Amazing Fire";
const shopname = "Engine Foods Garments";
const Anoword = "Bros Limited Hub";

const adjlist = adj.split(" ");
const shopnamelist = shopname.split(" ");
const anwordlist = Anoword.split(" ");

function rand(list) {
    return list[Math.floor(Math.random() * list.length)];
}
console.log(rand(adjlist) + " " + rand(shopnamelist) + " " + rand(anwordlist));
