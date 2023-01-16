// На сторінці є дві кнопки. - переадресовується на інший сайт(за раніше введеним посиланням).
// Реалізувати перевірку на http / https.Якщо протокол не вказаний - додаємо

const form = document.getElementById("form");
const button = document.getElementById("submit");

const form1 = document.getElementById("form1");
const button1 = document.getElementById("submit1");


form.addEventListener("click", (e) => {
    e.preventDefault();
});
button.addEventListener("click", () => {
    const http = document.getElementById("http").value;
    console.log(check(http));
});



form1.addEventListener("click", (e) => {
    e.preventDefault();
});
button1.addEventListener("click", () => {

    const http1 = document.getElementById("http1").value;
    console.log(check(http1));
});


function check(i) {

    let result;
    if (i.indexOf("http://") === 0 || i.indexOf("https://") === 0) {
        return i
    } else {
        return result = `https://${i}`;
    };
};