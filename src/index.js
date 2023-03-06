import "./styles/index.css";
import Todo from "./modules/classes/Todo";
import Project from "./modules/classes/Project";
import * as projectsController from "./modules/controllers/projectsController";
import * as todosController from "./modules/controllers/todosController";
import { renderPage, addTodoBtn, renderHome } from "./modules/controllers/Dom";
import sidebar from "./modules/components/sidebar";
import overlay from "./modules/components/overlay";
import header from "./modules/components/header";

document.body.appendChild(overlay());
document.body.appendChild(header());
const content = document.createElement("div");
content.classList.add("content");
content.appendChild(sidebar());
content.appendChild(renderHome());
document.body.appendChild(content);
document.body.appendChild(addTodoBtn());
