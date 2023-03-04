import { getProjects } from "../controllers/projectsController";
import { renderPage, renderHome } from "../controllers/Dom";
import project from "./project";

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

const toggleSidebar = () => document.querySelector(".sidebar").classList.toggle("closed");

const sidebar = () => {
    const sidebarContainer = document.createElement("div");
    const mainSectionContainer = document.createElement("div");
    const homeBtn = document.createElement("button");
    const todayBtn = document.createElement("button");
    const weekBtn = document.createElement("button");
    const projectsSectionContainer = document.createElement("div");
    const showProjectsBtn = document.createElement("button");
    const projectsContainer = document.createElement("div");

    sidebarContainer.classList.add("sidebar");
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

    todayBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        todayBtn.classList.add("active");
        document.querySelector(".page-container").remove();
        document.querySelector(".content").appendChild(renderPage("Today"));
    };

    weekBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        weekBtn.classList.add("active");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.querySelector(".content").appendChild(renderPage("Week"));
    };

    homeBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        homeBtn.classList.add("active");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.querySelector(".content").appendChild(renderHome());
    };

    showProjectsBtn.onclick = (e) => {
        const projectContainer = e.target.parentElement.children[1];
        if (e.target.classList.contains("open")) {
            e.target.classList.remove("open");
            Array.from(projectContainer.children).forEach((c) => c.remove());
        } else {
            e.target.classList.add("open");
            getProjects().forEach((projectObj, index) => {
                let projectBtn = project(projectObj);
                projectBtn.classList.add("sidebar-btn", "btn", "project-btn");
                projectBtn.setAttribute("data-index", index);
                if (projectObj.name === document.querySelector(".page-container")?.getAttribute("id")) projectBtn.classList.add("active");
                projectBtn.onclick = (e) => {
                    document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
                    e.currentTarget.classList.add("active");
                    document.body.style.backgroundColor = projectObj.color + "4F";
                    document.querySelector(".page-container").remove();
                    document.querySelector(".content").appendChild(renderPage(projectObj.name));
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

    sidebarContainer.appendChild(mainSectionContainer);
    sidebarContainer.appendChild(projectsSectionContainer);

    return sidebarContainer;
};

export default sidebar;
export { toggleSidebar };
