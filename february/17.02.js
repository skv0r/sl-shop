import { square } from "./for17.02.mjs"; 
import { getUserInfo } from "./userUtils.mjs";

const result = square(5);
console.log(result); 

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Eve", age: 25 }
];
console.log(getUserInfo(users[0]))

const numbers = [1,2,3,4,5]

function mediumAge(users) {
    return users.reduce((result, user) => result + (user.age) / users.length, 0);
}

console.log(mediumAge(users));

