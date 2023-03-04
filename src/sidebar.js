import { getProjects } from "./modules/controllers/projectsController";
import { renderPage, renderProject } from "./modules/controllers/Dom";

const addProjectBtn = () => {
    const addProject = document.createElement("button");
    const addProjectCircle = document.createElement("div");
    addProjectCircle.classList.add("add-project-circle");
    addProjectCircle.textContent = "+";
    addProject.appendChild(addProjectCircle);
    const txt = document.createElement("p");
    txt.textContent = "Add new";

    addProject.appendChild(addProjectCircle);
    addProject.appendChild(txt);
    addProject.classList.add("project-cont", "sidebar-btn", "add-new-project-btn");
    return addProject;
};

const sidebar = () => {
    const sidebarContainer = document.createElement("div");
    const toggleSidebarBtn = document.createElement("button");
    const mainSectionContainer = document.createElement("div");
    const homeBtn = document.createElement("button");
    const todayBtn = document.createElement("button");
    const weekBtn = document.createElement("button");
    const projectsSectionContainer = document.createElement("div");
    const showProjectsBtn = document.createElement("button");
    const projectsContainer = document.createElement("div");

    sidebarContainer.classList.add("sidebar");
    toggleSidebarBtn.classList.add("toggle-sidebar-btn");
    mainSectionContainer.classList.add("main-section-container");
    homeBtn.classList.add("sidebar-btn");
    todayBtn.classList.add("sidebar-btn");
    weekBtn.classList.add("sidebar-btn");

    homeBtn.setAttribute("id", "home-btn");
    todayBtn.setAttribute("id", "today-btn");
    weekBtn.setAttribute("id", "week-btn");
    projectsSectionContainer.classList.add("projects-section-container");
    showProjectsBtn.classList.add("show-projects-btn", "sidebar-btn");
    projectsContainer.classList.add("projects-container");

    homeBtn.textContent = "Home";
    todayBtn.textContent = "Today";
    weekBtn.textContent = "Week";
    showProjectsBtn.textContent = "Projects";

    toggleSidebarBtn.appendChild(document.createElement("div"));
    toggleSidebarBtn.appendChild(document.createElement("div"));
    toggleSidebarBtn.appendChild(document.createElement("div"));

    todayBtn.onclick = () => {
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.body.appendChild(renderPage("Today"));
    };

    weekBtn.onclick = () => {
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.body.appendChild(renderPage("Week"));
    };

    toggleSidebarBtn.onclick = (e) => {
        e.target.parentElement.classList.toggle("closed");
    };

    showProjectsBtn.onclick = (e) => {
        const projectContainer = e.target.parentElement.children[1];
        if (e.target.classList.contains("open")) {
            e.target.classList.remove("open");
            Array.from(projectContainer.children).forEach((c) => c.remove());
        } else {
            e.target.classList.add("open");
            getProjects().forEach((project) => {
                let projectBtn = renderProject(project);
                projectBtn.classList.add("sidebar-btn", "btn", "project-btn");
                projectBtn.onclick = () => {
                    document.body.style.backgroundColor = project.color + "3F";
                    document.querySelector(".page-container").remove();
                    document.body.appendChild(renderPage(project.name));
                };
                projectContainer.appendChild(projectBtn);
            });
            projectContainer.appendChild(addProjectBtn());
        }
    };

    mainSectionContainer.appendChild(homeBtn);
    mainSectionContainer.appendChild(todayBtn);
    mainSectionContainer.appendChild(weekBtn);

    projectsSectionContainer.appendChild(showProjectsBtn);
    projectsSectionContainer.appendChild(projectsContainer);

    sidebarContainer.appendChild(toggleSidebarBtn);
    sidebarContainer.appendChild(mainSectionContainer);
    sidebarContainer.appendChild(projectsSectionContainer);

    return sidebarContainer;
};

export default sidebar;
