const todo = (todo) => {
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
            const todoTitle = this.children[1].children[0];
            const doneBtn = this.children[3];
            if (!this.classList.contains("open")) {
                todoDescription.style.animation = "desc-appear .4s ease both";
                todoDescription.classList.add("show");
                todoCard.style.maxHeight = todoCard.clientHeight + todoCard.children[1].children[2].clientHeight + 40 + "px";
                todoTitle.classList.add("maximized");
                this.classList.add("open");
                doneBtn.classList.add("open");
            } else {
                todoDescription.style.animation = "desc-disappear .2s ease both";
                this.classList.remove("open");
                doneBtn.classList.remove("open");
                todoTitle.classList.remove("maximized");

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

    return todoContainer;
};

export default todo;
