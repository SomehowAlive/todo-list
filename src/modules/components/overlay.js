const overlay = () => {
    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    overlay.onclick = () => {
        document.querySelector(".add-todo-form") ? document.querySelector("#close-add-todo").click() : "";
    };
    return overlay;
};

const toggleBlackOverlay = () => document.querySelector("#overlay").classList.toggle("active");

export { overlay, toggleBlackOverlay };
export default overlay;
