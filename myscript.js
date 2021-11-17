let total = document.querySelector(".opvalue");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".clr");
let operation = document.querySelector(".operation");
let plus = document.querySelector(".plus");
let equals = document.querySelector(".equ");
let minus = document.querySelector(".minus");
let mul = document.querySelector(".mul");
let pod = document.querySelector(".pod");

clear.addEventListener("click", () => { remAll() });

const changer = (num) => {
    total.textContent += num;
}

const remAll = () => {
    total.textContent = "";
    leftnum = 0;
    rightnum = 0;
    operation.textContent = "";
}

const storeLeft = () => {
    leftnum = parseInt(total.textContent);
}

const storeRight = () => {
    rightnum = parseInt(total.textContent);
}

const addFunc = () => {
    storeLeft();
    operation.textContent = "+";
    total.textContent = "";
}

const equalFunc = () => {
    if (operation.textContent == "+") {
        storeRight();
        total.textContent = leftnum + rightnum;
        leftnum = rightnum;
    } else if (operation.textContent == "-") {
        storeRight();
        total.textContent = leftnum - rightnum;
        leftnum = rightnum;
    } else if (operation.textContent == "*") {
        storeRight();
        total.textContent = leftnum * rightnum;
        leftnum = rightnum;
    } else if (operation.textContent == "/") {
        storeRight();
        total.textContent = leftnum / rightnum;
        leftnum = rightnum;
    }
}

const minusFunc = () => {
    storeLeft();
    operation.textContent = "-";
    total.textContent = "";
}
const mulFunc = () => {
    storeLeft();
    operation.textContent = "*";
    total.textContent = "";
}
const divFunc = () => {
    storeLeft();
    operation.textContent = "/";
    total.textContent = "";
}

let leftnum, rightnum;

buttons.forEach(button => {
    button.addEventListener("click", () => { changer(button.textContent) });
})

let zer = document.querySelector(".zer").addEventListener("click", () => { changer(0) });

plus.addEventListener("click", () => { addFunc() });
equals.addEventListener("click", () => { equalFunc() });
pod.addEventListener("click", () => { divFunc() });
mul.addEventListener("click", () => { mulFunc() });
minus.addEventListener("click", () => { minusFunc() });


