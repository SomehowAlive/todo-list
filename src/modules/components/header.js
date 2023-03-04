import logo from "../../assets/logo.png";
import { openSidebarBtn } from "../controllers/Dom";

const header = () => {
    const header = document.createElement("div");
    const logoCont = document.createElement("div");
    const logoTxt = document.createElement("p");
    const logoImg = new Image();

    header.classList.add("header");
    logoImg.setAttribute("id", "logo");
    logoTxt.classList.add("logo-text");
    logoCont.classList.add("logo-cont");

    logoTxt.textContent = "Galactic Todos";
    logoImg.src = logo;

    logoCont.appendChild(logoImg);
    logoCont.appendChild(logoTxt);

    header.appendChild(openSidebarBtn());
    header.appendChild(logoCont);

    return header;
};

export default header;
