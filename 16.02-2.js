function safeParseJSON(json) {
    try {
        let obj = JSON.parse(json);
        if (!obj.name) {
            throw new ValidationError("Поле name не найдено:")
        }

        return obj;
    }

    catch (err) {
        if (err instanceof SyntaxError) {
            console.log(`Проблема ${err.name} JSON: ` + err.message)
        } else if (err instanceof ValidationError) {
            console.log(`Ошибка валидации: ${err.message}`);
        } else {
            console.log(`Неизвестная ошибка: ${err.message}`);
        }
        return null;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

console.log(safeParseJSON('{"name":"Alice"}')); // { name: "Alice" }
console.log(safeParseJSON('{name:"Alice"}'));

function fetchUserData(id) {
    return new Promise(function(resolve, reject) {
        console.log("Doing...")
        setTimeout(() => resolve("Success"), 2000);
        setTimeout(() => reject(new Error("Упс...")), 1000);
    })


}
let promise = new fetchUserData(1);
promise.then(
    result => console.log(result),
    error => console.log(error)
)