class UserDatabase {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    deleteUser(login) {
        this.users = this.users.filter(user => user.login !== login);
    }

    getUserByUsername(username) {
        return this.users.filter(user => user.username === username);
    }
}

class Role {
    getPermissions() {
        return [];
    }
}

class ModeratorRole extends Role {
    getPermissions() {
        return ["edit_users"];
    }
}

class AdminRole extends Role {
    getPermissions() {
        return ["edit_users", "delete_users"];
    }
}

class User {
    constructor(login, password, role = new Role()) {
        this.login = login;
        this.username = "user";
        this.password = password;
        this.role = role;
    }

    getPermissions() {
        return this.role.getPermissions();
    }
}

class Moderator {
    constructor(userDB) {
        this.userDB = userDB;
    }

    getUserByUsername(username) {
        return this.userDB.getUserByUsername(username);
    }
}

class Admin {
    constructor(userDB) {
        this.userDB = userDB;
    }

    deleteUser(login) {
        this.userDB.deleteUser(login);
    }
}

// Тестирование
const userDB = new UserDatabase();

