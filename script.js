// На сторінці є дві кнопки. - переадресовується на інший сайт(за раніше введеним посиланням).
// Реалізувати перевірку на http / https.Якщо протокол не вказаний - додаємо

const form = document.getElementById("form");
const button = document.getElementById("submit");

const form1 = document.getElementById("form1");
const button1 = document.getElementById("submit1");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const http = document.getElementById("http").value;
    console.log(check(http));
});

form.addEventListener("input", () => {
    if (http) {
        button.removeAttribute("disabled");
    };
});


button1.addEventListener("click", (e) => {
    e.preventDefault();

    const http1 = document.getElementById("http1").value;
    console.log(check(http1));
});

form1.addEventListener("input", () => {
    if (http1) {
        button1.removeAttribute("disabled");
    };
});

function check(i) {
    if (i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
        return i
    } else {
        return result = `https://${i}`;
    };
};