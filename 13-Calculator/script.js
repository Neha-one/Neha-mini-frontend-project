let entVal = document.querySelector(".inputb");

let delt = document.querySelector(".del");
delt.addEventListener("click", () => {
    entVal.value = entVal.value.slice(0, -1);
});

let clearAll = document.querySelector(".ac");
clearAll.addEventListener("click", () => {
    entVal.value = "";
});

let a = null;
let reOpe = null;
let b = null;

let Num = document.querySelectorAll(".num")
for (let n of Num) {
    n.addEventListener("click", () => {
        entVal.value += n.innerText;
        if (reOpe === null) {
            a = Number(entVal.value);
        }
        else {
            b = Number(entVal.value);
        };
    });
};

let operator = document.querySelectorAll(".ope");
for (let oper of operator) {
    oper.addEventListener("click", () => {
        reOpe = oper.innerText;
        entVal.value = "";
    });
};

let clickchar = document.querySelector(".eql");
clickchar.addEventListener("click", () => {
    let result;
    if (reOpe === "+") result = a + b;
    if (reOpe === "-") result = a - b;
    if (reOpe === "*") result = a * b;
    if (reOpe === "/") result = a / b;

    entVal.value = result;
});
