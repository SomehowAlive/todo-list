import isThisWeek from "date-fns/isThisWeek";

let todos = {};
let count = 0;

const addTodo = (todo) => {
    todos[todo.project.name] ? todos[todo.project.name].push(todo) : (todos[todo.project.name] = [todo]);
    count++;
};

const getTodos = () => todos;

const getTodayTodos = () => {
    return Object.values(todos)
        .flat()
        .filter((project) => {
            let now = new Date();
            return (
                now.getFullYear() === project.date.getFullYear() &&
                now.getMonth() === project.date.getMonth() &&
                now.getDay() === project.date.getDay()
            );
        });
};

const getWeekTodos = () => {
    return Object.values(todos)
        .flat()
        .filter((project) => {
            return isThisWeek(project.date);
        });
};

const getCount = () => count;

const getTodosByProject = (projectName) => {
    return todos[projectName] || null;
};

const removeProjectTodos = (project) => {
    count -= todos[project.name].length;
    delete todos[project.name];
};

export { addTodo, getTodos, getTodosByProject, getTodayTodos, getWeekTodos, removeProjectTodos, getCount };
