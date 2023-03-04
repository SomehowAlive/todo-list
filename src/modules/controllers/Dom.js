import { getTodayTodos, getWeekTodos, getTodosByProject } from "./todosController";
const renderTodo = (todo) => {
    const todoContainer = document.createElement("li");
    const doneBtn = document.createElement("button");
    const titleNdate = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoDesc = document.createElement("p");
    const todoProject = document.createElement("p");
    const todoDate = document.createElement("p");
    const showMoreBtn = document.createElement("div");

    todoContainer.classList.add("todo-card");
    todoContainer.setAttribute("data-id", todo.id);
    doneBtn.classList.add("markDoneBtn");
    titleNdate.classList.add("todo-title-date-cont");
    todoTitle.classList.add("todo-title");
    todoDesc.classList.add("todo-description");
    todoProject.classList.add("todo-project");
    todoDate.classList.add("todo-date");
    showMoreBtn.classList.add("todo-show-more");

    todoProject.style.color = todo.project.color;
    todoDate.style.color = todo.project.color;

    todoTitle.textContent = todo.title;
    todoDesc.textContent = todo.description;
    todoProject.textContent = todo.project.name;
    todoDate.textContent = todo.date.toUTCString().split(" ").slice(0, 4);

    todoContainer.style.setProperty("--bg", todo.project.color);

    todoContainer.onclick = function (e) {
        if (e.target.className.includes("markDoneBtn")) {
            if (e.target.classList.contains("done")) {
                e.target.classList.remove("done");
                e.target.parentElement.classList.remove("done");
            } else {
                e.target.classList.add("done");
                e.target.parentElement.classList.add("done");
            }
        } else {
            const todoCard = this;
            const todoDescription = this.children[1].children[2];
            const doneBtn = this.children[3];
            if (!this.classList.contains("open")) {
                todoDescription.style.animation = "desc-appear .4s ease both";
                todoDescription.classList.add("show");
                todoCard.style.maxHeight = todoCard.clientHeight + todoCard.children[1].children[2].clientHeight + 40 + "px";
                this.classList.add("open");
                doneBtn.classList.add("open");
            } else {
                todoDescription.style.animation = "desc-disappear .2s ease both";
                this.classList.remove("open");
                doneBtn.classList.remove("open");
                todoCard.style.maxHeight = todoCard.clientHeight - todoCard.children[1].children[2].clientHeight - 20 + "px";
                setTimeout(() => {
                    todoDescription.classList.remove("show");
                }, 200);
            }
        }
    };

    titleNdate.appendChild(todoTitle);
    titleNdate.appendChild(todoDate);
    titleNdate.appendChild(todoDesc);

    todoContainer.appendChild(doneBtn);
    todoContainer.appendChild(titleNdate);
    todoContainer.appendChild(todoProject);
    todoContainer.appendChild(showMoreBtn);

    todoContainer.style.animationDelay = `${todo.id / 10}s`;

    return todoContainer;
};

const renderProject = (project) => {
    const projectCont = document.createElement("button");
    const projectCircle = document.createElement("div");
    const projectName = document.createElement("p");

    projectCont.classList.add("project-cont");
    projectCircle.classList.add("project-circle");
    projectName.classList.add("project-name");

    projectCont.style.borderColor = project.color;
    projectCircle.style.backgroundColor = project.color;
    projectName.textContent = project.name;

    projectCont.appendChild(projectCircle);
    projectCont.appendChild(projectName);

    projectCont.setAttribute("project-name", project.name);

    projectCont.style.setProperty("--bg-color", project.color + "4F");

    return projectCont;
};

const addTodoBtn = () => {
    const btn = document.createElement("button");
    btn.classList.add("add-todo-btn", "btn");
    btn.onclick = () => console.log("clicked");
    btn.textContent = "+";

    return btn;
};

const renderHome = () => {};
const renderPage = (pageName) => {
    const pageContainer = document.createElement("div");
    const openSidebarBtn = document.createElement("button");
    const pageTitle = document.createElement("h1");
    const todoList = document.createElement("ul");

    pageContainer.classList.add("page-container");
    openSidebarBtn.classList.add("toggle-sidebar-btn");
    pageTitle.classList.add("page-title");
    todoList.classList.add("todo-list");

    pageContainer.setAttribute("id", pageName);
    pageTitle.textContent = pageName;

    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.appendChild(document.createElement("div"));

    openSidebarBtn.onclick = () => document.querySelector(".sidebar").classList.remove("closed");

    let todosToDisplay = null;
    if (pageName === "Today") todosToDisplay = getTodayTodos();
    else if (pageName === "Week") todosToDisplay = getWeekTodos();
    else todosToDisplay = getTodosByProject(pageName);

    pageContainer.appendChild(openSidebarBtn);
    pageContainer.appendChild(pageTitle);

    if (!todosToDisplay) {
        let t = document.createElement("p");
        t.classList.add("info-text");
        t.innerText = "No todos Found in " + pageName;
        todoList.appendChild(t);
    } else {
        todosToDisplay.forEach((todo) => {
            todoList.appendChild(renderTodo(todo));
        });
    }

    pageContainer.appendChild(todoList);
    return pageContainer;
};

export { renderTodo, renderProject, renderPage, addTodoBtn };
