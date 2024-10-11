
export class TaskPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.setAddTaskHandler(task => this.addTask(task));
        this.view.setDeleteTaskHandler(id => this.removeTask(id));
        this.view.setToggleTaskHandler(id => this.toggleTaskStatus(id));

        this.updateView();
    }

    addTask(taskText) {
        if (taskText) {
            this.model.addTask(taskText);
            this.updateView();
        }
    }

    removeTask(id) {
        this.model.removeTask(id);
        this.updateView();
    }

    toggleTaskStatus(id) {
        this.model.toggleTaskStatus(id);
        this.updateView();
    }

    updateView() {
        this.view.displayTasks(this.model.getTasks());
    }
}
