const display = document.querySelector("input");

const btns = document.querySelectorAll(".butn");

const AC = document.querySelector(".CLEAR");
const DC = document.querySelector(".Delete");

const equal = document.querySelector("#Equal");

for (let btn of btns) {
    btn.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        display.value += value;
    })
}

AC.addEventListener('click', function () {
    display.value = "";
})

DC.addEventListener('click', function () {
    display.value = display.value.toString().slice(0, -1);
})

equal.addEventListener('click', function (e) {
    if (display.value === "") {
        display.value = "Please Enter";
    }
    else {
        let answer = eval(display.value);
        display.value = answer;
    }
})

