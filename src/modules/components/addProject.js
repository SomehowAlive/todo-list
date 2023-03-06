import Project from "../classes/Project";
import { getProjects, addProject as addProjectBackend } from "../controllers/projectsController";
import { toggleBlackOverlay } from "../components/overlay";

const hideAddProject = () => {
    const form = document.querySelector(".add-project-form");
    if(form){
        form.classList.add("hidden");
        toggleBlackOverlay();
        setTimeout(() => {
            form.remove();
        }, 800);
    }
};

const addProject = () => {
    const projectsNames = getProjects().map((project) => project.name);

    const form = document.createElement("form");
    const title = document.createElement("h1");
    const projectNameLabel = document.createElement("label");
    const projectNameInput = document.createElement("input");

    const projectColorLabel = document.createElement("label");
    const projectColorInput = document.createElement("input");
    const submitBtn = document.createElement("button");
    const infoCont = document.createElement("div");

    const d = document.createElement("div");
    const d2 = document.createElement("div");

    title.textContent = "Add Project";
    projectNameLabel.textContent = "Name";
    projectColorLabel.textContent = "Color";
    submitBtn.textContent = "Add";

    projectNameLabel.setAttribute("for", "project-name");
    projectColorLabel.setAttribute("for", "project-color");

    projectNameInput.setAttribute("id", "project-name");
    projectColorInput.setAttribute("id", "project-color");

    projectNameInput.type = "text";
    projectColorInput.type = "color";
    submitBtn.type = "submit";

    projectNameInput.placeholder = "enter name of project";

    form.classList.add("add-project-form", "fixed-center");
    projectNameInput.classList.add("project-name-input");
    projectColorInput.classList.add("project-color-input");
    submitBtn.classList.add("add-project-submit", "btn");

    infoCont.classList.add("info-div");

    projectNameInput.oninput = (e) => {
        if (projectsNames.includes(e.target.value)) e.target.classList.add("invalid");
        else e.target.classList.remove("invalid");
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        const ProjectName = projectNameInput.value.trim();
        const ProjectColor = projectColorInput.value;
        if (ProjectName && ProjectColor && !projectNameInput.classList.contains("invalid")) {
            addProjectBackend(new Project(ProjectName, ProjectColor));
            form.classList.add("hidden");
            toggleBlackOverlay();
        } else if (ProjectName) {
            infoCont.textContent = "Project Name Already Exists ! ";
            infoCont.classList.add("error");
            setTimeout(() => {
                infoCont.textContent = "";
                infoCont.classList.remove("error");
            }, 3000);
        }
    };

    d.appendChild(projectNameLabel);
    d.appendChild(projectNameInput);
    d2.appendChild(projectColorLabel);
    d2.appendChild(projectColorInput);
    form.appendChild(d);
    form.appendChild(d2);
    form.appendChild(infoCont);
    form.appendChild(submitBtn);

    return form;
};

export default addProject;

export { hideAddProject };
