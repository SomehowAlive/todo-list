import { hideAddProject } from "./addProject";
const overlay = () => {
    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    overlay.onclick = (e) => {
        if (document.querySelector(".add-todo-form") || e.key === "Escape" || document.querySelector(".add-project-form")) {
            document.querySelector("#close-add-todo")?.click();
            hideAddProject();
        }
    };
    return overlay;
};

const toggleBlackOverlay = () => document.querySelector("#overlay").classList.toggle("active");

export { overlay, toggleBlackOverlay };
export default overlay;
