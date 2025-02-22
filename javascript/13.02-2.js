class Task {
    constructor(title){
        this.id = Symbol();
        this.title = title;
        this.status = "не выполнена";
    }

    toggleStatus(){
        this.status = this.status === "не выполнена" ? "выполнена": "не выполнена";
    }

    toString() {
        return `Задача: ${this.title}`;
    }

    valueOf() {
        return this.status === "выполнена" ? 1 : 0;
    }
}

class TaskManager {
    constructor() {
        this._tasks = [];
    }

    get tasks (){
        return this._tasks;
    }

    set tasks (newTasks){
        if (Array.isArray(newTasks)) {
            this._tasks = newTasks; 
        } else {
            console.log("Ошибка. Передайте массив задач!")
        }
    }

    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
        return task;
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);  
    }

    toggleTaskStatus(id) {
        const task = this.tasks.find(task => task.id === id)
        if (task) {
            task.toggleStatus();
        }
    }

    showTasks(){
        console.log("Список задач: ")
        this.tasks.forEach(task => {
            console.log(`${task.title} - ${task.status}`)
        })
    }
}

// Тестирование:
const manager = new TaskManager();
const task1 = manager.addTask("Сделать ДЗ");
const task2 = manager.addTask("Почитать книгу");

manager.showTasks(); // Выводим список задач

manager.toggleTaskStatus(task1.id); // Меняем статус первой задачи
manager.showTasks(); // Проверяем изменение

manager.removeTask(task2.id); // Удаляем вторую задачу
manager.showTasks(); // Проверяем удаление

const task = new Task("Выучить геттеры и сеттеры");
console.log(String(task)); // "Задача: Выучить геттеры и сеттеры"
console.log(Number(task)); // 0 (потому что "не выполнена")

task.toggleStatus();
console.log(Number(task)); // 1 (теперь выполнена)