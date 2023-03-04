import { getProjects } from "../controllers/projectsController";

const addProject = () => {
    const projectsNames = getProjects().map((project) => project.name);

    const form = document.createElement("form");
    const title = document.createElement("h1");
    const projectNameLabel = document.createElement("label");
    const projectNameInput = document.createElement("input");

    const projectColorLabel = document.createElement("label");
    const projectColorInput = document.createElement("input");

    title.textContent = "Add Project";
    projectNameLabel.textContent = "Name";
    projectColorLabel.textContent = "Color";

    projectNameLabel.setAttribute("for", "project-name");
    projectColorLabel.setAttribute("for", "project-color");

    projectNameInput.setAttribute("id", "project-name");
    projectColorInput.setAttribute("id", "project-color");

    projectNameInput.type = "text";
    projectColorInput.type = "color";

    form.classList.add("add-project-form", "fixed-center");
    projectNameInput.classList.add("project-name-input");
    projectColorInput.classList.add("project-color-input");

    projectNameInput.oninput = (e) => {
        if (projectsNames.includes(e.target.value)) e.target.classList.add("invalid");
        else e.target.classList.remove("invalid");
    };

    projectColorInput.oninput = (e) => console.log(e.target.value);

    const d = document.createElement("div");
    const d2 = document.createElement("div");
    d.appendChild(projectNameLabel);
    d.appendChild(projectNameInput);
    d2.appendChild(projectColorLabel);
    d2.appendChild(projectColorInput);
    form.appendChild(d);
    form.appendChild(d2);

    return form;
};

export default addProject;
