const overlay = () => {
    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    overlay.onclick = (e) => {
        document.querySelector(".add-todo-form") || e.key === "Escape" ? document.querySelector("#close-add-todo").click() : "";
    };
    return overlay;
};

const toggleBlackOverlay = () => document.querySelector("#overlay").classList.toggle("active");

export { overlay, toggleBlackOverlay };
export default overlay;
