async function delay() {
    let time = Math.floor(1 + Math.random() * 7) * 1000;
    return new Promise(resolve => setTimeout(resolve, time))
}
const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];
async function getdata() {
    for (const text of messages) {
        //simple:-
        // document.body.innerHTML += `<p>${text}</p>`;

        //apply style direct in js:-
        // document.body.innerHTML += `<p style="background-color:green; color:lightgreen; font-family:monospace; font-size:19px; padding:22px ">${text}</p>`;
        // document.body.style.backgroundColor = "green";

        //apply style using class/id:-
        document.body.innerHTML += `<p class="terminal">${text}</p>`;

        let a = await delay()
    }
}
getdata()
