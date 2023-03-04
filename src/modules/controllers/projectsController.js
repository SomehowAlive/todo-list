import Project from "../classes/Project";

const projects = [new Project("default", "#FFFFFF")];

const addProject = (projectToAdd) => {
    if (projects.some((project) => project.name === projectToAdd.name)) return false;
    projects.push(projectToAdd);
    return true;
};

const getProjects = () => projects;

const getProject = (index) => (index >= projects.length ? false : projects[index]);

const removeProject = (index) => {
    delete projects[index];
};

const getDefault = () => projects[0];

export { addProject, getProject, getProjects, getDefault, removeProject };
