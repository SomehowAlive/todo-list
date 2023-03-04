const project = (project) => {
    const projectCont = document.createElement("button");
    const projectCircle = document.createElement("div");
    const projectName = document.createElement("p");

    projectCont.classList.add("project-cont");
    projectCircle.classList.add("project-circle");
    projectName.classList.add("project-name");

    projectCont.style.borderColor = project.color;
    projectCircle.style.backgroundColor = project.color;
    projectName.textContent = project.name;

    projectCont.appendChild(projectCircle);
    projectCont.appendChild(projectName);

    projectCont.style.setProperty("--bg-hover", project.color + "2F");
    projectCont.style.setProperty("--bg-active", project.color + "8F");

    return projectCont;
};

export default project;
