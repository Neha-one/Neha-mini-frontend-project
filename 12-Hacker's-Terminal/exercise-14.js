
// const messages = [
//     "Initializing Hacking",
//     "Reading your Files",
//     "Password files Detected",
//     "Sending all passwords and personal files to server",
//     "Cleaning up"
// ];

// async function randomdelay() {
//     const time = Math.floor(1 + Math.random() * 2) * 1000;
//     return new Promise(resolve => {
//         setTimeout(resolve, time);
//     })
// }
// async function getdata() {

//     const terminal = document.getElementById("terminal");
//     for (const text of messages) {

//         let boxdiv = document.createElement("div");
//         boxdiv.className = "box";

//         let msgdiv = document.createElement("div");
//         msgdiv.className = "msg";

//         let dotsspan = document.createElement("span");
//         dotsspan.className = "dots"

//         terminal.append(boxdiv);

//         boxdiv.append(msgdiv, dotsspan);

//         msgdiv.textContent = text;

//         await randomdelay();

//         dotsspan.classList.add("done");

//     }
//     const doneMsg = document.createElement("div");
//     doneMsg.textContent = "Hacking Complete!";
//     terminal.appendChild(doneMsg);

// }
// getdata()


//          OR:-


// async function deyal() {
//     let time = Math.floor(1 + Math.random() * 7) * 1000;
//     return new Promise(resolve => setTimeout(resolve, time));
// }
// async function getdata() {
//     const messages = [
//         "Initializing Hacking",
//         "Reading your Files",
//         "Password files Detected",
//         "Sending all passwords and personal files to server",
//         "Cleaning up"
//     ];
//     const terminal = document.getElementById("terminal");
//     for (const text of messages) {
//         let boxdiv = document.createElement("div");
//         boxdiv.className = "box";
//         let msgdiv = document.createElement("div");
//         msgdiv.className = "msg";
//         let dotsspan = document.createElement("span");
//         dotsspan.className = "dots";
//         terminal.append(boxdiv);
//         boxdiv.append(msgdiv, dotsspan);
//         msgdiv.textContent = text;
//         await deyal()
//         dotsspan.classList.add("done");
//     }
// }
// getdata();