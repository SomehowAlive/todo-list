import { getProject, getProjects } from "../controllers/projectsController";
import { addTodo as addTodoBackend } from "../controllers/todosController";
import { toggleBlackOverlay } from "./overlay";
import Todo from "../classes/Todo";

const closeAddTodo = () => {
    document.querySelector(".add-todo-form").style.animationName = "add-todo-disappear";
    toggleBlackOverlay();
    setTimeout(() => {
        document.querySelector(".add-todo-form")?.remove();
    }, 900);
};

const addTodo = () => {
    const form = document.createElement("form");
    const formTitle = document.createElement("p");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const d = document.createElement("div");
    const descLabel = document.createElement("label");
    const descTxtArea = document.createElement("textarea");
    const d2 = document.createElement("div");
    const projectLabel = document.createElement("label");
    const projectsSelect = document.createElement("select");
    const d3 = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const d4 = document.createElement("div");
    const addTodoBtn = document.createElement("button");
    const closeOverlayBtn = document.createElement("button");
    const infoContainer = document.createElement("div");

    const emptyOption = document.createElement("option");
    emptyOption.textContent = "Please select a project";
    emptyOption.value = "";
    projectsSelect.appendChild(emptyOption);

    getProjects().forEach((project, index) => {
        const projectOption = document.createElement("option");
        projectOption.value = index;
        projectOption.textContent = project.name;
        if (document.querySelector(".page-container")?.getAttribute("id") === project.name) projectOption.selected = true;
        projectsSelect.appendChild(projectOption);
    });

    formTitle.textContent = "Add new Task";
    titleLabel.textContent = "Title";
    descLabel.textContent = "Description";
    projectLabel.textContent = "Project";
    dateLabel.textContent = "Date";
    addTodoBtn.textContent = "Submit";
    closeOverlayBtn.textContent = "X";

    titleInput.placeholder = "enter todo title here";

    titleInput.type = "text";
    descTxtArea.rows = 4;
    dateInput.type = "date";
    addTodoBtn.type = "submit";
    closeOverlayBtn.type = "button";

    form.classList.add("add-todo-form", "fixed-center");
    formTitle.classList.add("form-title");
    descTxtArea.classList.add("add-todo-desc");
    addTodoBtn.setAttribute("id", "add-todo-submit");
    closeOverlayBtn.setAttribute("id", "close-add-todo");
    infoContainer.classList.add("info-container");

    closeOverlayBtn.onclick = closeAddTodo;

    form.onsubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const title = titleInput.value.trim();
        const desc = descTxtArea.value.trim();
        const project = projectsSelect.value;
        const date = dateInput.value;
        if (title && desc && project && date) {
            const newTodo = new Todo(title, desc, getProject(project), new Date(date));
            addTodoBackend(newTodo);
            closeAddTodo();
        }
    };

    d.appendChild(titleLabel);
    d.appendChild(titleInput);

    d2.appendChild(descLabel);
    d2.appendChild(descTxtArea);

    d3.appendChild(projectLabel);
    d3.appendChild(projectsSelect);

    d4.appendChild(dateLabel);
    d4.appendChild(dateInput);

    form.appendChild(formTitle);
    form.appendChild(d);
    form.appendChild(d2);
    form.appendChild(d3);
    form.appendChild(d4);
    form.appendChild(addTodoBtn);
    form.appendChild(closeOverlayBtn);
    form.appendChild(infoContainer);
    return form;
};

addTodo();

export default addTodo;
