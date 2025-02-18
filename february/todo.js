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

let task1 = new Task("wash face")
console.log(task1)
task1.changeCompletedStatus()
console.log(task1)
task1.changeCompletedStatus()
console.log(task1.getCreateTime())

class TaskManager {
    constructor () {

    }

    addTask() {

    }

    removeTask() {

    }

    getTask() {

    }
}

class TaskView {
    displayTasks() {

    }
}


class TaskController {
    constructor(taskManager, taskView) {
        this.TaskManager = taskManager;
        this.TaskView = taskView;
    }

    addTask() {

    }

    removeTask() {

    }

    toggleTaskCompletion() {

    }

}
