import "./styles/index.css";
import Todo from "./modules/classes/Todo";
import Project from "./modules/classes/Project";
import * as projectsController from "./modules/controllers/projectsController";
import * as todosController from "./modules/controllers/todosController";
import { renderTodo } from "./modules/controllers/DomController";

let workProject = new Project("work", "#DE21FA");
let uniProejct = new Project("uni", "#AFF464");
projectsController.addProject(workProject);
projectsController.addProject(uniProejct);
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

let todaysTodo = todosController.getTodayTodos();
todaysTodo.forEach((todo) => {
    document.body.appendChild(renderTodo(todo));
});
