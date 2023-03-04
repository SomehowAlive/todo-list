import "./styles/index.css";
import Todo from "./modules/classes/Todo";
import Project from "./modules/classes/Project";
import * as projectsController from "./modules/controllers/projectsController";
import * as todosController from "./modules/controllers/todosController";
import { renderPage, addTodoBtn, openSidebarBtn, renderHome } from "./modules/controllers/Dom";
import sidebar from "./modules/components/sidebar";
import overlay from "./modules/components/overlay";

let workProject = new Project("work", "#DE21FA");
let uniProejct = new Project("uni", "#AFF464");
projectsController.addProject(workProject);
projectsController.addProject(uniProejct);
projectsController.addProject(new Project("web", "#11ffdd"));
projectsController.addProject(new Project("dev", "#CCB41B"));
projectsController.addProject(new Project("account", "#AACCBB"));
projectsController.addProject(new Project("gym", "#FF44BB"));
projectsController.addProject(new Project("creative", "#6644BB"));
projectsController.addProject(new Project("ffs", "#2306BB"));
todosController.addTodo(new Todo("Wake up at 07:00 AM", "", projectsController.getDefault(), new Date()));
todosController.addTodo(
    new Todo(
        "Finish Uni Work given",
        "the last due date is in the enxt tuesday so make sure you finish it very fast also the next exam will be next week",
        uniProejct,
        new Date()
    )
);
todosController.addTodo(new Todo("Beat Carlos.", "Carlos is a flipping piece of shit", uniProejct, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));
todosController.addTodo(new Todo("Work inside work project", "", workProject, new Date()));

document.body.appendChild(openSidebarBtn());
document.body.appendChild(sidebar());
document.body.appendChild(renderHome());
document.body.appendChild(addTodoBtn());
document.body.appendChild(overlay());
