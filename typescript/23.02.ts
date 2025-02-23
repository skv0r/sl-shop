interface User {
    readonly id: number;
    name: string;
}

let user : User = {
    id: 1,
    name: "Alice"
}
//user.id = 1

class Rider implements User {
    constructor (public name: string, public readonly id: number) {}
}

interface UserClass {
    id: number;
    name: string;
    email: string;
}

const updateUser = (userId: number, userUpdates: Partial<UserClass>) => {}

updateUser (1, { name: ""});
updateUser (2, { email: "bob", name: ""})

//readonly<>

type UserPreview = Pick<UserClass, "id" | "name">;

const userPreview : UserPreview = {
    id: 1,
    name: "Alice"
};

// Omit<UserClass, "email"> исключает поле из класса

type UserRoles = "admin" | "user" | "guest";

const userPermissions: Record<UserRoles, boolean> = {
    admin: true,
    user: false,
    guest: true
}

//decorators skip

/*
1️⃣ Дженерики и ограничения (extends, keyof)
📌 Задание:
Создай функцию mergeObjects<T, U>, которая объединяет два объекта только если у них есть общие ключи.
*/

function mergeObjects<T extends object, U extends object> (obj1: T, obj2: U) {
    const commonKeys: (keyof T & keyof U)[] = Object.keys(obj1).filter( key => key in obj2) as (keyof T & keyof U)[];
    return commonKeys;
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, city: "New York" };
const merged = mergeObjects(obj1, obj2);
console.log(merged);