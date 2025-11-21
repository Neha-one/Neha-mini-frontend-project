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
console.log(text);

        let a = await delay()
    }
}
getdata()
