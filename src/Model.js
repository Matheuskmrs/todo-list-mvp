
export class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ id: Date.now(), text: task, completed: false });
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    toggleTaskStatus(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }

    getTasks() {
        return this.tasks;
    }
}
