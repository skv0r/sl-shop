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

