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


let users = [
    {"id": 1, "name": "Gena", "age": 25},
    {"id": 2, "name": "Bob", "age": 30},
    {"id": 3, "name": "Charlie", "age": 35}
];
function fetchUserData(id) {
    return new Promise(function(resolve, reject) {
            setTimeout(() => {
                let user = users.find(user => user.id === id);
                if (user) {
                    resolve(user)
                } else {
                    reject(new Error("Пользователь не найден"));
                }
            }, 1000)
    })
}

fetchUserData(1)
    .then( user => console.log(user.age))
    .catch( error => error(error.message));

fetchUserData(4)
    .then( user => console.log(user.age))
    .catch( error => console.error(error.message));

let posts = [
    {
      "id": 1,
      "title": "How to pass a variable in JSON object while giving HTTP post request",
      "link": "https://stackoverflow.com/questions/52325727/how-to-pass-a-variable-in-json-object-while-giving-http-post-request-in-python",
      "description": "I am trying to pass a JSON object to one of my URLs which accepts the JSON data."
    },
    {
      "id": 2,
      "title": "How to store a JSON in a variable and use it in the request body?",
      "link": "https://community.postman.com/t/how-to-store-a-json-in-a-variable-and-use-it-in-the-request-body/1881",
      "description": "To pass the JSON data into a consecutive request just put the following as raw data: {{savedData}}."
    },
    {
      "id": 3,
      "title": "Creating and sending a JSON Object for POST HTTP Request",
      "link": "https://community.webcore.co/t/creating-and-sending-a-json-object-for-post-http-request/1788",
      "description": "Use GET rather than POST and create a string variable called request."
    }
  ]
async function getPostComments(postId) {
    return new Promise(function(resolve, reject) {
        let post = posts.find(post => post.id === postId);
        setTimeout(() => resolve(post ? post.description : reject(new Error("Пост не найден"))), 1500);
    })}
async function fetchDescription(postId) {
    try {
        let description = await getPostComments(postId);
        console.log(description);
    }
    catch (err) {
        console.error(err.message);
    }
}

fetchDescription(1)