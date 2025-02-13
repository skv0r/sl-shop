/* 
Ты разрабатываешь упрощённую банковскую систему. В этой системе клиент может:
Создать аккаунт с именем, возрастом и начальным балансом.
Пополнять баланс.
Снимать деньги, но не больше, чем есть на счёте.
Проверять баланс.
Конвертировать валюту (RUB → USD или EUR).
Обрабатывать ввод пользователя, чтобы не было ошибок.
*/
const USD = 90;
const EUR = 100;

let greeting = prompt("Создать аккаунт в нашем банке?", "Нет");
switch (greeting) {
    case "Да": {
        UseBank();
        break;
    }
    default: {
        break
    }
}

function UseBank() {
    let user_name = prompt("Введите ваше имя:", "Имя не введено");
    let user_age = Number(prompt("Введите ваш возраст:", undefined));
    if (user_age < 18) {
        alert("До 18 лет доступ заблокирован");
        return
    };
    let user_balance = Number(prompt("Введите сумму первого взноса:", 0));
    
}

let Deposit = (value, balance) => {balance += value; return balance};
let Withdraw = (value, balance) => {
    if (value > balance) {
        alert("Баланс не может быть отрицателен. Операция отклонена.")
    } else {balance -= value} return balance
}
function CheckBalance(balance) {
    alert(`Ваш баланс = ${balance}`)
}

function Convert(balance) {
    money_type = prompt("Выберите валюту для перевода:")
    switch (money_type) {
        case "USD":
            balance /= USD;
            break
        case "EUR":
            balance /= EUR;
            break
    }
}