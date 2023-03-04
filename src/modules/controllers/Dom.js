import { getTodayTodos, getWeekTodos, getTodosByProject } from "./todosController";
import todo from "../components/todo";
import addTodo from "../components/addTodo";
import { toggleBlackOverlay } from "../components/overlay";
import { toggleSidebar } from "../components/sidebar";
import homeCard from "../components/homeCard";

const addTodoBtn = () => {
    const btn = document.createElement("button");
    btn.classList.add("add-todo-btn", "btn");
    btn.onclick = () => document.body.appendChild(addTodo()) && toggleBlackOverlay();
    btn.textContent = "+";
    return btn;
};

const openSidebarBtn = () => {
    const openSidebarBtn = document.createElement("button");
    openSidebarBtn.classList.add("toggle-sidebar-btn");
    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.onclick = () => toggleSidebar();
    return openSidebarBtn;
};

const renderHome = () => {
    const renderHomeCards = () => {
        const todosCreated = homeCard("Tasks Created", 0, "#7B00DB");
        const todosCompleted = homeCard("Tasks Completed", 0, "#81FF46");
        const todosNotCompleted = homeCard("Tasks non completed", 0, "#DB0000");
        const completionPercentage = homeCard("Completion rate", "0%", "#0FC5FF");
        return [todosCreated, todosCompleted, todosNotCompleted, completionPercentage];
    };
    const pageContainer = document.createElement("div");
    const homeTitle = document.createElement("h1");
    const greeting = document.createElement("h2");
    const homeCardsContainer = document.createElement("div");

    pageContainer.classList.add("page-container", "home");
    homeTitle.classList.add("page-title");
    greeting.classList.add("home-greeting");
    homeCardsContainer.classList.add("home-cards-container");

    homeTitle.textContent = "Home";
    greeting.textContent = "Welcome beautiful Human";
    renderHomeCards().forEach((homeCard) => homeCardsContainer.appendChild(homeCard));
    pageContainer.appendChild(homeTitle);
    pageContainer.appendChild(greeting);
    pageContainer.appendChild(homeCardsContainer);
    return pageContainer;
};

const renderPage = (pageName) => {
    const pageContainer = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const todoList = document.createElement("ul");

    pageContainer.classList.add("page-container");
    pageTitle.classList.add("page-title");
    todoList.classList.add("todo-list");

    pageContainer.setAttribute("id", pageName);
    pageTitle.textContent = pageName;

    let todosToDisplay = null;
    if (pageName === "Today") todosToDisplay = getTodayTodos();
    else if (pageName === "Week") todosToDisplay = getWeekTodos();
    else todosToDisplay = getTodosByProject(pageName);

    pageContainer.appendChild(pageTitle);

    if (!todosToDisplay) {
        let t = document.createElement("p");
        t.classList.add("info-text");
        t.innerText = "No todos Found in " + pageName;
        todoList.appendChild(t);
    } else {
        todosToDisplay.forEach((todoObj, i) => {
            const newTodo = todo(todoObj);
            newTodo.style.animationDelay = `${i / 10}s`;
            todoList.appendChild(newTodo);
        });
    }

    pageContainer.appendChild(todoList);
    return pageContainer;
};

export { renderPage, renderHome, addTodoBtn, openSidebarBtn };
