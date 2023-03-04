import { getProjects } from "../controllers/projectsController";
import { toggleBlackOverlay } from "./overlay";
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
    const blackOverlay = document.createElement("div");

    const emptyOption = document.createElement("option");
    emptyOption.textContent = "Please select a project";
    emptyOption.value = "";
    projectsSelect.appendChild(emptyOption);

    getProjects().forEach((project, index) => {
        const projectOption = document.createElement("option");
        projectOption.value = index;
        projectOption.textContent = project.name;
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

    form.classList.add("add-todo-form");
    formTitle.classList.add("form-title");
    descTxtArea.classList.add("add-todo-desc");
    addTodoBtn.setAttribute("id", "add-todo-submit");
    closeOverlayBtn.setAttribute("id", "close-add-todo");

    closeOverlayBtn.onclick = (e) => {
        e.target.parentElement.style.animationName = "add-todo-disappear";
        toggleBlackOverlay();
        setTimeout(() => {
            e.target.parentElement.remove();
        }, 900);
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
    return form;
};

addTodo();

export default addTodo;
