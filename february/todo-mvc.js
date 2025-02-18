class Task{

    #name

    constructor(name, description = "Нет описания") {
        this.#name = name;
        this.description = description;
        this.isCompleted = false;
        this.completedDate = null;
        this.createdAt = new Date();
    }

    get name() {
        return this.#name; 
    }

    set name(text) {
        if (text.length < 5) {
            return console.log("Слишком короткое имя, 5 символов минимум");
        } else {
            this.#name = text;
        }
    }

    changeCompletedStatus() {
        this.isCompleted = !this.isCompleted;

        if (this.isCompleted) {
            this.completedDate = new Date();
        } else {
            this.completedDate = null;
        }
    }

    getCreateTime() {
        return this.createdAt; 
    }
} 

class TaskManager {
    constructor (task) {
        this.tasks = [];
    }

    addTask(name, descr) {
        const task = new Task(name, descr);
        this.tasks.push(task);
    }

    removeTask(taskName) {
        this.tasks = this.tasks.filter(task => task.name !== taskName);
    }

    getTasks() {
        return this.tasks;
    }
}

class TaskView {
    displayTasks(tasks) {
        tasks.forEach(task => {
            console.log(`Задача: ${task.name}, Описание: ${task.description}, Завершена: ${task.isCompleted}`);
        });
    }
}


class TaskController {
    constructor(taskManager, taskView) {
        this.taskManager = taskManager;
        this.taskView = taskView;
    }

    addTask(name, descr) {
        this.taskManager.addTask(name, descr);
    }

    removeTask(name) {
        this.taskManager.removeTask(name)
    }

    toggleTaskCompletion(name) {
        const task = this.taskManager.getTasks().find(task => task.name == name);
        if (task) {
            task.changeCompletedStatus();
            this.updateView();
        }
    }

    updateView() {
        this.taskView.displayTasks(this.taskManager.getTasks())
    }
}


const taskManager = new TaskManager();
const taskView = new TaskView();
const taskController = new TaskController(taskManager, taskView);

// Добавление задач
taskController.addTask("Сделать домашку", "Математика и физика");
taskController.addTask("Купить продукты", "Молоко, хлеб, яйца");

// Завершение задачи
taskController.toggleTaskCompletion("Сделать домашку");

// Удаление задачи
taskController.removeTask("Купить продукты");