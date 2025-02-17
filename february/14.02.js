function formatString(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str.slice(0, 20) + "...";
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



function printUserInfo(user) {
    for (let key in user) {
        console.log(`${key}: ${user[key]}`)
    }
}

function getCoords(obj) {
    return [parseInt(obj.x, 10), parseInt(obj.y, 10)]
}

function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

console.log(formatDate(new Date())); // "14 февраля 2025"



let tempArray = [1, 2, 3, 3, 2, 1, 5]
let tempSet = new Set(tempArray);
console.log(tempSet);
let sql = new Map();
sql.set("Maxim", "19");
console.log(sql);

let user = {
    name: "Иван",
    age: 25,
    city: "Москва"
}

printUserInfo(user);
let obj = {
    x: 10,
    y: 20
}
console.log(getCoords(obj))
console.log(formatString("javascript это крутвфывыфвфвфыв")); // Javascript это кру…
console.log(randomInRange(10, 17)); // любое число от 1 до 10