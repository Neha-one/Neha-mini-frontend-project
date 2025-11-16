console.log("Hello World")

// three types of nodes:- text node, comment node, element node.
//empty space used to call=text node
//comment=comment node
//element (h1, p , div)= element node

// window Object = it is browser's object not JS's object.
// window._____  = global object

window.console.log("Neha")
// or 
console.log("Neha")

// DOM:-when a page is loaded , the browser creates a Document object model of the page.

//                      CHILDRENS

//indexing of children start from 0
console.log(document.body.childNodes)       //NodeList(4) [text, div.container, text, script]

// console.log(document.body.childNodes[0])        //#text

// console.log(document.body.childNodes[1])       //<div class="container"></div> (and if we click on this it show all child of container)

// console.log(document.body.childNodes[1].childNodes)     //NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]


//if we add any comment in container box
// console.log(document.body.childNodes[1].childNodes)          // NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// console.log(document.body.firstElementChild.children[2])         // <div class="box">box3</div>

//other method:-
// cont=document.body.childNodes[1]

// console.log(cont)       //<div class="container"></div> (and if we click on this it show all child of container)

// console.log(cont.firstChild)    //#text


//and if we remove spaces between box1 and container so it shows;-
// console.log(cont.firstChild)        // <div class="box">box1</div>


// console.log(cont.lastChild)     //#text


//ONLY PRINT OF ELEMENTS:-
// console.log(cont.firstElementChild)    // <div class="box">box1</div>

// console.log(cont.lastElementChild)      // <div class="box">box5</div>

// //  WE CAN APPLY DIRECT OPERATION ON CHILD OF BODY OR CHILD OF CONT
// console.log(cont.firstElementChild.style.color="red")
// console.log(cont.lastElementChild.style.backgroundColor="yellow")



//                    PARENTS
// console.log(cont.lastElementChild.parentElement)       //<div class="container"></div>



//                      SUBLING NODES

// console.log(document.body.childNodes[1].children[3].nextElementSibling)     // <div class="box">box5</div>
// console.log(document.body.childNodes[1].children[3].previousElementSibling)     //<div class="box">box3</div>

//              TABLE:-
// console.log(document.body.children[1].rows)     //[tr, tr]
// console.log(document.body.children[1].caption)      //    <caption>Details</caption>



//          HAS CHILD PROPERTY:-
// console.log(document.body.children[0].firstElementChild.hasChildNodes())        //true
// console.log(document.body.children[0].children[3].hasChildNodes())        //false :-because we also remove text from that .



//parentNode → works for any type of parent (even document).

// parentElement → only works if the parent is an Element.

//typeof(document) :-object
//typeof(window) :-object


//              TAG-NAME:-
let firstEL=document.querySelector(".box");
console.log(firstEL.tagName);       //  DIV



//different between innertext and innerhtml
// innerText=pure text means only text from that tag .
// innerHtml = text with their tags.