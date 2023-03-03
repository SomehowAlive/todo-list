export default class Todo {
    static cpt = 0;
    constructor(title, description, project, date) {
        this.id = ++Todo.cpt;
        this.title = title;
        this.description = description;
        this.project = project;
        this.date = date;
        this.done = false;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setProject(newProject) {
        this.project = newProject;
    }

    setDate(newDate) {
        this.date = newDate;
    }

    setPriority(newPriority) {
        this.priority = newPriority;
    }

    markDone() {
        this.done = true;
    }

    markUndone() {
        this.done = false;
    }
}
