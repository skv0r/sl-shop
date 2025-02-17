var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length;i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            } 
        }
    }
    return [];
};

function factorial(n) {
    return (n===1) ? 1 : n*factorial(n-1); 
}

console.log(factorial(5)); // 5040

function makeCounter(start){
    let count = start;
    return {
        decrease: function(){
            return count--;
        },
        increase: function(){
            return count++;
        },
        reset: function(){
            return start;
        }
    }
    
}

const counter = makeCounter(10);
console.log(counter.increase()); // 11
console.log(counter.increase()); // 12
console.log(counter.decrease()); // 11
console.log(counter.reset());    // 10

const calculator = {
    result: 0,
    sum(a,b) {
        return a+b;
    },
    mul(a,b) {
        return a*b;
    }
}

function cacheCalc (func) {
    let cache = new Map();

    return function(...args) {
        let key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("Берем из кеша:", key);
            return cache.get(key);
        }
        
        let result = func(...args);
        cache.set(key, result);

        return result;
    }
}

calculator.sum = cacheCalc(calculator.sum);
console.log(calculator.sum(1,2)); 
console.log(calculator.sum(1,2));
console.log(calculator.sum(3,2));

`
Напиши класс User, у которого есть приватное поле _password, хранимое в WeakMap. Реализуй методы setPassword(newPassword) и checkPassword(password), которые позволяют изменять и проверять пароль.
`

class User {
    constructor(name, password) {
        this.name = name;
        this._password = password;
    }

    get password () {
        return this._password;
    }

    set password (value) {
        if (value.length < 6) {
            console.log("Ошибка: Пароль слишком короткий!");
            return;
        }
        this._password = value;
    }

    newPassword(value) {
        this.password = value;
    }

    checkPassword(value) {
        return this._password === value;
    }

}

let user = new User("123", "mySecretPassword");
console.log(user.checkPassword("mySecretPassword"))

let users =  new Map();

function addUser(name, age) {
    if (!users.has(name)) {
        users.set(name, age);
    } else {
        console.log("Пользователь с таким именем уже существует.");
    }
}
function deleteUser(name) {    
    if (users.delete(name)) {
        console.log("Пользователь с таким именем удален.");
    } else {
        console.log("Пользователь с таким именем нет.");
    }
}
function getAverageAge() {
    let sum = 0;
    let count = 0;
    users.forEach((age) => {
        sum+=age;
        count++;
    })
    return count > 0 ? sum/count : 0;
 }

addUser ("Alice", 30);
addUser ("Bob", 25);
addUser ("Alice", 28); // Попытка добавить пользователя с уже существующим именем

console.log(users); // Выводим всех пользователей

const activeUsers = new WeakSet();

function login(user) {
    activeUsers.add(user);
}
function checkActive(user) { 
    return (activeUsers.has(user))
 }

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

login(user1);
console.log(checkActive(user1)); // true
console.log(checkActive(user2)); // false


